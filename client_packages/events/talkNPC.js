mp.events.add('conversationFarmStart', () => {
    mp.gui.cursor.visible = true;
    hudBrows.execute(`talkNPC('farm','Фермер Бен','Привет, ты уверен что хочешь здесь работать?','Да','Нет')`);
})

mp.events.add('converstationFarm', () => {
    mp.gui.cursor.visible = true;
    hudBrows.execute(`talkNPC('farmpause','Фермер Бен','Привет, смотрю ты уже вернулся. Ты пришел за товарами или хочешь уволиться?','Магазин','Уволится!')`)
})


mp.events.add('talkNPCCEFdata', (value, id) => {
    if (value == 'farm') {
        if (id == 1) {
            hudBrows.execute(`talkNPC('farmRent','Фермер Бен','Ну тогда ноги в руки, и беги в раздевалку, переодевайся и вперед за работу!','Хорошо, спасибо! ')`);
        } else if (id == 2) {
            hudBrows.execute(`talkNPC('end','Фермер Бен','Ну и проваливай, найдутся работники получше тебя!','Хорошо, еще увидимся!')`);
        }
    }
    if (value == 'end') {
        mp.gui.cursor.visible = false;
        mp.events.call('cameraStop');
    }
    if (value == 'farmRent') {
        mp.gui.cursor.visible = false;
        mp.events.call('rentFarm1Field');
        mp.events.call('cameraStop')
    }
    if (value == 'farmpause') {
        if (id == 1){
            hudBrows.execute(`talkNPC('farmpause1','Фермер Бен','У меня продаются семена/удобрения (400$)/обрабатавающее средство (350$)','Семена', 'удобрение','обрабатывающее средство')`);
        }
        if (id == 2) {
            hudBrows.execute(`talkNPC('end','Фермер Бен','Спасибо за работу, удачи!','Пока')`);
        }
    }
    if (value == 'farmpause1') {
        if (id == 1)
        {
            hudBrows.execute(`talkNPC('farmbuy','Фермер Бен','У меня есть разные виды семян. Одного пакета семян хватит на 5 лунок.','Хлопок 100$', 'Картошка 100$', 'Пршеница 100$', 'Мак 100$', 'Конопля 100$')`);
        }
        if (id == 2){
            // Должно вылезти окно сколько штук
        }
        if (id == 3) {
            // Должно вылезти окно сколько штук
        }
    }
    if (value == 'farmbuy') {
        if (id == 1){
            // Должно вылезти окно сколько штук
            mp.events.callRemote('buySeeds');
            mp.events.call('playerNotify', `Вы купили хлопок`, 'yes');
        }
        if (id == 2){
            // Должно вылезти окно сколько штук
            mp.events.callRemote('buySeeds');
            mp.events.call('playerNotify', `Вы купили хлопок`, 'yes');
        }
        if (id == 3){
            // Должно вылезти окно сколько штук
            mp.events.callRemote('buySeeds');
            mp.events.call('playerNotify', `Вы купили хлопок`, 'yes');
        }
        if (id == 4){
            // Должно вылезти окно сколько штук
            mp.events.callRemote('buySeeds');
            mp.events.call('playerNotify', `Вы купили хлопок`, 'yes');
        }
        if (id == 5){
            // Должно вылезти окно сколько штук
            mp.events.callRemote('buySeeds');
            mp.events.call('playerNotify', `Вы купили хлопок`, 'yes');
        }
    }
})

