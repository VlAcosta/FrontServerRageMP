const maxDistance = 25*25;
const width = 0.03;
const height = 0.0065;
const border = 0.001; 
const color = [255,255,255,255];

let iter = 0;

if (player.remoteAdminlvl >= 1) {
    const maxDistance = 100*100;
}

let localPlayer = mp.players.local;
let readyVehESP = false;
let readyPlayerESP = false;


mp.events.add('render', (nametags) => {
    if (!localPlayer.getVariable('isAdminAuth')) return;
    if(readyVehESP) {
        mp.vehicles.forEachInStreamRange(vehicle => {
            if (vehicle.handle !== 0 && vehicle !== mp.players.local) {
                position = vehicle.position;
                if (vehicle.getVariable('type')) {
                    if (vehicle.getVariable('type') == 'admin') {
                        mp.game.graphics.drawText(`ADMIN Car`, [position.x, position.y, position.z+0.8], {
                            scale: [0.3, 0.3],
                            outline: true,
                            color: [209, 33, 33, 255],
                            font: 4
                        });
                    } else if (vehicle.getVariable('type') == 'port') {
                        mp.game.graphics.drawText(`Port Car`, [position.x, position.y, position.z+0.8], {
                            scale: [0.3, 0.3],
                            outline: true,
                            color: [136, 134, 138, 255], //Цвет для всех рабочих машин
                            font: 4
                        });
                    } else if (vehicle.getVariable('type') == 'rubbish') {
                        mp.game.graphics.drawText(`Rubbish Car`, [position.x, position.y, position.z+0.8], {
                            scale: [0.3, 0.3],
                            outline: true,
                            color: [136, 134, 138, 255], //Цвет для всех рабочих машин
                            font: 4
                        });
                    } else if (vehicle.getVariable('fraction')) {
                        mp.game.graphics.drawText(`${vehicle.getVariable('type')} Car`, [position.x, position.y, position.z+0.8], {
                            scale: [0.3, 0.3],
                            outline: true,
                            color: [0, 206, 209, 255], //Цвет для тегов всех фракционных машин
                            font: 4
                        });
                    }
                }
                mp.game.graphics.drawText(mp.game.vehicle.getDisplayNameFromVehicleModel(vehicle.model)+ ` (${vehicle.getNumberPlateText()}| ID ${vehicle.remoteId} )`, [position.x, position.y, position.z], {
                    scale: [0.3, 0.3],
                    outline: true,
                    color: [255, 255, 255, 255],
                    font: 4
                });
            }
        });
    }
    if (readyPlayerESP) {
        mp.players.forEachInStreamRange(player => {
            //if (localPlayer.remoteId = player.remoteId) return
            if (player.getVariable('isAdminAuth')){
                mp.game.graphics.drawLine(localPlayer.position.x, localPlayer.position.y, localPlayer.position.z, player.position.x, player.position.y, player.position.z, 255, 50, 0, 255);
                mp.game.graphics.drawText(`${player.name.replace('_', ' ')} (${player.remoteId}) \n HP:${player.getHealth()}   Armour:${player.getArmour()} \n Faction: null   Rank: null \n Speed:${(player.getSpeed()*3.6).toFixed(2)}   ` , [player.position.x, player.position.y, player.position.z], {
                    font: 4,
                    color: [255, 50, 0, 255],
                    scale: [.3, .3]
                });
            } else {
                mp.game.graphics.drawLine(localPlayer.position.x, localPlayer.position.y, localPlayer.position.z, player.position.x, player.position.y, player.position.z, 255, 255, 255, 255);
                mp.game.graphics.drawText(`${player.name.replace('_', ' ')} (${player.remoteId}) \n HP:${player.getHealth()}   Armour:${player.getArmour()} \n Faction: null   Rank: null \n Speed:${(player.getSpeed()*3.6).toFixed(2)}   ` , [player.position.x, player.position.y, player.position.z], {
                    font: 4,
                    color: [255, 255, 255, 255],
                    scale: [.3, .3]
                });
            }
            
        });
    }
})

mp.events.add("adminESP", () => {
    if (!localPlayer.getVariable('isAdminAuth')) return iter = 0;
    iter++;
    if (iter == 0) {
        showNametags = true;
        readyVehESP = false;
        readyPlayerESP = false;
        mp.events.call('playerNotify',`Отображение ESP выключено`, 'ok');
    } else if (iter == 1) {
        showNametags = false;
        readyVehESP = false;
        readyPlayerESP = true;
        mp.events.call('playerNotify',`Отображение ESP игроков включено`, 'ok');
    } else if (iter == 2) {
        showNametags = true;
        readyVehESP = true;
        readyPlayerESP = false;
        mp.events.call('playerNotify',`Отображение ESP машин включено`, 'ok');
    } else if (iter == 3) {
        showNametags = false;
        readyVehESP = true;
        readyPlayerESP = true;
        mp.events.call('playerNotify',`Отображение ESP машин и игроков включено`, 'ok');
    }  else if (iter == 4) {
        iter = 0
        showNametags = true;
        readyVehESP = false;
        readyPlayerESP = false;
        mp.events.call('playerNotify',`Отображение ESP выключено`, 'ok');
    } 
    /*if (!readyVehESP) {
        if (!localPlayer.getVariable('isAdminAuth')) return
        mp.events.call('playerNotify',`Отображение ESP машин включено`, 'green');
        readyVehESP = !readyVehESP;
      } else {
        mp.events.call('playerNotify',`Отображение ESP машин выключено`, 'green');
        readyVehESP = !readyVehESP;
    }*/
});