var md5 = require('md5');


mp.events.add('loginToServer', (player, login, pass) => {
    //mp.trigger('WarningLog', 'Авторизация успешно!');
    player.alpha == 0;
    player.login = login
    player.banned = false
    db.Handle.query('SELECT * FROM accounts WHERE login=? AND pass=?', [login, md5(pass)], function(e, result) {
        if (e) {
            player.call('playerNotify',(['Произошла ошибка! DB', 'no']));
            console.log(e);
            return;
        }
        if (result[0]) {
            if (result[0]["isBanned"] == 1) return player.call('playerNotify',(['Ваш SocialClub заблокирован!', 'info']));
                //player.adminlvl = result[0]["adminlvl"];
                player.donate = result[0]["donate"];
                //player.call('playerNotify',([`Вы успешно авторизовались, ${login}`, 'yes']));

                player.heading = -90;
                player.call('saveLoginInStorage', [player.login]);
                //if (player.adminlvl != 0) console.log(`${player.name} выполнил вход с уровнем админа - ${player.adminlvl}`);
                //player.dimension = 0;
                db.Handle.query('UPDATE accounts SET lastIP=?, lastDate=NOW() WHERE login=?', [player.ip, login]);
                //player.call('regSuccess');
                player.call('selectorChar');
        }else {
            return player.call('playerNotify',(['Не верный логин или пароль!', 'no']));
        }
    });
})

mp.events.add('requestSelectorData', (player) => {
    player.alpha == 0;
    donate = player.donate;
    db.Handle.query('SELECT * FROM characters WHERE login=?', [player.login], function(e, result) {
        if(result){
            for (let i = 0; i < result.length; i += 1) {
                //Math.ceil(Math.pow((curLevel + 0) * (1/1.3), 2))
                player.call('selectorDataCEF', ([donate, result[i]['id'], result[i]['nickname'], Math.floor(1.3 * Math.sqrt(result[i]['exp']))+1, result[i]['exp'], result[i]['fraction'], result[i]['money'], result[i]['bank'], result[i]['dateBan'], result[i]['dateEndBan'], result[i]['adminBan'], result[i]['reasonBan']]));
            }
        }
    });
    
})

mp.events.add('SaveCharacter', (player, nickname, characterage, currentGender, father, mother, similarity, skin, features, appearance_values, hair_or_colors) => {
    var parents = {"Father":father,"Mother":mother,"Similarity":similarity,"SkinSimilarity":skin};
    var colors = JSON.parse(hair_or_colors);
    var hair = {"Hair":colors[0],"Color":colors[1],"HighlightColor":colors[2]};
    var tattoos = {"0":[],"1":[],"2":[],"3":[],"4":[],"5":[]}

    db.Handle.query('SELECT * FROM characters WHERE (nickname = ?)', [nickname], function(e, r) {
        if (e) {
            player.call('playerNotify',(['Произошла ошибка! DB', 'no']));
            console.log(e);
            return;
        }

        if (r[0]) {
            player.call('playerNotify',(['Никнейм уже занят!', 'info']));
            return player.call('againCharacterCret')
        }
        db.Handle.query('INSERT INTO `characters` SET nickname=?,login=?,money=?,age=?,gender=?,parents=?,features=?,appearance=?,hair=?,tattoos=?,eyebrowc=?,beardc=?,eyec=?,blushc=?,lipstickc=?,chesthairc=?', [nickname,player.login,1000,characterage,currentGender,JSON.stringify(parents),features,appearance_values,JSON.stringify(hair),JSON.stringify(tattoos),JSON.stringify(colors[3]),JSON.stringify(colors[4]),JSON.stringify(colors[5]),JSON.stringify(colors[6]),JSON.stringify(colors[7]),JSON.stringify(colors[8])], function(e, r) {
            if (e) {
                pplayer.call('playerNotify',(['Произошла ошибка! DB', 'no']));
                console.log(e);
                return;
            }
            player.call('updateCountPlayers', [mp.players.length]);
            player.call('showMyHUD', true);

            player.call('charCreateSuccess');

            player.pid = r.insertId;
            player.setVariable('pid', player.pid)
            player.alpha == 255;
            player.dimension = 0;
            player.name = nickname;
            player.nickname = nickname;
            player.adminlvl = 0;
            player.setVariable('isAdminAuth', false);
            player.setVariable('isPlayerAuth', true);
            player.authReady = true;
            player.timeHour = 0;

            player.adminlvl = 0;
            player.money = 1000;
            player.bank = 0;
            player.lvl = Math.floor(1.3 * Math.sqrt(0))+1;
            player.exp = 0;
            player.age = characterage;

            player.mute = 0;
            player.muteReason = '';
            player.inmute = false;
            player.demorgan = 0;
            player.demorganReason = '';
            player.indemorgan = false;
            player.warns = 0;
            player.warnsall = 0;

            player.playtimem = 0;

            player.work = 0;
            player.workmoney = 0;
            player.portWorkLvl = 0;
            player.portWorkExp = 0;
            player.rubbishWorkLvl = 0;
            player.rubbishWorkExp = 0;
            player.constructWorkLvl = 0;
            player.constructWorkExp = 0;

            db.Handle.query('SELECT * FROM characters WHERE id=?', [player.pid], function(e, r) {
                if (e) {
                    player.call('playerNotify',(['Произошла ошибка! DB', 'no']));
                    console.log(e);
                    return;
                }
                player.colorForOverlayIdx = function(index) {
                    let color;
            
                    switch (index) {
                        case 1:
                            color = Number(r[0]["beardc"])
                        break;
            
                        case 2:
                            color = Number(r[0]["eyebrowc"])
                        break;
            
                        case 5:
                            color = Number(r[0]["blushc"])
                        break;
            
                        case 8:
                            color = Number(r[0]["lipstickc"])
                        break;
            
                        case 10:
                            color = Number(r[0]["chesthairc"])
                        break;
            
                        default:
                            color = 0;
                    }
            
                    return color
                }

                player.setClothes(2, JSON.parse(r[0]["hair"]).Hair, 0, 0);
                for (let i = 0; i < 10; i++) player.setHeadOverlay(i, [JSON.parse(r[0]['appearance'].split("[").join("").split("]").join("").split("},{").join("}|{").split("|")[i]).Value, JSON.parse(r[0]['appearance'].split("[").join("").split("]").join("").split("},{").join("}|{").split("|")[i]).Opacity, player.colorForOverlayIdx(i), 0]);
                player.setCustomization(r[0]["gender"]==0, JSON.parse(r[0]["parents"]).Mother, JSON.parse(r[0]["parents"]).Father, 0, JSON.parse(r[0]["parents"]).Mother, JSON.parse(r[0]["parents"]).Father, 0, JSON.parse(r[0]["parents"]).Similarity, JSON.parse(r[0]["parents"]).SkinSimilarity, 0, Number(r[0]["eyec"]), JSON.parse(r[0]["hair"]).Color, JSON.parse(r[0]["hair"]).HighlightColor, [r[0]['features'].split("[").join("").split("]").join("").split(",")]);
        });
        });
        
    });
    
})

mp.events.add('registerToServer', (player, login, email, pass) => {
    db.Handle.query('SELECT login,socialClub FROM accounts WHERE (login = ?) OR (socialClub=?)', [login, player.socialClub], function(e, r) {
        if (e) {
            player.call('playerNotify',(['Произошла ошибка! DB', 'no']));
            console.log(e);
            return;
        }
        if (r[0]) {
            if (r[0].socialClub == player.socialClub) return player.call('playerNotify',(['Этот SocialClub уже зарегистрирован!', 'info']));
            if (r[0].login == login) return player.call('playerNotify',(['Логин уже занят!', 'info']));
        }

        db.Handle.query("INSERT INTO `accounts` SET login=?,pass=?,email=?,socialClub=?,regIP=?,lastIP=?,regDate=NOW(),lastDate=NOW()", [login, md5(pass), email, player.socialClub, player.ip, player.ip], (e) => {
            if (e) {
                player.call('playerNotify',(['Произошла ошибка! DB', 'no']));
                console.log(e);
                return;
            }
            player.call('playerNotify',(['Вы успешно зарегистрировались!', 'yes']));
            //player.call('showUserdataWindow');
            //player.dimension = 0;
            //player.call('regSuccess');
            player.heading = -90;
            player.login = login;
            player.call('saveLoginInStorage', [player.login]);
            return player.call('createCharacter');
        });

        
    });
})

mp.events.add('serverLoadCharacter', (player, pid) => {
    db.Handle.query('SELECT * FROM characters WHERE id=?', [pid], function(e, r) {
        if (e) {
            player.call('playerNotify',(['Произошла ошибка! DB', 'no']));
            console.log(e);
            return;
        }
        player.colorForOverlayIdx = function(index) {
            let color;
    
            switch (index) {
                case 1:
                    color = Number(r[0]["beardc"])
                break;
    
                case 2:
                    color = Number(r[0]["eyebrowc"])
                break;
    
                case 5:
                    color = Number(r[0]["blushc"])
                break;
    
                case 8:
                    color = Number(r[0]["lipstickc"])
                break;
    
                case 10:
                    color = Number(r[0]["chesthairc"])
                break;
    
                default:
                    color = 0;
            }
    
            return color
        }
        player.pid = pid;
        player.setVariable('pid', player.pid)
        player.setVariable('rentVehicleID', 'none')
        player.alpha == 255;
        player.name = r[0]['nickname'];
        player.nickname = r[0]['nickname'];
        player.adminlvl = r[0]['adminlvl'];
        player.setVariable('adminlvl', r[0]['adminlvl']);
        player.setVariable('isAdminAuth', false);
        player.setVariable('isPlayerAuth', true);
        player.adminpass = r[0]['apassword'];
        player.setVariable('adminpass', r[0]['apassword']);
        player.money = r[0]['money'];
        player.timeHour = r[0]['timeHour'];
        player.setVariable('money', player.money)
        player.bank = r[0]['bank'];
        player.exp = r[0]['exp'];
        player.lvl = Math.floor(1.3 * Math.sqrt(player.exp))+1;
        player.gender = r[0]["gender"]==0;
        player.age = r[0]['age'];

        player.mute = r[0]['mute'];
        player.muteReason = r[0]['muteReason'];
        player.inmute = false;
        player.setVariable('isMuted', false);
        player.demorgan = r[0]['demorgan'];
        player.demorganReason = r[0]['demorganReason'];
        player.indemorgan = false;
        player.warn = r[0]['warn'];
        player.warnsall = r[0]['warnsall'];

        player.fraction = r[0]['fraction'];
        player.fractionrank = r[0]['fractionRank'];
        player.work = 0;
        player.workmoney = 0;
        player.portWorkLvl = r[0]['portWorkLvl'];
        player.portWorkExp = r[0]['portWorkExp'];
        player.rubbishWorkLvl = r[0]['rubbishWorkLvl'];
        player.rubbishWorkExp = r[0]['rubbishWorkExp'];
        player.constructWorkLvl = r[0]['constructWorkLvl'];
        player.constructWorkExp = r[0]['constructWorkExp'];
        mp.events.call('serverSendLog', 'auth', player.pid, null, `${player.nickname}[${player.id}](PID: ${player.pid}) (socialClub: ${player.socialClub}) - авторизовался`);
        if (player.fraction != 'none'){
            //player.outputChatBox(`${player.fraction} - ${LSPDranks[player.fractionrank].name} (${player.fractionrank})`)
        }
        
        player.playtimeinh = 0;
        player.playtimem = 0;

        let date = new Date();

        if ((r[0]['paydaytime'].split(',')[0] == date.getDate()) && (r[0]['paydaytime'].split(',')[1] == date.getMonth()+1) && (r[0]['paydaytime'].split(',')[2] == date.getFullYear()) && (r[0]['paydaytime'].split(',')[3]) == date.getHours()) {
            player.playtimeinh = parseInt(r[0]['paydaytime'].split(',')[4]);
            player.outputChatBox(`Отыграно за этот час: ${r[0]['paydaytime'].split(',')[4]}`)
        } else player.playtimeinh = 0;

        



        player.setClothes(2, JSON.parse(r[0]["hair"]).Hair, 0, 0);
        for (let i = 0; i < 10; i++) player.setHeadOverlay(i, [JSON.parse(r[0]['appearance'].split("[").join("").split("]").join("").split("},{").join("}|{").split("|")[i]).Value, JSON.parse(r[0]['appearance'].split("[").join("").split("]").join("").split("},{").join("}|{").split("|")[i]).Opacity, player.colorForOverlayIdx(i), 0]);
        player.setCustomization(r[0]["gender"]==0, JSON.parse(r[0]["parents"]).Mother, JSON.parse(r[0]["parents"]).Father, 0, JSON.parse(r[0]["parents"]).Mother, JSON.parse(r[0]["parents"]).Father, 0, JSON.parse(r[0]["parents"]).Similarity, JSON.parse(r[0]["parents"]).SkinSimilarity, 0, Number(r[0]["eyec"]), JSON.parse(r[0]["hair"]).Color, JSON.parse(r[0]["hair"]).HighlightColor, [r[0]['features'].split("[").join("").split("]").join("").split(",")]);
        if (r[0]['posX'] == null ) {
            player.position = new mp.Vector3(-424, 1124, 329);
        } else {
            player.position = new mp.Vector3(r[0]['posX'], r[0]['posY'], r[0]['posZ']);
        }
        player.dimension = 0;
        if (player.demorgan > 0) {
            player.outputChatBox(`!{F29B16}${player.demorganReason}`);
            player.indemorgan = true;
            player.dimension = 2;
            player.position = new mp.Vector3(1651.28, 2570.36, 45.7);
        }
        if (player.mute > 0) {
            player.outputChatBox(`!{F29B16}${player.muteReason}`);
            player.inmute = true;
            player.setVariable('isMuted', true);
        }
        player.authReady = true;
        player.call('charSelectionSuccess');
        player.call('updateCountPlayers', [mp.players.length]);
        player.call('showMyHUD', true);
        mp.players.forEach(admin => {
            if (admin.getVariable('isAdminAuth')) {
                admin.outputChatBox(`!{DA16BD}[ВХОД]!{FFFFFF} ${player.login} ${player.nickname}[${player.id}] [SocialClub: ${player.socialClub}]`);
            }
        })
    });
})

mp.events.add('localCharacterGet', (player, charSel) => {
    db.Handle.query('SELECT * FROM characters WHERE id=?', [charSel], function(e, r) {
        if (e) {
            player.call('playerNotify',(['Произошла ошибка! DB', 'no']));
            console.log(e);
            return;
        }
        player.colorForOverlayIdx = function(index) {
            let color;
    
            switch (index) {
                case 1:
                    color = Number(r[0]["beardc"])
                break;
    
                case 2:
                    color = Number(r[0]["eyebrowc"])
                break;
    
                case 5:
                    color = Number(r[0]["blushc"])
                break;
    
                case 8:
                    color = Number(r[0]["lipstickc"])
                break;
    
                case 10:
                    color = Number(r[0]["chesthairc"])
                break;
    
                default:
                    color = 0;
            }
    
            return color
        }
        player.alpha == 255;
        player.setClothes(2, JSON.parse(r[0]["hair"]).Hair, 0, 0);
       for (let i = 0; i < 10; i++) player.setHeadOverlay(i, [JSON.parse(r[0]['appearance'].split("[").join("").split("]").join("").split("},{").join("}|{").split("|")[i]).Value, JSON.parse(r[0]['appearance'].split("[").join("").split("]").join("").split("},{").join("}|{").split("|")[i]).Opacity, player.colorForOverlayIdx(i), 0]);
        player.setCustomization(r[0]["gender"]==0, JSON.parse(r[0]["parents"]).Mother, JSON.parse(r[0]["parents"]).Father, 0, JSON.parse(r[0]["parents"]).Mother, JSON.parse(r[0]["parents"]).Father, 0, JSON.parse(r[0]["parents"]).Similarity, JSON.parse(r[0]["parents"]).SkinSimilarity, 0, Number(r[0]["eyec"]), JSON.parse(r[0]["hair"]).Color, JSON.parse(r[0]["hair"]).HighlightColor, [r[0]['features'].split("[").join("").split("]").join("").split(",")]);
    });
})



function playerQuitHandler(player) {
    if (player.authReady) {
        let date = new Date();
        db.Handle.query('UPDATE characters SET paydaytime=? WHERE id=?', [`${date.getDate()},${date.getMonth()+1},${date.getFullYear()}, ${date.getHours()}, ${player.playtimeinh}`, player.pid]);
        pos = player.position;
        db.Handle.query('UPDATE characters SET posX=?, posY=?, posZ=? WHERE id=?', [pos.x, pos.y, pos.z, player.pid]);
    }
}
  
mp.events.add("playerQuit", playerQuitHandler);


mp.events.add('playerMe', (player, value1, value2) => {
    if (value1 == 'belt') {
        if (value2) {
            if (player.gender) mp.players.broadcastInRange(player.position, 10, `!{ba93d9}${player.name.replace('_', ' ')}[${player.id}] пристегнул ремень безопасности`);
            else mp.players.broadcastInRange(player.position, 10, `!{ba93d9}${player.name.replace('_', ' ')}[${player.id}] пристегнула ремень безопасности`);
        } else {
            if (player.gender) mp.players.broadcastInRange(player.position, 10, `!{ba93d9}${player.name.replace('_', ' ')}[${player.id}] отстегнул ремень безопасности`);
            else mp.players.broadcastInRange(player.position, 10, `!{ba93d9}${player.name.replace('_', ' ')}[${player.id}] отстегнула ремень безопасности`);
        }
    }
})

mp.events.add('noclipINV', (player, value) => {
    if(value) player.alpha = 0;
    else player.alpha = 255;
})


mp.events.add('saveAdminPass', (player, apass) => {
    db.Handle.query('UPDATE characters SET apassword=? WHERE id=?', [md5(apass), player.pid]);
    player.adminpass = md5(apass);
    player.setVariable('adminpass', md5(apass));
})
let adminrank = ['', 'Хелпер 1 Уровня', 'Хелпер 2 Уровня', 'Хелпер 3 уровня', 'Администратор 1 Уровня', 'Администратор 2 Уровня', 'Администратор 3 Уровня', 'Партнер проекта', 'Заместитель Главного Администратора', 'Главный Администратор', 'Технический Администратор', 'Разработчик', 'Руководство'];
mp.events.add('adminAuth', (player, apass) => {
    if(player.adminpass == md5(apass)) {
        player.call('successAdminAuth');
        player.call('playerNotify',([`Успешная авторизация с ${player.adminlvl} уровнем админки!`, 'yes']));
        player.setVariable('isAdminAuth', true);
        console.log(`${player.name} авторизовался в админке - ${player.adminlvl} лвл`);
        mp.events.call('serverSendLog', 'adminauth', player.pid, null, `${player.nickname}[${player.id}](PID: ${player.pid}) (socialClub: ${player.socialClub}) - авторизовался как ${adminrank[player.adminlvl]}(${player.adminlvl})`);
        mp.players.forEach(admin => {
            if (admin.getVariable('isAdminAuth') && admin.adminlvl >= 4) {
                if ((player.adminlvl >= 9 && admin.adminlvl < 8) || (admin.adminlvl < 4 && player.adminlvl > admin.adminlvl)) return
                admin.outputChatBox(`!{F13F37}[A] ${player.nickname.replace('_', ' ')}[${player.id}](PID: ${player.pid}) - авторизовался как ${adminrank[player.adminlvl]}`);
            }
        })
    } else {
        
        player.call('playerNotify',(['Не верный пароль!', 'no']));
    }
})

mp.events.add('serverGetDataPlayer', (player, value1, value2) => {
    if (value1 == 'id') {
        if (!Number.isInteger(parseInt(value2))) return player.call('playerNotify',([`Введите корректный id`, 'no']));
        var target = mp.players.at(parseInt(value2));
        if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
        if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
        player.call('clientSendDataPlayerbyID', ([target.id, target.nickname, target.pid, target.lvl, target.timeHour, target.login, target.socialClub, target.money, target.bank, target.warn, target.warnsall]))
        //player.call('playerNotify',([`${target.name}[${target.id}] #${target.pid}`, 'info']));
    } else if (value1 == 'nickname') {
        countScPl = 0;
        mp.players.forEach(player => {
            if (player.nickname == value2) {
                countScPl++;
                player.call('clientSendDataPlayerbyNickname', ([1, player.id, player.nickname, player.pid, player.lvl, player.timeHour, player.login, player.socialClub, player.money, player.bank, player.warn, player.warnsall]));
            }
        })
        if (countScPl < 1) {
            db.Handle.query('SELECT * FROM characters WHERE nickname=?', [value2], function(e, r) {
                if (e) {
                    player.call('playerNotify',(['Произошла ошибка! DB', 'no']));
                    console.log(e);
                    return;
                }
                if (r[0]) {
                    db.Handle.query('SELECT * FROM accounts WHERE login=?', [r[0]['login']], function(err, res) {
                        if (err) {
                            player.call('playerNotify',(['Произошла ошибка! DB', 'no']));
                            console.log(e);
                            return;
                        }
                        player.call('clientSendDataPlayerbyNickname', ([0, 0, r[0]['nickname'], r[0]['id'], Math.floor(1.3 * Math.sqrt(r[0]['exp']))+1, r[0]['timeHour'], r[0]['login'], res[0]['socialClub'], r[0]['money'], r[0]['bank'], r[0]['warn'], r[0]['warnsall']]));
                    })
                } else player.call('playerNotify',(['Игрок не найден', 'no']));
            })
        }
    }
})

mp.events.add('serverSendLog', (type, from, to, text) => {
    let ts = (Math.round((new Date()).getTime() / 1000)) - (3600 * 2);
    db.Handle.query("INSERT INTO `logs` SET type=?,fromPl=?,toPl=?,textmsg=?,timest=?", [type, from, to, text, ts], (e) => {
        if (e) {
            console.log(e);
            return;
        }
    });
})

mp.events.add('logOutAdminServer', (player) => {
    player.setVariable('isAdminAuth', false);
    console.log(`${player.name} вышел с админки - ${player.adminlvl} лвл`);
})

mp.events.add('updateAdminPanelSettings', (player, value1, value2, value3, value4) => {
    player.setVariable('viewAuthPlayers', value1)
    player.setVariable('hideAdminRedTag', value2)
    if (!value3 || value4 == '') player.setVariable('isAdminCustomRedTag', false)
    else player.setVariable('isAdminCustomRedTag', true)
    player.setVariable('adminCustomRedTag', value4)
})

setInterval(function() {
    mp.players.forEach(player => {
        if(!player.authReady) return;
        pos = player.position;
        db.Handle.query('UPDATE characters SET posX=?, posY=?, posZ=? WHERE id=?', [pos.x, pos.y, pos.z, player.pid]);

        if (player.mute > 0) {
            player.inmute = true;
            player.setVariable('isMuted', true);
            player.mute -= 1;
            if (player.mute <= 0) {
                player.inmute = false;
                player.setVariable('isMuted', false);
                player.mute = 0;
                db.Handle.query('UPDATE characters SET mute=?, muteReason=? WHERE id=?', [0, null, player.pid]);
                player.call('playerNotify',([`Мут закончился`, 'info']));
            }
        } else if (player.inmute) {
            player.inmute = false;
            player.setVariable('isMuted', false);
            player.mute = 0;
            db.Handle.query('UPDATE characters SET mute=?, muteReason=? WHERE id=?', [0, null, player.pid]);
            player.call('playerNotify',([`Мут закончился`, 'info']));
        }
    })
}, 60000)


setInterval(function() {
    mp.players.forEach(player => {
        player.call('updateCountPlayers', [mp.players.length]);
        if(!player.authReady) return;
        if (player.demorgan > 0) {
            player.indemorgan = true;
            player.dimension = 2;
            let rnd = Math.floor(Math.random() * 3);
            if (rnd == 0){
                player.position = new mp.Vector3(1651.28, 2570.36, 45.7);
            } else if (rnd == 1) {
                player.position = new mp.Vector3(1642.85, 2570.35, 45.7);
            } else if (rnd == 2) {
                player.position = new mp.Vector3(1628.05, 2570.10, 45.7);
            }
            player.demorgan -= 15;
            db.Handle.query('UPDATE characters SET demorgan=? WHERE id=?', [player.demorgan, player.pid]);
            player.call('playerNotify',([`Осталось сидеть в деморгане ${player.demorgan} секунд`, 'info']));
            if (player.demorgan <= 0) {
                player.indemorgan = false
                player.dimension = 0;
                player.demorgan = 0;
                player.position = new mp.Vector3(412.08, -964.42, 29.48);
                db.Handle.query('UPDATE characters SET demorgan=?, demorganReason=? WHERE id=?', [0, null, player.pid]);
                player.call('playerNotify',([`Вы вышли из деморгана`, 'info']));
            }
        } else if (player.indemorgan) {
            player.indemorgan = false
            player.dimension = 0;
            player.demorgan = 0;
            player.position = new mp.Vector3(412.08, -964.42, 29.48);
            db.Handle.query('UPDATE characters SET demorgan=?, demorganReason=? WHERE id=?', [0, null, player.pid]);
            player.call('playerNotify',([`Вы вышли из деморгана`, 'info']));
        }
        
    })
}, 15000)


setInterval(function() {
    var d = new Date();
    var month_num = d.getMonth()+1
    var day = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    
    if (month_num <= 9) month_num = "0" + month_num;
    if (day <= 9) day = "0" + day;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;

    dates = day + "." + month_num + "." + d.getFullYear();
    times = hours + ":" + minutes;
    mp.players.forEach(player => {
        player.call('updateTimeHUD', [dates, times]);
        player.call('updateTimeServ', [hours, minutes, d.getSeconds(), day, month_num, d.getFullYear()]);
        player.setVariable('money', player.money)
    })
}, 5000)

setInterval(function() {
    mp.players.forEach(player => {
        player.playtimem += 1;
        player.playtimeinh += 1;
    })
}, 60000)

