require('./admin/index.js');
require('./player/onPlayerConnect.js');

class warningWeapons {
    constructor() {
        this.rpg = '1752584910';
        this.irpg = '375527679';
        this.hatcher = '940833800';
    }
}


class stats {
    constructor() {
        this.health = Number(mp.players.local.getHealth()) + Number(mp.players.local.getArmour())
    }
}

var ww = new warningWeapons();
var st = new stats();

setInterval(() => {
    let hp = st.health;
    setTimeout(() => {
        if (hp < st.health){
            mp.game.graphics.notify('~r~HP HACK!');
        }
    }, 400)
},500)

mp.events.add('auto:pilot', () => {
    mp.player.local.taskVehicleDriverToCoordLongrange(mp.player.local.vehicle.handle, -381.9244, -128.2142, 38.057785, 40, 786603, 30);
});

const d = 30;
var prevPos = mp.players.local.position;

checkTP = function() {
    let newPos = mp.players.local.position;
    let chck = mp.game.gameplayer.getDistanceBetweenCoords(prevPos.x, prevPos.y, prevPos.z, newPos.x, newPos.y, newPos.z, true);
    prevPos = mp.players.local.position;
    if (chck > d) {
      //warning to admin chat
      mp.game.graphics.notify('~r~HACKER!');

    }
}

mp.keys.bind(0x42, true, function() {
    let engineStatus = player.vehicle.getIsEngineRunning()
        if(engineStatus)
        {
            player.vehice.setEngineOn(false, true, true);
        }
        else
        {
            player.vehice.setEngineOn(true, true, true);
        }
});

setInterval(() => {
    let weaponHash = mp.game.invoke('0x0A6DB4965674D243', mp.players.local.handle);
   //let weaponMode = mp.game.weapon.getWeapontypeModel(weaponHash);
  //  mp.gui.chat.push(`hash: ${weapoHash} | model: ${weaponModel}`); 
  if (weaponHash == ww.rpg || weaponHash == ww.irpg ||weaponHash == ww.hatcher) {
      mp.gui.chat.push('~r~Weapon cheat!');
      // kik/ban/warnings
  }
}, 5000)

mp.events.add("playerEnterVechicle",(vechicle,seat) => {
    mp.game.vechicle.defaultEngineBehaviour = false;
    mp.player.local.setConfigFlag(429,true);
});


mp.events.add('render',() => {
    mp.game.plaer.setHealthRechargeMultiplier(0.0); // disable auto-regen hp
    st.health = Number(mp.players.local.getHealth()) + Number(mp.players.local.getArmour())

    checkTP();

    mp.game.controls.disableControlAction(2,37, true); // disable weapon wheel
})