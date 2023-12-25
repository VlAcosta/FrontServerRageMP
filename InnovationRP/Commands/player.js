mp.events.addCommand('me', (player, message) => {
    if (message == undefined) return player.call('playerNotify',([`/me [text]`, 'info']));
    mp.players.broadcastInRange(player.position, 10, `!{ba93d9}${player.name.replace('_', ' ')}[${player.id}] ${message}`);
})

mp.events.addCommand('do', (player, message) => {
    if (message == undefined) return player.call('playerNotify',([`/do [text]`, 'info']));
    mp.players.broadcastInRange(player.position, 10, `!{ba93d9}${message} (${player.name.replace('_', ' ')}[${player.id}])`);
})

mp.events.addCommand('try', (player, message) => {
    if (message == undefined) return player.call('playerNotify',([`/try [text]`, 'info']));
    let rnd = Math.floor(Math.random() * 2);
        if (rnd == 1){
            mp.players.broadcastInRange(player.position, 10, `!{ba93d9}${player.name.replace('_', ' ')}[${player.id}] попытался ${message} | !{2FFA0A}Удачно.`);    
        } else {
            mp.players.broadcastInRange(player.position, 10, `!{ba93d9}${player.name.replace('_', ' ')}[${player.id}] попытался ${message}  | !{FF0000}Не удачно.`);
        }
})



mp.events.addCommand('r', (player, message) => {
    if (player.fraction != 0) {
        if (player.fraction >= 1) {
            let target = mp.players.at(player.id);
            mp.players.forEach(player => {
                if (player.fraction > 0) player.outputChatBox(`!{0000FF}[R]  ${target.name.replace('_', ' ')}: ${message}`);
            })
        } else {
            return player.notify('~r~У вас недостаточно прав!');
        }
    }
})

mp.events.addCommand('d', (player, message) => {
    let fraction = ['', 'ARMY', 'EMS', 'FIB', 'LSPD', 'LSSD', 'SASPA'];
    if (player.fraction != 0) {
        if (player.fraction >= 1) {
            let target = mp.players.at(player.id);
            mp.player.forEach(player => {
                if (player.fraction > 0) players.broadcast(`!{FF4D00}[D] ${fraction}  ${target.name.replace('_', ' ')}: ${message}`);
            })
        } else {
            return player.notify('~r~У вас недостаточно прав!');
        }
    }
})

mp.events.addCommand('b', (player, message) => {
    if (message == undefined) return player.call('playerNotify',([`/b [text]`, 'info']));
    mp.players.broadcastInRange(player.position, 10, ` ((${player.name.replace('_', ' ')}[${player.id}]: ${message}))`);
})