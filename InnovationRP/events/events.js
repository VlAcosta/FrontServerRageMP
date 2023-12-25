let spawnPoints = require('./spawn_points.json').SpawnPoints;

mp.events.add('playerDeath', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 100;
});

mp.events.add("vehicleDeath", (vehicle) => {
    vehicle.destroy()
});

mp.events.add("playerChat", (player,message) =>{
    //mp.players.broadcastInRange(player.position, 10, `${player.name}[${player.id}]: ${message}`);
    //player.call('Send_ToChat',[players, player, message]);
    if(!player.authReady) return;
    if (player.inmute) return player.call('playerNotify',([`Осталось ${player.mute} м. мута`, 'yellow']));
    mp.players.broadcastInRange(player.position, 10,`${player.name.replace('_', ' ')}[${player.id}]: ${message}`);
});

mp.events.add("fpsync.update", (player, camPitch, camHeading) => {
    mp.players.call(player.streamedPlayers, "fpsync.update", [player.id, camPitch, camHeading]);

});

mp.events.add("pointingStop", (player) => {
    player.stopAnimation();
});

function servDown() {
    console.log('Выключение сервера');
    mp.players.broadcast(`!{F63939}ПЕРЕЗАПУСК СЕРВЕРА! ЗАЙДИТЕ ЧЕРЕЗ МИНУТУ`);
    mp.players.broadcast(`!{F63939}ПЕРЕЗАПУСК СЕРВЕРА! ЗАЙДИТЕ ЧЕРЕЗ МИНУТУ`);
    mp.players.broadcast(`!{F63939}ПЕРЕЗАПУСК СЕРВЕРА! ЗАЙДИТЕ ЧЕРЕЗ МИНУТУ`);
    setTimeout(function(){
        mp.players.forEach(player => {
            if (player.authReady) {
                player.kickSilent();
            }
        })
    }, 2000)
    db.end();
}
 
mp.events.add("serverShutdown", async () => {
    mp.players.broadcast(`!{F63939}ПЕРЕЗАПУСК СЕРВЕРА! ЗАЙДИТЕ ЧЕРЕЗ МИНУТУ`);
    servDown();
});

mp.events.add("invision", (player) => {
    if (player.alpha == 255) {
        player.alpha = 0;
    } else {
        player.alpha = 255;
    }
});

setInterval(() => {
    let date = new Date();
    if((date.getMinutes() == 59) && (date.getSeconds() > 0 && date.getSeconds() <= 10)) {
        mp.players.forEach(p => {
            if (!p.authReady) return
            p.outputChatBox(`!{049c64}---PAYDAY---`);
            if (p.workmoney > 0) {
                p.outputChatBox(`!{049c64} Зарплата: ${p.workmoney}$`);
                p.money += p.workmoney;
                p.workmoney = 0;
                db.Handle.query('UPDATE characters SET money=? WHERE id=?', [p.money, p.pid]);
            }
            if (p.playtimeinh >= 15) {
                
                let oldLevel = p.lvl
                p.exp += 1;
                p.lvl = Math.floor(1.3 * Math.sqrt(p.exp))+1;
                db.Handle.query('UPDATE characters SET exp=? WHERE id=?', [p.exp, p.pid]);
                if (oldLevel != p.lvl) {
                    p.call('playerNotify',([`Получен ${p.lvl} уровень!`, 'green']));
                }
            } else {
                p.outputChatBox(`!{b58a07} Вы не отыграли 15 минут для получения PAYDAY!`);
            }
            p.playtimeinh = 0;
        })
    }
    if((date.getMinutes() == 59) && (date.getSeconds() > 0 && date.getSeconds() <= 10)) {
        mp.players.forEach(p => {
            if (!p.authReady) return
            if (date.getMinutes() == 0) p.playtimeinh = 0;
        })
    }
}, 10000)
