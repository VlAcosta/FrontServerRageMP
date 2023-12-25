var md5 = require('md5');


mp.events.add('loginToServer', (player, login, pass) => {
    //mp.trigger('WarningLog', 'Авторизация успешно!');
    player.alpha == 255
    player.character = 0;
    player.login = login
    player.banned = false
    db.Handle.query('SELECT * FROM accounts WHERE login=? AND pass=?', [login, md5(pass)], function(e, result) {
        if (e) {
            player.notify("~r~Произошла ошибка!");
            console.log(e);
            return;
        }
        if (result[0]) {
                player.adminlvl = result[0]["adminlvl"];
                player.donate = result[0]["donate"];
                player.character1 = result[0]["character1"]
                player.character2 = result[0]["character2"]
                player.character3 = result[0]["character3"]
                player.notify(`~g~Вы успешно авторизовались, ${login}`);
                player.notify(`~o~ ${player.character1}, ${player.character2}, ${player.character3}`);
                player.heading = -90;
                
                if (player.character1 == 0 && player.character2 == 0 && player.character3 == 0) {
                    player.notify(`~r~Создание`);
                    return player.call('createCharacter');
                }
                //if (player.adminlvl != 0) console.log(`${player.name} выполнил вход с уровнем админа - ${player.adminlvl}`);
                //player.dimension = 0;
                db.Handle.query('UPDATE accounts SET lastIP=?, lastDate=NOW() WHERE login=?', [player.ip, login]);
                //player.call('regSuccess');
                player.call('selectorChar');

        }else {
            return player.notify('~r~Не верный логин или пароль!');
        }
    });
})

mp.events.add('requestSelectorData', (player) => {
    login = player.login;
    donate = player.donate;
    if(player.character1 != 0) {
        db.Handle.query('SELECT * FROM characters WHERE id=?', [player.character1], function(e, result) {
            if(result[0]){
                player.call('selectorDataCEF', ([login, donate, 1, player.character1, result[0]['nickname'], result[0]['lvl'], result[0]['timeHour'], result[0]['fraction'], result[0]['money'].toLocaleString('de-DE'), result[0]['bank'].toLocaleString('de-DE'), result[0]['dateBan'], result[0]['dateEndBan'], result[0]['adminBan'], result[0]['reasonBan']]));
            }
        });
    } else player.call('selectorDataCEF', (login, donate, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));

    if(player.character2 != 0) {
        db.Handle.query('SELECT * FROM characters WHERE id=?', [player.character2], function(e, result) {
            if(result[0]){
                player.call('selectorDataCEF',([login, donate, 2, player.character2, result[0]['nickname'], result[0]['lvl'], result[0]['timeHour'], result[0]['fraction'], result[0]['money'].toLocaleString('de-DE'), result[0]['bank'].toLocaleString('de-DE'), result[0]['dateBan'], result[0]['dateEndBan'], result[0]['adminBan'], result[0]['reasonBan']]));
            }
        });
    } else player.call('selectorDataCEF', ([login, donate, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

    if(player.character3 != 0) {
        db.Handle.query('SELECT * FROM characters WHERE id=?', [player.character3], function(e, result) {
            if(result[0]){
                player.call('selectorDataCEF',([login, donate, 3, player.character3, result[0]['nickname'], result[0]['lvl'], result[0]['timeHour'], result[0]['fraction'], result[0]['money'], result[0]['bank'], result[0]['dateBan'], result[0]['dateEndBan'], result[0]['adminBan'], result[0]['reasonBan']]));
            }
        });
    } else player.call('selectorDataCEF', ([login, donate, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
})

mp.events.add('SaveCharacter', (player, nickname, characterage, currentGender, father, mother, similarity, skin, features, appearance_values, hair_or_colors) => {
    var parents = {"Father":father,"Mother":mother,"Similarity":similarity,"SkinSimilarity":skin};
    var colors = JSON.parse(hair_or_colors);
    var hair = {"Hair":colors[0],"Color":colors[1],"HighlightColor":colors[2]};
    var tattoos = {"0":[],"1":[],"2":[],"3":[],"4":[],"5":[]}

    db.Handle.query('SELECT * FROM characters WHERE (nickname = ?)', [nickname], function(e, r) {
        if (e) {
            player.notify("~r~Произошла ошибка!");
            console.log(e);
            return;
        }
        if (r[0].nickname == nickname) return player.notify("~y~Никнейм уже занят!");
    });
    db.Handle.query("INSERT INTO `characters` SET nickname=?,login=?,money=?,age=?,gender=?,parents=?,features=?,appearance=?,hair=?,tattoos=?,eyebrowc=?,beardc=?,eyec=?,blushc=?,lipstickc=?,chesthairc=?", [nickname,player.login,1000,characterage,currentGender,JSON.stringify(parents),features,appearance_values,JSON.stringify(hair),JSON.stringify(tattoos),JSON.stringify(colors[3]),JSON.stringify(colors[4]),JSON.stringify(colors[5]),JSON.stringify(colors[6]),JSON.stringify(colors[7]),JSON.stringify(colors[8])], (e) => {
        if (e) {
            player.notify("~r~Произошла ошибка!");
            console.log(e);
            return;
        }
    });
    db.Handle.query('SELECT * FROM characters WHERE (nickname = ?)', [nickname], function(e, r) {
        if (e) {
            player.notify("~r~Произошла ошибка!");
            console.log(e);
            return;
        }
        player.character = r[0].id;
        player.notify(`~o~Персонаж ${player.character}`)
        player.notify(`~o~ ${player.character1}, ${player.character2}, ${player.character3}`);
        if (player.character1 == 0) {
            db.Handle.query('UPDATE accounts SET character1=?, lastDate=NOW() WHERE login=?', [player.character, player.login], function(e, r)  {
                if (e) {
                    player.notify("~r~Произошла ошибка!");
                    console.log(e);
                    return;
                }
            });
        } else if (player.character2 == 0 ) {
            db.Handle.query('UPDATE accounts SET character2=?, lastDate=NOW() WHERE login=?', [player.character, player.login]);
        } else if (player.character3 == 0 ) {
            db.Handle.query('UPDATE accounts SET character3=?, lastDate=NOW() WHERE login=?', [player.character, player.login]);
            
        } else return player.notify("~r~Произошла ошибка!1");
        
    })



    player.dimension = 0;
    player.name = nickname;
    player.call('charCreateSuccess');
    
})

mp.events.add('registerToServer', (player, login, email, pass) => {
    db.Handle.query('SELECT login,socialClub FROM accounts WHERE (login = ?) OR (socialClub=?)', [login, player.socialClub], function(e, r) {
        if (e) {
            player.notify("~r~Произошла ошибка!");
            console.log(e);
            return;
        }
        if (r[0].login == login) return player.notify("~y~Логин уже занят!");
        
        if (r[0].socialClub == player.socialClub) return player.notify("Этот ~o~SocialClub~w~ уже зарегистрирован!");

        //player.notify(`${r[0].login}:${login}`);
        db.Handle.query("INSERT INTO accounts (login,pass,email,adminlvl,socialClub,regIP,lastIP,regDate,lastDate) VALUES (?,?,?,?,?,?,?,NOW(),NOW())", [login, md5(pass), email, 0, player.socialClub, player.ip, player.ip], (e) => {
            if (e) {
                player.notify("~r~Произошла ошибка!");
                console.log(e);
                return;
            }
            player.notify("~g~Вы успешно зарегестрировались!");
            //player.call('showUserdataWindow');
            //player.dimension = 0;
            //player.call('regSuccess');
            player.heading = -90;
            return player.call('createCharacter');
        });
    });
})

mp.events.add('serverLoadCharacter', (player, selectedChar) => {
    player.setCustomization(true,1,1,0,1,1,0,1,1,0,1,1,1,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    player.listChar = [player.character1, player.character2, player.character3]
    player.character = player.listChar[selectedChar]
    db.Handle.query('SELECT * FROM characters WHERE id=?', [player.character], function(e, r) {
        if (e) {
            player.notify("~r~Произошла ошибка!");
            console.log(e);
            return;
        }
        player.notify('Персонаж не загружен')
        
        player.notify('Персонаж загружен')
        /*player.setCustomization(r[0]["gender"], JSON.parse(r[0]["parents"]).Mother, JSON.parse(r[0]["parents"]).Father, 0, JSON.parse(r[0]["parents"]).Mother, JSON.parse(r[0]["parents"]).Father, 0, JSON.parse(r[0]["parents"]).Similarity, JSON.parse(r[0]["parents"]).SkinSimilarity, 0, r[0]["eyec"], r[0]["hair"].Color, r[0]["hair"].HighlightColor, 
            r[0]["features"]
        );*/


    });
})