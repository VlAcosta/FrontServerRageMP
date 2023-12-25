global.hudBrows = mp.browsers.new("package://cef/hud/index.html");
let showed = false;
let player = mp.players.local;


mp.events.add('hudEvents', () => {
    mp.events.add('render', () => {
        mp.game.gxt.set("PM_PAUSE_HDR", "RAGERP");
        mp.game.ui.setMinimapComponent(6, true, -1);
        mp.game.ui.setMinimapComponent(7, true, -1);
        mp.game.ui.setMinimapComponent(8, true, -1);
        mp.game.ui.setMinimapComponent(9, true, -1);
        mp.game.ui.setMinimapComponent(10, true, -1);
        mp.game.ui.setMinimapComponent(11, true, -1);
        mp.game.ui.setMinimapComponent(12, true, -1);
        mp.game.ui.setMinimapComponent(13, true, -1);
        mp.game.ui.setMinimapComponent(14, true, -1);
        mp.game.ui.setMinimapComponent(15, true, -1);
        mp.game.ui.hideHudComponentThisFrame(6);
        mp.game.ui.hideHudComponentThisFrame(7);
        mp.game.ui.hideHudComponentThisFrame(8);
        mp.game.ui.hideHudComponentThisFrame(9);
        hudBrows.execute(`locationUpdate("${mp.game.gxt.get(mp.game.zone.getNameOfZone(player.position.x, player.position.y, player.position.z))}","${mp.game.ui.getStreetNameFromHashKey(mp.game.pathfind.getStreetNameAtCoord(player.position.x, player.position.y, player.position.z, 0, 0).streetName)}")`);
        if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle) // Спидометр
        {
            if(showed === false)
            {
                hudBrows.execute(`updateTurns('left', false)`);
                hudBrows.execute(`updateTurns('right', false)`);
                hudBrows.execute(`updateTurns('all', false)`);
                hudBrows.execute("showSpeed(true);");
                showed = true;
            }
            /*Get vehicle infos*/
            let vel = Math.round(player.vehicle.getSpeed() * 3.6);
            let rpm = player.vehicle.rpm * 10;
            let gas = player.vehicle.getPetrolTankHealth();
            gas = gas < 0 ? 0: gas / 10;
            
            hudBrows.execute(`updateVehData("${vel}", "${rpm}", "0", "${gas}");`);


            if (player.vehicle.getIsEngineRunning() == 1) hudBrows.execute(`updateIcons('engine', true)`);
            else hudBrows.execute(`updateIcons('engine', false)`);

            let flag = player.getConfigFlag(32, true);
            if (!flag) hudBrows.execute(`updateIcons('belt', true)`);
            else hudBrows.execute(`updateIcons('belt', false)`);
        }
        else
        {
            if(showed)
            {
                hudBrows.execute("showSpeed(false);");
                showed = false;
            }
        }

        hudBrows.execute(`updateMoney("${player.getVariable('money')}");`);


    });


    mp.events.add('showMyHUD', (value) => {
        hudBrows.execute(`showHUD("${value}");`);
    })

    mp.events.add('updateCountPlayers', (value) => {
        hudBrows.execute(`updateCountPl("${value}");`);
    })

    mp.events.add('updateCountPlayers', (value) => {
        hudBrows.execute(`updateCountPl("${value}");`);
    })

    mp.events.add('updateTimeHUD', (dates, times) => {
        hudBrows.execute(`updateTime("${dates}", "${times}");`);
    })

    mp.events.add('showCursorEv', (value) => {
        mp.gui.cursor.visible = value;
    })

    mp.events.add('changeMmenuState', (value) => {
        Mmenu = value;
    })

    var playerlist = 
    [
        {
            isOnline: true,
            nickname: 'Oscar Moore',
            pid: '12',
            ranktext: 'Генеральный Директор',
            rank: "14",
            lastdate: '12.08.2021 13:23'
        },{
            isOnline: true,
            nickname: 'Zaks Musa',
            pid: '12',
            ranktext: 'Организатор',
            rank: "12",
            lastdate: '12.08.2021 13:23'
        },{
            isOnline: false,
            nickname: 'Konstantin Rubinshteyner',
            pid: '20',
            ranktext: 'Организатор',
            rank: "12",
            lastdate: '11.08.2021 15:40'
        },{
            isOnline: false,
            nickname: 'Oscar Moore',
            pid: '15',
            ranktext: 'Заместитель начальника отдела',
            rank: "13",
            lastdate: '11.08.2021 15:40'
        },{
            isOnline: true,
            nickname: 'Oscars Moore',
            pid: '15',
            ranktext: 'Заместитель начальника отдела',
            rank: "13",
            lastdate: '11.08.2021 15:40'
        },
    ]

    setTimeout(() => {
        hudBrows.execute(`updateIdPl('${player.remoteId}');`);
    }, 5000);

    Mmenu = false;
    Inventory = false;
    setTimeout(() => {
        playerlist = JSON.stringify(playerlist)
        hudBrows.execute(`updateplayerlist(${playerlist})`)
        mp.keys.bind(Keys.VK_M, true, function() {
            if (mp.gui.cursor.visible) return
            if(!player.getVariable('isPlayerAuth')) return;
            Mmenu = !Mmenu;
            mp.gui.cursor.visible = Mmenu;
            hudBrows.execute(`showPlayerMenu(${Mmenu});`);
        })

        mp.keys.bind(Keys.VK_I, true, function() {
            if (mp.gui.cursor.visible && !Inventory) return
            if(!player.getVariable('isPlayerAuth')) return;
            Inventory = !Inventory;
            mp.gui.cursor.visible = Inventory;
            hudBrows.execute(`showInventory(${Inventory});`);
        })
    }, 3000);

});