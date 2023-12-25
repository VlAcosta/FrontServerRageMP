const localPlayer = mp.players.local;
var signal1, signal2, signalx;
 
mp.keys.bind(0x64, true, function() {
 
    if (signal1 && localPlayer.vehicle) {
        signal1 = false;
        //mp.game.graphics.notify('Левый поворотник выключен');
        hudBrows.execute(`updateTurns('left', false)`);
        localPlayer.vehicle.setIndicatorLights(1, false);

    } else if (signal2 && localPlayer.vehicle) {
   
        //mp.game.graphics.notify('Левый поворотник включен');
        hudBrows.execute(`updateTurns('left', true)`);
        localPlayer.vehicle.setIndicatorLights(0, false);
        localPlayer.vehicle.setIndicatorLights(1, true);
        signal1 = true;
        signal2 = false;
        signalx = false;
    } else if (signalx && localPlayer.vehicle) {
   
        //mp.game.graphics.notify('Левый поворотник включен');
        hudBrows.execute(`updateTurns('left', true)`);
        localPlayer.vehicle.setIndicatorLights(0, false);
        localPlayer.vehicle.setIndicatorLights(1, true);
        signal1 = true;
        signal2 = false;
        signalx = false;
    } else if (localPlayer.vehicle) {
        //mp.game.graphics.notify('Левый поворотник включен');
        hudBrows.execute(`updateTurns('left', true)`);
        localPlayer.vehicle.setIndicatorLights(1, true);
        signal1 = true;
        signal2 = false;
        signalx = false;
    }
});
 
mp.keys.bind(0x66, true, function() {
 
    if (signal2 && localPlayer.vehicle) {
        signal2 = false;
        //mp.game.graphics.notify('Правый поворотник выключен');
        hudBrows.execute(`updateTurns('right', false)`);
        localPlayer.vehicle.setIndicatorLights(0, false);
    } else if (signal1 && localPlayer.vehicle) {
        //mp.game.graphics.notify('Правый поворотник включен');
        hudBrows.execute(`updateTurns('right', true)`);
        localPlayer.vehicle.setIndicatorLights(1, false);
        localPlayer.vehicle.setIndicatorLights(0, true);
        signal1 = false;
        signal2 = true;
        signalx = false;
    } else if (signalx && localPlayer.vehicle) {
   
        //mp.game.graphics.notify('Правый поворотник включен');
        hudBrows.execute(`updateTurns('right', true)`);
        localPlayer.vehicle.setIndicatorLights(1, false);
        localPlayer.vehicle.setIndicatorLights(0, true);
        signal1 = false;
        signal2 = true;
        signalx = false;
    } else if (localPlayer.vehicle) {
        //mp.game.graphics.notify('Правый поворотник включен');
        hudBrows.execute(`updateTurns('right', true)`);
        localPlayer.vehicle.setIndicatorLights(0, true);
        signal1 = false;
        signal2 = true;
        signalx = false;
    }
});
 
mp.keys.bind(0x68, true, function() {
 
    if (signalx && localPlayer.vehicle) {
        //mp.game.graphics.notify('Аварийка выключена');
        hudBrows.execute(`updateTurns('all', false)`);
        localPlayer.vehicle.setIndicatorLights(1, false);
        localPlayer.vehicle.setIndicatorLights(0, false);
        signalx = false;
 
    } else
    if (localPlayer.vehicle) {
        //mp.game.graphics.notify('Аварийка включена');
        hudBrows.execute(`updateTurns('all', true)`);
        localPlayer.vehicle.setIndicatorLights(1, true);
        localPlayer.vehicle.setIndicatorLights(0, true);
        signalx = true;
    }
})