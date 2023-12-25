let adminrank = ['', 'Хелпера 1 Уровня', 'Хелпера 2 Уровня', 'Хелпера 3 уровня', 'Администратора 1 Уровня', 'Администратора 2 Уровня', 'Администратора 3 Уровня', 'Партнера проекта', 'Заместителя Главного Администратора', 'Главного Администратора', 'Технического Администратора', 'Разработчика', 'Руководства'];

//----------------------- Панель
mp.events.add('adminVehSpawnPanelServer', (player, veh) => {
    if (player.adminlvl < 4) return player.call('playerNotify',([`Недостаточно прав`, 'no']));
    let pos = player.position;
    var adminVeh = mp.vehicles.new(mp.joaat(veh), new mp.Vector3(pos.x + 2, pos.y, pos.z));
    adminVeh.setColor(parseInt(0), parseInt(0));
    adminVeh.numberPlate = 'RAGERP';
    console.log(`${player.name} заспавнил автомобиль с id: [${adminVeh.id}]`);
    adminVeh.setVariable('type', 'admin');
    adminVeh.setVariable('adminName', player.name);
    setTimeout(() => {
        player.putIntoVehicle(adminVeh, 0);
    }, 400)
})

mp.events.add('adminVehList_RefreshCallServ', (player) => {
    if (player.adminlvl < 4) return player.call('playerNotify',([`Недостаточно прав`, 'no']));
    mp.vehicles.forEach(target => {
        if (target.getVariable('type') == 'admin') player.call('adminVehList_RefreshSend', ([target.id, target.model, target.getVariable('adminName')]))
    })
})

mp.events.add('adminVehList_DeleteVehServ', (player, veh) => {
    if (player.adminlvl < 4) return player.call('playerNotify',([`Недостаточно прав`, 'no']));
    if (!mp.vehicles.at(veh)) return player.call('playerNotify',([`Автомобиль не найден`, 'info']));
    if (mp.vehicles.at(veh).getVariable('type') == 'admin') {
        mp.vehicles.at(veh).destroy();
        player.call('playerNotify',([`Автомобиль успешно удален`, 'yes']));
    }
})

mp.events.add('adminVehList_DeleteAllVehServ', (player) => {
    if (player.adminlvl < 4) return player.call('playerNotify',([`Недостаточно прав`, 'no']));
    mp.vehicles.forEach(target => {
        if (target.getVariable('type') == 'admin') target.destroy();
    })
    player.call('playerNotify',([`Все админские автомобили успешно удалены`, 'yes']));
})

mp.events.add('adminPanelCommandServer', (player, command, pid, value1, value2) => {
    if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
    if(!player.getVariable('isAdminAuth')) return player.call('playerNotify',([`Авторизуйтесь в админ панели`, 'info']));
    countTPPl = 0;
    mp.players.forEach(target => {
        if (!target.authReady) return
        if (target.pid != pid) return
        countTPPl++;
        if (command == 'tpToPlayer') { // ------------------------------------------------ TP to Player
            if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            player.dimension = target.dimension;
            player.position = target.position;
            player.call('playerNotify',([`Вы телепортировались к игроку ${target.name}[${target.id}]`, 'yes']));
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} телепортировался к ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid}`);
        
        } else if (command == 'tpGetHerePlayer') { // ------------------------------------- TP Here
            if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            target.dimension = player.dimension;
            target.position = player.position;
            player.call('playerNotify',([`Вы телепортировали к себе игрока ${target.name}[${target.id}]`, 'yes']));
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} телепортировал к себе ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid}`);
        
        } else if (command == 'slapPlayer') { //------------------------------------------- Slap
            if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            pos = target.position;
            target.position = new mp.Vector3(pos.x, pos.y, pos.z + 4);
            player.call('playerNotify',([`Вы слапнули игрока ${target.name}[${target.id}]`, 'yes']));
            target.call('playerNotify',([`Вас подкинул администратор`, 'info']));
        
        } else if (command == 'tpPlayerDimZero') { // -------------------------------------- Dim 0
            if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            target.dimension = 0;
            player.call('playerNotify',([`Вы переместили игрока ${target.name}[${target.id}] в игровой мир`, 'yes']));
        
        } else if (command == 'pmPlayerSend') { // ----------------------------------------- Player Message
            if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            target.outputChatBox(`(( Администратор ${player.name.replace('_', ' ')}: ${value1} ))`);
            player.outputChatBox(`!{F08080}[A] ${player.name.replace('_', ' ')}: ${value1}`);
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} написал игроку ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid} : ${value1}`);
        
        } else if (command == 'setHPPlayer') { // ------------------------------------------ Set HP
            if (player.adminlvl < 5) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            target.health = parseInt(value1);
            player.call('playerNotify',([`Вы установили игроку ${target.name}[${target.id}] - ${value1} HP`, 'yes']));
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} выдал ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid} ${value1} HP`);
        
        } else if (command == 'setArmorPlayer') { // --------------------------------------- Set Armor
            if (player.adminlvl < 10) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            target.armour = parseInt(value1);
            player.call('playerNotify',([`Вы установили игроку ${target.name}[${target.id}] - ${value1}% Брони`, 'yes']));
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} выдал ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid} ${value1}% Брони`);
        
        } else if (command == 'setSkinPlayer') { // ---------------------------------------- Set Skin
            if (player.adminlvl < 5) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            target.model = mp.joaat(value1);
            player.call('playerNotify',([`Вы выдали игроку ${target.name}[${target.id}] временный скин ${value1}`, 'yes']));
            target.call('playerNotify',([`Администратор выдал вам временный скин`, 'info']));
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} выдал ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid} временный скин ${value1}`);
        
        } else if (command == 'kickPlayer') { // ------------------------------------------- Kick
            if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            //if (player == target) return player.call('playerNotify',([`Вы не можете кикнуть себя`, 'info']));
            mp.players.broadcast(`!{E32636}Администратор ${player.name.replace('_', ' ')} кикнул игрока ${target.name.replace('_', ' ')}[${target.id}]. Причина: ${value1}`);
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} кикнул игрока ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid}. Причина: ${value1}`);
            target.kick(value1);
        
        } else if (command == 'givePlayerMoney') { // ------------------------------------- Give Money
            if (player.adminlvl < 7) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            if (!Number.isInteger(parseInt(value1))) return player.call('playerNotify',([`Введите корректное число`, 'no']));
            if (value1 < 1) return player.call('playerNotify',([`Введите корректное число`, 'no']));
            target.money += parseInt(value1);
            if (target.money > 2147483647) target.money = 2147483647;
            target.setVariable('money', target.money);
            db.Handle.query('UPDATE characters SET money=? WHERE id=?', [target.money, target.pid]);
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} выдал ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid} - ${value1}$`);
            mp.events.call('serverSendLog', 'money', player.pid, target.pid, `${player.nickname.replace('_', ' ')} выдал ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid} - ${value1}$`);
            player.call('playerNotify',([`Вы выдали игроку ${target.name.replace('_', ' ')}[${target.id}] - ${value1}$`, 'yes']));
            target.call('playerNotify',([`Администратор выдал вам ${value1}$`, 'info']));
        
        } else if (command == 'makePlayerAdmin') { //------------------------------------------- Make Admin
            if (player.adminlvl < 8) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            if ((!Number.isInteger(parseInt(value1))) || (parseInt(value1) > 12)) return player.call('playerNotify',([`Введите корректное число до 12`, 'no']));
            if (player.adminlvl != 12 && rank >= player.adminlvl) return player.call('playerNotify',([`Вы не можете поставить игрока на администратора выше или равного вашему рангу`, 'no']));
            target.oldrank = target.adminlvl; 
            target.adminlvl = value1;
            target.setVariable('adminlvl', value1);
            db.Handle.query('UPDATE characters SET adminlvl=? WHERE id=?', [value1, target.pid]);
        
            if (target.oldrank == 0) {
                player.call('playerNotify',([`Вы поставили игрока ${target.name.replace('_', ' ')}[${target.id}] #${target.pid} на должность ${adminrank[value1]}`, 'yes']));
                target.call('playerNotify',([`Получены права ${adminrank[value1]}`, 'info']));
                console.log(`Администратор ${player.name}[${player.id}] поставил игрока ${target.name}[${target.id}] #${target.pid} на должность ${adminrank[value1]}`);
                mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')}[${player.id}] поставил игрока ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid} на должность ${adminrank[value1]}`);
            } else if (target.oldrank > value1) {
                player.call('playerNotify',([`Вы понизили ${adminrank[target.oldrank]} ${target.name.replace('_', ' ')}[${target.id}] #${target.pid} до ${adminrank[value1]}`, 'yes']));
                target.call('playerNotify',([`Права понижены с ${adminrank[target.oldrank]} до ${adminrank[value1]}`, 'info']));
                console.log(`Администратор ${player.name}[${player.id}] понизил ${adminrank[target.oldrank]} ${target.name}[${target.id}] #${target.pid} на должность ${adminrank[value1]}`);
                mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')}[${player.id}] понизил ${adminrank[target.oldrank]} ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid} на должность ${adminrank[value1]}`);
            } else if (target.oldrank < value1) {
                player.call('playerNotify',([`Вы повысили ${adminrank[target.oldrank]} ${target.name.replace('_', ' ')}[${target.id}] #${target.pid} до ${adminrank[value1]}`, 'yes']));
                target.call('playerNotify',([`Права повышены с ${adminrank[target.oldrank]} до ${adminrank[value1]}`, 'info']));
                console.log(`Администратор ${player.name}[${player.id}] повысил ${adminrank[target.oldrank]} ${target.name}[${target.id}] #${target.pid} на должность ${adminrank[value1]}`);
                mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')}[${player.id}] повысил ${adminrank[target.oldrank]} ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid} на должность ${adminrank[value1]}`);
            } else if (target.oldrank == value1) return player.call('playerNotify',([`Игрок уже имеет этот ранг`, 'info']));
        
        } else if (command == 'warnPlayer') { //-------------------------------------------- Warn
            if (player.adminlvl < 4) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            target.warn++;
            target.warnsall++;
            db.Handle.query('UPDATE characters SET warn=?, warnsall=? WHERE id=?', [target.warn, target.warnsall, target.pid]);
            mp.players.broadcast(`!{E32636}Администратор ${player.name.replace('_', ' ')} выдал варн игроку ${target.name.replace('_', ' ')}[${target.id}]. Причина: ${value1}`);
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} выдал варн игроку ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid}. Причина: ${value1}`);
            target.kick(value1);
        
        } else if (command == 'hardBan') { //-------------------------------------------- Hard Ban
            if (player.adminlvl < 5) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            mp.players.forEach(admin => {
                if (admin.getVariable('isAdminAuth')) {
                    admin.outputChatBox(`!{E32636}[A] ${player.name.replace('_', ' ')} выдал hardBan игроку ${target.name.replace('_', ' ')}[${target.id}]. Причина: ${value1}`);
                }
            })
            
            db.Handle.query('UPDATE accounts SET isBanned=? WHERE login=?', [1, target.login]);
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} выдал hardBan игроку ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid}. Причина: ${value1}`);
            setTimeout(function (){
                target.kick(value1);
            }, 3000)
        
        } else if (command == 'jailPlayer') { //-------------------------------------------- Jail
            if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            if ((!Number.isInteger(parseInt(value1))) || (parseInt(value1) < 1)) return player.call('playerNotify',([`Введите корректное число`, 'no']));
            if (target.demorgan > 0) return player.call('playerNotify',([`Игрок уже в деморгане`, 'info']));
            if (value1 > 9999999999) target.demorgan = 9999999999;
            else target.demorgan = value1*60;
            target.indemorgan = true;
            target.dimension = 2;
            target.position = new mp.Vector3(1651.28, 2570.36, 45.7);

            db.Handle.query('UPDATE characters SET demorgan=?, demorganReason=? WHERE id=?', [target.demorgan, `Вас посадил ${player.name.replace('_', ' ')}. Причина: ${value2}`, target.pid]);
            mp.players.broadcast(`!{E32636}Администратор ${player.name.replace('_', ' ')} посадил игрока ${target.name.replace('_', ' ')}[${target.id}]. Причина: ${value2}`);
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} посадил игрока ${target.nickname.replace('_', ' ')}[${target.id}]. Причина: ${value2}`);
            mp.players.forEach(admin => {
                if (admin.getVariable('isAdminAuth')) {
                    admin.outputChatBox(`!{E32636}[A] ${value1} м.`);
                }
                target.call('playerNotify',([`Вас посадили в деморган на ${value1} м. Причина: ${value2}`, 'info']));
            })
            target.outputChatBox(`!{F29B16}Администратор ${player.name.replace('_', ' ')} посадил вас в деморган на ${value1} м. Причина: ${value2}`);
        
        } else if (command === 'unJailPlayer') { //-------------------------------------------- UnJail
            if (player.adminlvl < 2) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            if (target.demorgan <= 0) return player.call('playerNotify',([`Игрок не в деморгане`, 'info']));
            target.indemorgan = false
            target.dimension = 0;
            target.demorgan = 0;
            target.position = new mp.Vector3(412.08, -964.42, 29.48);
            db.Handle.query('UPDATE characters SET demorgan=?, demorganReason=? WHERE id=?', [0, null, target.pid]);
            target.call('playerNotify',([`Администратор выпустил вас из деморгана`, 'info']));
            mp.events.call('serverSendLog', 'admin', player.pid, target.pid, `${player.nickname.replace('_', ' ')} выпустил из деморгана ${target.nickname.replace('_', ' ')}[${target.id}] #${target.pid}. Причина: ${value1}`);
            mp.players.forEach(admin => {
                if (admin.getVariable('isAdminAuth')) {
                    admin.outputChatBox(`!{E32636}[A] ${player.name.replace('_', ' ')} выпустил из деморгана ${target.name.replace('_', ' ')}[${target.id}] #${target.pid}. Причина: ${value1}`);
                }
            })
        
        } else if (command === 'mutePlayer') { //-------------------------------------------- Mute
            if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            if ((!Number.isInteger(parseInt(value1))) || (parseInt(value1) < 1)) return player.call('playerNotify',([`Введите корректное число`, 'no']));
            if (target.mute > 0) return player.call('playerNotify',([`Игрок уже заглушен`, 'info']));
            if (value1 > 9999999999) target.mute = 9999999999;
            else target.mute = value1;
            target.inmute = true;
            target.setVariable('isMuted', true);

            db.Handle.query('UPDATE characters SET mute=?, muteReason=? WHERE id=?', [target.mute, `Вас заглушил ${player.name.replace('_', ' ')}. Причина: ${value2}`, target.pid]);
            mp.players.broadcast(`!{E32636}Администратор ${player.name.replace('_', ' ')} заглушил игрока ${target.name.replace('_', ' ')}[${target.id}]. Причина: ${value2}`);
            mp.players.forEach(admin => {
                if (admin.getVariable('isAdminAuth')) {
                    admin.outputChatBox(`!{E32636}[A] ${value1} м.`);
                }
            })
            target.call('playerNotify',([`Вас заглушили на ${value1} м. Причина: ${value2}`, 'info']));
        
        } else if (command === 'unMutePlayer') { //-------------------------------------------- UnMute
            if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            if (target.mute <= 0) return player.call('playerNotify',([`Игрок не в муте`, 'info']));
            player.inmute = false;
            player.setVariable('isMuted', false);
            player.mute = 0;
            db.Handle.query('UPDATE characters SET mute=?, muteReason=? WHERE id=?', [0, null, player.pid]);
            
            mp.players.forEach(admin => {
                if (admin.getVariable('isAdminAuth')) {
                    admin.outputChatBox(`!{E32636}[A] ${player.name.replace('_', ' ')} снял мут ${target.name.replace('_', ' ')}[${target.id}] #${target.pid}. Причина: ${value1}`);
                }
            })
            target.call('playerNotify',([`Администратор снял вам мут`, 'info']));
        }
    })
    if (countTPPl == 0) {
        if (command == 'warnPlayer') { //-------------------------------------------- Warn Offline
            if (player.adminlvl < 4) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            db.Handle.query('SELECT * FROM characters WHERE id=?', [pid], function(e, r) {
                if (e) {
                    player.call('playerNotify',(['Произошла ошибка! DB', 'no']));
                    console.log(e);
                    return;
                }
                db.Handle.query('UPDATE characters SET warn=?, warnsall=? WHERE id=?', [r[0]['warn']+1, r[0]['warnsall']+1, pid]);
                mp.players.broadcast(`!{E32636}Администратор ${player.name.replace('_', ' ')} выдал варн игроку ${r[0]['nickname'].replace('_', ' ')}. Причина: ${value1}`);
            })
            return
        } else if (command == 'hardBan') { //-------------------------------------------- hardBan Offline
            if (player.adminlvl < 5) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            db.Handle.query('SELECT * FROM characters WHERE id=?', [pid], function(e, r) {
                if (e) {
                    player.call('playerNotify',(['Произошла ошибка! DB', 'no']));
                    console.log(e);
                    return;
                }
                db.Handle.query('UPDATE accounts SET isBanned=? WHERE login=?', [1,  r[0]['login']]);
                mp.players.forEach(admin => {
                    if (admin.getVariable('isAdminAuth')) {
                        admin.outputChatBox(`!{E32636}[A] ${player.name.replace('_', ' ')} выдал hardBan игроку ${r[0]['nickname'].replace('_', ' ')}. Причина: ${value1}`);
                    }
                })
            })
            return
        } else if (command == 'jailPlayer') { //-------------------------------------------- Jail Offline
            if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            if ((!Number.isInteger(parseInt(value1))) || (parseInt(value1) < 1)) return player.call('playerNotify',([`Введите корректное число`, 'no']));
            db.Handle.query('SELECT * FROM characters WHERE id=?', [pid], function(e, r) {
                if (value1 > 9999999999) db.Handle.query('UPDATE characters SET demorgan=?, demorganReason=? WHERE id=?', [9999999999, `Вас посадил ${player.name.replace('_', ' ')}. Причина: ${value2}`, pid]);
                else db.Handle.query('UPDATE characters SET demorgan=?, demorganReason=? WHERE id=?', [value1*60, `Вас посадил ${player.name.replace('_', ' ')}. Причина: ${value2}`, pid]);
                
                mp.players.broadcast(`!{E32636}Администратор ${player.name.replace('_', ' ')} посадил игрока ${r[0]['nickname'].replace('_', ' ')}. Причина: ${value2}`);
                mp.players.forEach(admin => {
                    if (admin.getVariable('isAdminAuth')) {
                        admin.outputChatBox(`!{E32636}[A] ${value1} м.`);
                    }
                })
            })
            return
        } else if (command === 'unJailPlayer') { //-------------------------------------------- UnJail Offline
            if (player.adminlvl < 1) return target.call('playerNotify',([`Недостаточно прав`, 'no']));
            db.Handle.query('SELECT * FROM characters WHERE id=?', [pid], function(e, r) {
                if (r[0]['demorgan'] <= 0) return player.call('playerNotify',([`Игрок не в деморгане`, 'info']));
                db.Handle.query('UPDATE characters SET demorgan=?, demorganReason=? WHERE id=?', [0, null, pid]);
                
                mp.players.forEach(admin => {
                    if (admin.getVariable('isAdminAuth')) {
                        admin.outputChatBox(`!{E32636}[A](Offline) ${player.name.replace('_', ' ')} выпустил из деморгана ${r[0]['nickname'].replace('_', ' ')} #${pid}. Причина: ${value1}`);
                    }
                })
            })
            return
        }
        player.call('playerNotify',(['Игрок не в сети', 'no']));
    }
})











//----------------------- Команды
mp.events.addCommand('sethp', (player, _, id, hp) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined || hp == undefined) return player.call('playerNotify',([`/sethp [id] [hp]`, 'info']));
            var target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.health = parseInt(hp);
        }
    }
})

mp.events.addCommand('setarm', (player, _, id, arm) =>{
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined || arm == undefined) return player.call('playerNotify',([`/setarm [id] [arm]`, 'info']));
            var target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.armour = parseInt(arm);
        }
    }
})


mp.events.addCommand('repair', (player, _, id) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined) {
            if (!player.vehicle) return player.call('playerNotify',([`Вы не в транспорте`, 'info']));
            player.vehicle.repair();
            } else {
            let target = mp.player.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.vehicle.repair();
            }
        }
    }
})

mp.events.addCommand('pos', (player) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            let pos;
            pos = player.position;
            rot = player.heading;
            if (player.vehicle) rot = player.vehicle.heading
            console.log(`${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}  Поворот: ${rot.toFixed(2)}`)
            player.outputChatBox(`X: !{9EDFFF}${pos.x.toFixed(2)}!{FFFFFF} Y: !{9EDFFF}${pos.y.toFixed(2)}!{FFFFFF} Z: !{9EDFFF}${pos.z.toFixed(2)}!{FFFFFF} Angle: !{9EDFFF}${rot.toFixed(2)}!{FFFFFF}`);
        }
    }
})

mp.events.addCommand('tppos', (player, _, x, y, z) =>{
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (x == undefined || y == undefined || z == undefined) return player.call('playerNotify',([`/tppos [x] [y] [z]`, 'info']));
            player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
        }
    }
})

mp.events.addCommand('setweather', (player, _, weather) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (weather == undefined) return player.call('playerNotify',([`/setweather [weather]`, 'info']));
            mp.world.weather = weather;
        }
    }
})

mp.events.addCommand('settime', (player, _, hour, minute, second) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (hour == undefined) return player.call('playerNotify',([`/settime [hour] [minute] [second]`, 'info']));
            mp.world.time.set(hour, minute, second);
        }
    }
})

mp.events.addCommand('setskin', (player, _, id, skin) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined || skin == undefined) return player.call('playerNotify',([`/setskin [id] [model]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.model = mp.joaat(skin);
        }
    }
})

mp.events.addCommand('gethere', (player, _, id) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined) return player.call('playerNotify',([`/gethere [id]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.dimension = player.dimension;
            target.position = player.position;
            player.call('playerNotify',([`Вы телепортировали игрока ${target.name}[${target.id}]`, 'yes']));
        }
    }
})

mp.events.addCommand('goto', (player, _,id) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined) return player.call('playerNotify',([`/goto [id]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            player.dimension = target.dimension;
            player.position = target.position;
            player.call('playerNotify',([`Вы телепортировались к игроку ${target.name}[${target.id}]`, 'yes']));
        }
    }
})

mp.events.addCommand('setdim', (player, _, id, dim) =>{
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined || dim == undefined) return player.call('playerNotify',([`/setdim [id] [dim]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.dimension = parseInt(dim);
            player.call('playerNotify',([`Вы переместили игрока ${target.name}[${target.id}] в ${parseInt(dim)} дименшин`, 'yes']));
        }
    }
})

mp.events.addCommand('dim', (player) =>{
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            player.call('playerNotify',([`Вы в ${player.dimension} дименшине`, 'info']));
        }
    }
})


mp.events.addCommand('inv', (player) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (player.alpha == 255) {
                player.alpha = 0;
            } else {
                player.alpha = 255;
            }
        }
    }
})

mp.events.addCommand('givegun', (player, _, id, weapon, ammo) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined ||  weapon == undefined  || ammo == undefined) return player.call('playerNotify',(['/givegun [id] [weapon] [ammo]', 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.giveWeapon(mp.joaat(`weapon_${weapon}`), parseInt(ammo));
        }
    }
})

mp.events.addCommand('gm', (player) =>{
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            player.call('playerNotify',(['Режим бога включен', 'yes']));
            player.call('gmON');
        }
    }
})

mp.events.addCommand('gmoff', (player) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            player.call('playerNotify', ['Режим бога выключен', 'yes']);
            player.call('gmOFF');
        }
    }
})

mp.events.addCommand('freeze', (player, _, id, ) =>{
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined) return player.call('playerNotify',(['/freeze [id]', 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.call('freezeON');
            player.call('playerNotify',([`Вы заморозили игрока ${target.name}[${target.id}]`, 'yes']));
            console.log(`Администратор ${player.name} заморозил игрока ${target.name}`);
        }
    }
})

mp.events.addCommand('unfreeze', (player, _, id, ) =>{
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined) return player.call('playerNotify',(['/unfreeze [id]', 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.call('freezeOFF');
            player.call('playerNotify',([`Вы разморозили игрока ${target.name}[${target.id}]`, 'yes']));
            console.log(`Администратор ${player.name} разморозил игрока ${target.name}`);
        }
    }
})

mp.events.addCommand('re', (player, _, id) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id != undefined) {
                let pos;
                pos = player.position;
                if (!player.lastps) player.lastps = {
                x: pos.x,
                y: pos.y,
                z: pos.z
                };
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            if (player == target) return player.notify('~r~Вы не можете следить за собой!');
            player.notify(`Вы начали слежку за игроком ~r~${target.name}~y~[~g~${target.id}~y~]`);
            console.log(`Администратор ${player.name} заморозил игрока ${target.name}`);
            
            player.alpha = 0;
            player.position = target.position;
            player.dimension = target.dimension;
            player.call('reON', [target]);
            }   else {
                player.call('reOFF');
                player.position = player.lastps;
                player.alpha = 255;
                player.lastps = false;
            player
            }
        }
    }
})


/*
mp.events.addCommand('uveh', (player, _, id, veh, color1, color2) => { // Unlimit Vehicles -- Безлимитный спавн т/с.
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined || veh == undefined) return player.call('playerNotify',([`/uveh [id] [veh] [color1] [color2]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            let pos;
            pos = target.position;
            var adminVeh = mp.vehicles.new(mp.joaat(veh), pos);
            adminVeh.setColor(parseInt(color1), parseInt(color2));
            adminVeh.numberPlate = 'Admin';
            console.log(`${player.name} заспавнил автомобиль с id: [${adminVeh.id}]`);
            adminVeh.setVariable('uaVeh', true);
            adminVeh.setVariable('type', 'admin');
            target.setVariable('uadminVeh' + target.id, adminVeh);
            setTimeout(() => {
                target.putIntoVehicle(adminVeh, 0);
            }, 300)   
        }
    }
})



mp.events.addCommand('veh', (player, _, id, veh, color1, color2) => { // Vehicle -- 1 машина на 1 игрока, при спавне второй машины через команду, вторая пропадает.
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined || veh == undefined) return player.call('playerNotify',([`/veh [id] [veh] [color1] [color2]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            var cVeh = target.getVariable('adminVeh'+ target.id);
            if (cVeh != null) {
                cVeh.destroy();
            }
            let pos;
            pos = target.position;
            var adminVeh = mp.vehicles.new(mp.joaat(veh), new mp.Vector3(pos.x, pos.y, pos.z));
            adminVeh.setColor(parseInt(color1), parseInt(color2));
            adminVeh.numberPlate = 'Admin';
            console.log(`${player.name} заспавнил автомобиль с id: [${adminVeh.id}]`);
            target.setVariable('adminVeh' + target.id, adminVeh);
            adminVeh.setVariable('type', 'admin');
            setTimeout(() => {
            target.putIntoVehicle(adminVeh, 0);
            }, 300)
        }
    }  
})

mp.events.addCommand('rveh', (player, _, veh, color1, color2, color3) => { // Vehicle -- 1 машина на 1 игрока, при спавне второй машины через команду, вторая пропадает.
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (veh == undefined) return player.call('playerNotify',([`/rveh [veh] [r] [g] [b]`, 'info']));
            if (!player.authReady) return player.call('playerNotify',([`Игрок id:${player.id} не авторизовался`, 'info']));
            var cVeh = player.getVariable('adminVeh'+ player.id);
            if (cVeh != null) {
                cVeh.destroy();
            }
            let pos;
            pos = player.position;
            var adminVeh = mp.vehicles.new(mp.joaat(veh), new mp.Vector3(pos.x, pos.y, pos.z),
            {
                numberPlate: "ADMIN",
            });
            adminVeh.setColorRGB(parseInt(color1), parseInt(color2), parseInt(color3), parseInt(color1), parseInt(color2), parseInt(color3));
            console.log(`${player.name} заспавнил автомобиль с id: [${adminVeh.id}]`);
            player.setVariable('adminVeh' + player.id, adminVeh);
            adminVeh.setVariable('type', 'admin');
            setTimeout(() => {
                player.putIntoVehicle(adminVeh, 0);
            }, 300)
        }
    }  
})
 



mp.events.addCommand('cveh', (player, _, veh, color1, color2) => { // СVehicle -- 1 машина на 1 игрока, при выходе с машины она пропадает.
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (veh == undefined) return player.call('playerNotify',([`/cveh [veh] [color1] [color2]`, 'info']));
            var cVeh = player.getVariable('сadminVeh'+ player.id);
            if (cVeh != null) {
                cVeh.destroy();
            }
            let pos;
            pos = player.position;
            var adminVeh = mp.vehicles.new(mp.joaat(veh), new mp.Vector3(pos.x, pos.y, pos.z));
            adminVeh.setColor(parseInt(color1), parseInt(color2));
            adminVeh.numberPlate = 'Admin';
            console.log(`${player.name} заспавнил автомобиль с id: [${adminVeh.id}]`);
            adminVeh.setVariable('сaVeh', true);
            adminVeh.setVariable('type', 'admin');
            player.setVariable('сVeh' + player.id, adminVeh);
            setTimeout(() => {
                player.putIntoVehicle(adminVeh, 0);
            }, 300) 
        }
    }    
})*/

mp.events.addCommand('delveh', (player, _, target) => { // СVehicle -- 1 машина на 1 игрока, при выходе с машины она пропадает.
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (target == undefined) return player.call('playerNotify',([`/delveh [vehicleID]`, 'info']));
            if (!mp.vehicles.at(target)) return player.call('playerNotify',([`Автомобиль не найден`, 'info']));
            mp.vehicles.at(target).destroy();
        }
    }    
})

mp.events.add("playerStartExitVehicle", (player) => { // НУЖНО ДЛЯ РАБОТЫ /CVEH!!!
let veh = player.vehicle;

    if (player.vehicle.getVariable('сaVeh') == true) {
      //  veh.setVariable('aVeh', false);
        player.vehicle.destroy();
        player.setVariable('сadminVeh' + player.id, null);
        
    }

})

mp.events.addCommand('clothes', (player, _, component, drawable, texture) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (component == undefined  || drawable == undefined || texture == undefined) return player.call('playerNotify',([`/clothes [ComponentId] [DrawableID] [TextureID]`, 'info']));
            player.setClothes(parseInt(component), parseInt(drawable), parseInt(texture), 0);
        }
    }  
})

mp.events.addCommand('checkgm', (player, _, id) =>{
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined) return player.call('playerNotify',([`/checkgm [id]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            var hls = target.health;
            let pos;
            pos = target.position;
            target.position = new mp.Vector3(pos.x, pos.y, pos.z + 10);
            setTimeout(() =>{
                player.outputChatBox(`!{FF0000}[GM-INFO] ${target.name}(${target.id}) - Было: ${hls}HP | Стало: ${target.health}`);
                if (hls == target.health) return player.outputChatBox(`!{FF0000}[GM-INFO] ${target.name}(${target.id}) ИСПОЛЬЗУЕТ GODMODE `);
                target.health = parseInt(hls);
            }, 3000)
        }
    } 
})

mp.events.addCommand('kick', (player, _, id, reason) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined || reason == undefined) return player.call('playerNotify',([`/kick [id] [reason]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            if (player == target) return player.call('playerNotify',([`Вы не можете кикнуть себя`, 'info']));
            var message= _.replace(id,'');
            mp.players.broadcast(`!{E32636}Администратор ${player.name} кикнул игрока ${target.name}. Причина: ${message}`);
            target.kick();
        }
    } 
})

mp.events.addCommand('banip', (player, _, id, reason) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined || reason == undefined) return player.call('playerNotify',([`/banip [id] [reason]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            //if (player == target) return player.outputChatBox('Вы не можете забанить себя!');
            var message = _.replace(id, '');
            if (player.adminlvl < target.adminlvl) return player.call('playerNotify',([`Нельзя забанить старшего админа`, 'no']));
            mp.players.broadcast(`!{E32636}Администратор ${player.name} забанил навсегда игрока  ${target.name}. Причина: ${message}`);
            DB.Handle.query('INSERT INTO banip (admin,player,playerIP,reason) VALUE (?,?,?,?)', [player.name, target.name, target.ip, message]);
            target.kick()
        }
    } 
})


mp.events.addCommand('mute', (player, _, id, time, reason) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined || time == undefined || reason == undefined) return player.call('playerNotify',([`/mute [id] [time] [reason]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            if (player.id == id) return player.call('playerNotify',([`Вы не можете замутить себя`, 'info']));
            var message = _.replace(id, '').replace(time, '');
            mp.players.broadcast(`!{E32636}Администратор ${player.name} выдал мут игроку ${target.name} на ${time} мин. По причине: ${message}`);
            target.muted = true
            setTimeout(() => {
              target.muted = false
            }, time * 60 * 1000);
        }
    } 
})


mp.events.addCommand('jail', (player, _, id, time, reason) => {
    if (player.adminlvl > 0) {
        if (player.admin >= 1) {
            if (id == undefined || time == undefined || reason == undefined) return player.call('playerNotify',([`/jail [id] [time] [reason]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            if (player.id == id) return player.call('playerNotify',([`Вы не можете посадить себя`, 'info']));
            if (player.adminlvl <= target.adminlvl) return player.call('playerNotify',([`Вы не можете посадить старшего администратора`, 'no']));
            var message = _.replace(id, '').replace(time, '');
            mp.players.broadcast(`!{E32636}Администратор ${player.name} посадил игрока ${target.name}. По причине: ${message}`);
            target.demorgan = true
            setTimeout(() => {
                target.demorgan = false
            }, time * 60 * 1000);
        }
    }
})



mp.events.addCommand('unmute', (player, _, id) => {
    if (player.adminlvl != 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined) return player.call('playerNotify',([`/unmute [id]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            mp.players.broadcast(`!{228B22}Администратор ${player.name} снял мут игроку ${target.name}`);
            target.muted = false
        }
    } 
})

mp.events.addCommand('ban', (player, _, id, time, reason) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined || time == undefined || reason == undefined) return player.call('playerNotify',([`/ban [id] [time] [reason]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            //if (player == target) return player.outputChatBox('Вы не можете забанить себя!');
            var message = _.replace(id, '').replace(time, '');
            if (player.adminlvl <= target.adminlvl) return player.call('playerNotify',([`Нельзя забанить старшего админа`, 'no']));
            var ts = (Math.round((new Date()).getTime() / 1000)) - (3600 * 2);
            tsn = ts + (time * 86400);
            DB.Handle.query("INSERT INTO ban (admin,player,time1,time2,reason) VALUES (?,?,?,?,?)", [player.name, target.name, ts, tsn, message], (e) => {
                if (e) {
                    player.notify("~r~Произошла ошибка!");
                    console.log(e);
                    return;
                }
                mp.players.broadcast(`!{E32636}Администратор ${player.name} забанил игрока ${target.name} на ${time} дн. По причине: ${message}`);
                target.kick();
            });
        }
    }
})

mp.events.addCommand('id', (player, _, id) => {
    if (player.adminlvl > 0) {
        if (player.adminlvl >= 1) {
            if (id == undefined) return player.call('playerNotify',([`/id [id]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id(${id}): ${target.name} - не авторизован`, 'info']));
            player.call('playerNotify',([`Игрок ${target.name}[${target.id}]`, 'info']));
        }
    }
})

mp.events.addCommand('unixt', (player) => {
    var ts = (Math.round((new Date()).getTime() / 1000)) - (3600 * 2);
    let date = new Date(ts * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let time = hours + ':' + minutes.substr(-2) + " " + day + "-" + month + "-" + year;
    player.outputChatBox(`${time}`);
    player.outputChatBox(`${ts}`);
})

mp.events.addCommand('msg', (player, message) => {
    if (player.adminlvl != 0) {
        if (player.adminlvl >= 1) {
            if (message == undefined) return player.call('playerNotify',([`/msg [text]`, 'info']));
            mp.players.broadcast(`!{FFA500}Администратор ${player.name}: ${message}`);
        }
    } 
})

mp.events.addCommand('a', (player, message) => {
        if (player.adminlvl != 0) {
            if (player.adminlvl >= 1) {
                if (message == undefined) return player.call('playerNotify',([`/a [text]`, 'info']));
                let target = mp.players.at(player.id);
                mp.players.forEach(player => {
                    if (player.adminlvl > 0) player.outputChatBox(`!{9ACD32}[A] ${target.name}[${target.id}]: ${message}`);
                })

            }
        } 
})

mp.events.addCommand('pm', (player, _, id, message) => {    
    if (player.adminlvl != 0) {
        if (player.adminlvl >= 1) {
            if (message ==undefined) return player.call('playerNotify',([`/pm [id] [message]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.outputChatBox(`!{F08080} ${player.name}: ${message}`);
            player.outputChatBox(`!{F08080} ${player.name}: ${message}`);
        }   else {
            return player.notify('~r~У вас недостаточно прав!')
        }
    }
})



mp.events.addCommand('makeadmin', (player, _, id, rank) => {
    if (player.adminlvl != 0) {
        if (player.adminlvl >= 9) {
            if (id == undefined || rank == undefined) return player.call('playerNotify',([`/makeadmin [id] [rank]`, 'info']));
            if (rank == 0) return player.call('playerNotify',([`Используйте команду /removeadmin для снятия админа`, 'info']));
            if (!isNumeric(rank)) return player.call('playerNotify',([`Некорректный уровень админки`, 'no']));
            if (rank > 12) return player.call('playerNotify',([`Некорректный уровень админки`, 'no']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            if (player == target) return player.call('playerNotify',([`Вы не можете изменить ранг себе!`, 'no']));
            target.oldrank = target.adminlvl
            if (player.adminlvl < 10 && rank >= player.adminlvl) return player.call('playerNotify',([`Вы не можете поставить игрока на администратора выше или равного вашему рангу`, 'no']));
            db.Handle.query('UPDATE characters SET adminlvl=? WHERE id=?', [rank, target.characterSel]);
            target.adminlvl = rank

            if (target.oldrank == 0) {
                player.call('playerNotify',([`Вы поставили игрока ${target.name}[${target.id}] на должность ${adminrank[rank]}`, 'yes']));
                target.call('playerNotify',([`Получены права ${adminrank[rank]}`, 'info']));
                console.log(`Администратор ${player.name}[${player.id}] поставил игрока ${target.name}[${target.id}] на должность ${adminrank[rank]}`);
            } else if (target.oldrank > rank) {
                player.call('playerNotify',([`Вы понизили ${adminrank[target.oldrank]} ${target.name}[${target.id}] до ${adminrank[rank]}`, 'yes']));
                target.call('playerNotify',([`Права понижены с ${adminrank[target.oldrank]} до ${adminrank[rank]}`, 'info']));
                console.log(`Администратор ${player.name}[${player.id}] понизил ${adminrank[target.oldrank]} ${target.name}[${target.id}] на должность ${adminrank[rank]}`);
            } else if (target.oldrank < rank) {
                player.call('playerNotify',([`Вы повысили ${adminrank[target.oldrank]} ${target.name}[${target.id}] до ${adminrank[rank]}`, 'yes']));
                target.call('playerNotify',([`Права повышены с ${adminrank[target.oldrank]} до ${adminrank[rank]}`, 'info']));
                console.log(`Администратор ${player.name}[${player.id}] повысил ${adminrank[target.oldrank]} ${target.name}[${target.id}] на должность ${adminrank[rank]}`);
            } else if (target.oldrank == rank) return player.call('playerNotify',([`Игрок уже имеет этот ранг`, 'info']));
        }
    } 
})

mp.events.addCommand('removeadmin', (player, _, id) => {
    
    if (player.adminlvl != 0) {
        if (player.adminlvl >= 9) {
            if (id == undefined) return player.call('playerNotify',([`/removeadmin [id]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.oldrank = target.adminlvl
            if (player.adminlvl < 12 && target.oldrank >= player.adminlvl) return player.call('playerNotify',([`Вы не можете поставить игрока на администратора выше или равного вашему рангу`, 'no']));
            db.Handle.query('UPDATE characters SET adminlvl=? WHERE id=?', [0, target.characterSel]);
            target.adminlvl = 0;
            player.call('playerNotify',([`Вы сняли ${adminrank[target.oldrank]} ${target.name}[${target.id}]`, 'yes']));
            target.call('playerNotify',([`Права ${adminrank[target.oldrank]} сняты`, 'info']));
            console.log(`${adminrank[player.adminlvl]} ${player.name} снял с поста ${adminrank[target.oldrank]} ${target.name}`);
        }
    }
})

mp.events.addCommand('setfraction', (player, _, id, fraction) =>{
    if (player.adminlvl != 0) {
        if (player.adminlvl >= 5) {
            if (id == undefined || fraction >6) return player.call('playerNotify',([`/setfraction [id] [fraction]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            target.oldfraction= target.fraction
            db.Handle.query('UPDATE characters SET fraction=? WHERE id=?', [fraction, target.characterSel]);
            target.fraction = fraction;
                if (target.oldfraction == 1) {
                    player.call('playerNotify',([`Вы устроили игрока ${target.name}[${target.id}] во фракцию LSPD`, 'yes']));
                    target.call('playerNotify',([`Вы устроилсь в LSPD`, 'yes']));
                    console.log(`Администратор ${player.name}[${player.id}] устроил вас ${target.name}[${target.id}] во фракцию LSPD`);
                }else if (target.oldfraction == 2) {
                    player.call('playerNotify',([`Вы устроили игрока ${target.name}[${target.id}] во фракцию EMS`, 'yes']));
                    target.call('playerNotify',([`Вы устроилсь в EMS`, 'yes']));
                }else if (target.oldfraction == 3) {
                    player.call('playerNotify',([`Вы устроили игрока ${target.name}[${target.id}] во фракцию FIB`, 'yes']));
                    target.call('playerNotify',([`Вы устроилсь в FIB`, 'yes']));
                }else if (target.oldfraction == 4) {
                    player.call('playerNotify',([`Вы устроили игрока ${target.name}[${target.id}] во фракцию LSSD`, 'yes']));
                    target.call('playerNotify',([`Вы устроилсь в LSSD`, 'yes']));
                }else if (target.oldfraction == 5) {
                    player.call('playerNotify',([`Вы устроили игрока ${target.name}[${target.id}] во фракцию ARMY`, 'yes']));
                    target.call('playerNotify',([`Вы устроилсь в ARMY`, 'yes']));
                }else if (target.oldfraction == 6) {
                    player.call('playerNotify',([`Вы устроили игрока ${target.name}[${target.id}] во фракцию GOV`, 'yes']));
                    target.call('playerNotify',([`Вы устроилсь в GOV`, 'yes']));
                }
                else if (target.oldfraction == 0) {
                    player.call('playerNotify',([`Вы уволили ${target.name}[${target.id}] из фракции`, 'yes']));
                    target.call('playerNotify',([`Вас уволили из фракции`, 'no']));
                } else if (target.oldfraction == fraction) return player.call('playerNotify',([`Игрок уже состоит в этой фракции`, 'info']));
        }
    }
})

mp.events.addCommand('makelead', (player, _, id, rank) =>{
    if(player.adminlvl !=0) {
        if(player.adminplvl >= 5) {
            if (id == undefined) return player.call('playerNotify',([`/makelead [id]  [rank]`, 'info']));
            let target = mp.players.at(id);
            if (target == null) return player.call('playerNotify',(['Игрок с таким id не найден', 'no']));
            if (!target.authReady) return player.call('playerNotify',([`Игрок id:${target.id} не авторизовался`, 'info']));
            
        }
    }
})
