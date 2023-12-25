var md5 = require('md5');

mp.events.addCommand ('register', (player, _, login, pass, rpass) => {
    if (login == undefined || pass == undefined || rpass == undefined) return player.outputChatBox('/register [login] [password] [repeat password]');
    if (pass != rpass) return player.outputChatBox('Пароли не совпадают');
    DB.Handle.query("INSERT INTO accounts (login,password,SocialClub,regIP,lastIP,regDate,lastDate) VALUES (?,?,?,?,?,NOW(),NOW())", [login, md5(rpass), player.socialClub, player.ip, player.ip], (e) => {
        if (e) {
          player.notify("~r~Произошла ошибка!");
          console.log(e);
          return;
       }
       player.notify("~g~Вы успешно зарегестрировались!");
    });
})

mp.events.addCommand('login', (player, _, login, pass) => {
    if (login == undefined || pass == undefined) return player.outputChatBox('/login [login] [password]');
    DB.Handle.query('SELECT login,password FROM accounts WHERE login=? AND pass=?' [login, md5(pass)], function(e, result) {
        if (result[0]) {
            DB.Handle.query('SELECT * FROM banip WHERE playerIP = ?' [player.ip], function(e, res) {
                if (res[0].playerIP == player.ip) {
                    player.outputChatBox(`Вы были забанены Администратором ${res[0].admin} по причине: ${res[0].reason}`);
                    player.kick();
            
                }
            })
            player.notify(`~g~Вы успешно авторизовались, ${login}`);
            DB.Handle.query('UPDATE accounts SET lastIP=?, lastDate=NOW() WHERE login=?', [player.ip, login]);
        }else {
            player.notify('~r~Не верный логин или пароль!');
        }
    }); 
})
