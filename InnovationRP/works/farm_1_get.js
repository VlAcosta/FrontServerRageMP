farm1Shape = mp.colshapes.newSphere(2833.16, 4570.82, 45.55, 2, 0);

function playerEnterColshapeHandler(player, shape) {
    if (shape == farm1Shape) player.call('Farm_cloak');
};

function playerExitColshapeHandler(player, shape) {
    if (shape == farm1Shape) player.call('Farm_cloak_end');
};



mp.events.add('playerEnterColshape', playerEnterColshapeHandler);
mp.events.add("playerExitColshape", playerExitColshapeHandler);

mp.events.add('farmStart', (player) => {
    if (player.work == 0) {
        player.call('conversationFarmStart');
    } else if (player.work == 1) {
        player.call('converstationFarm');
    }
})

mp.events.add('startFarm', (player) => {
    if (player.work == 0) {
        player.work = 1;
        player.call('playerNotify', ([`Вы устроились на работу фермера `, 'info']));
        player.call('farmWorkStart')
    } 
})

mp.events.add('buySeeds', (player) => {
    player.seeds += 5;
    db.Handle.query('UPDATE characters SET seeds=? WHERE id=?', [player.seeds, player.pid]);
    player.call('+seeds');
})

mp.events.add('plantSeeds', (player) =>{
    player.seeds -= 1;
    db.Handle.query('UPDATE characters SET seeds=? WHERE id=?', [player.seeds, player.pid]);
    player.call('-seeds');
})

mp.events.add('endPirs', (player) => {
    if (player.work == 1) { //---------------------------------- Конец работы
        player.call('playerNotify', ([`Работа завершена`, 'yes']));
        player.work = 0;
        if (player.workmoney != 0) {
            player.call('playerNotify', ([`После PayDay вы получите ${player.workmoney}$`, 'yes']));
        }
    }
})
