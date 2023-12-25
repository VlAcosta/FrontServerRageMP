
let zones_list = [
    {name:'green_port', height: 24, dimension: 0, vectors: [new mp.Vector3(-264.91, -2387.46, -5), new mp.Vector3(-355.78, -2449.73, -5), new mp.Vector3(-69.80, -2605.73, -5), new mp.Vector3(67.60, -2409.62, -5)]},
    {name:'green_forest', height: 80, dimension: 0, vectors: [new mp.Vector3(-887.57, 5413.66, 30), new mp.Vector3(-792.29, 5341.13, 30), new mp.Vector3(-476.62, 5477.74, 30), new mp.Vector3(-453.53, 5692.49, 30), new mp.Vector3(-526.94, 5731.69, 30), new mp.Vector3(-622.49, 5571.23, 30)]},
    {name:'green_incos', height: 22, dimension: 0, vectors: [new mp.Vector3(92.12, -1088.06, 28), new mp.Vector3(121.01, -1096.28, 28), new mp.Vector3(173.19, -1091.89, 28), new mp.Vector3(181.45, -1059.80, 28), new mp.Vector3(136.70, -1046.91, 28), new mp.Vector3(112.40, -1041.08, 28)]}
]

let playerInGZ = false;
let showZones = false;

for (var i = 0; i < zones_list.length; i++) {
    if (zones_list[i].vectors.length == 2) {
        mp.zones.registerZone([zones_list[i].vectors[0], zones_list[i].vectors[1]], zones_list[i].height, zones_list[i].name, 1, zones_list[i].dimension);
    } else if (zones_list[i].vectors.length == 4) {
        mp.zones.registerZone([zones_list[i].vectors[0], zones_list[i].vectors[1], zones_list[i].vectors[2], zones_list[i].vectors[3]], zones_list[i].height, zones_list[i].name, 2, zones_list[i].dimension);
    } else if (zones_list[i].vectors.length == 6) {
        mp.zones.registerZone([zones_list[i].vectors[0], zones_list[i].vectors[1], zones_list[i].vectors[2], zones_list[i].vectors[3], zones_list[i].vectors[4], zones_list[i].vectors[5]], zones_list[i].height, zones_list[i].name, 3, zones_list[i].dimension);
    }
    
    if (showZones) {
        if (zones_list[i].vectors.length == 2) {
            mp.zones.drawZoneBy2(zones_list[i].vectors[0], zones_list[i].vectors[1])
        } else if (zones_list[i].vectors.length == 4) {
            mp.zones.drawZoneBy4([zones_list[i].vectors[0], zones_list[i].vectors[1], zones_list[i].vectors[2], zones_list[i].vectors[3]], zones_list[i].height)
        } else if (zones_list[i].vectors.length == 6) {
            mp.zones.drawZoneBy6([zones_list[i].vectors[0], zones_list[i].vectors[1], zones_list[i].vectors[2], zones_list[i].vectors[3], zones_list[i].vectors[4], zones_list[i].vectors[5]], zones_list[i].height)
        }
    }
}




//mp.zones.drawZoneBy4([new mp.Vector3(0, 0, 0), new mp.Vector3(0, 10, 0), new mp.Vector3(20, 10, 0), new mp.Vector3(10, 0, 0)], 100)


mp.events.add('ZoneManager_PlayerEnterZone', (zoneName) => {
    if(zoneName.split('_')[0] == 'green') {
        hudBrows.execute(`showGreenZone(true)`);
        playerInGZ = true;
    } else {
        // - Code
    }


})
mp.events.add('ZoneManager_PlayerExitZone', (zoneName) => {
    if(zoneName.split('_')[0] == 'green') {
        hudBrows.execute(`showGreenZone(false)`);
        playerInGZ = false;
    } else {
        // - Code
    }
})

mp.events.add('render', () => {
    if (playerInGZ) {
        mp.game.controls.disableControlAction(32, 140, true);
        mp.game.controls.disableControlAction(32, 142, true);
        mp.game.controls.disableControlAction(32, 25, true);
        mp.game.controls.disableControlAction(32, 257, true);
    }
});

mp.events.add('incomingDamage', (sourceEntity, sourcePlayer, targetEntity, weapon, boneIndex, damage) => {
    if (playerInGZ) {
        return true
    }
});