mp.events.add('playerReady', () => {
    global.adminpanel = mp.browsers.new('package://cef/adminPanel/index.html');
});

let localPlayer = mp.players.local;
showed = false;
mp.events.add('ClientGetDataPlayer', (value1, value2) => {
    mp.events.callRemote('serverGetDataPlayer', value1, value2);
});

mp.events.add('regAdminPass', (apass) => {
    adminpanel.execute('showReg(false);');
    mp.events.callRemote('saveAdminPass', apass);
    adminpanel.execute('showAuth(true);');
})

mp.events.add('authAdminPass', (apass) => {
    mp.events.callRemote('adminAuth', apass);
})

mp.events.add('successAdminAuth', () => {
    adminpanel.execute('showAuth(false);');
    adminpanel.execute('showMain(true);');
})

mp.events.add('logOutAdmin', () => {
    mp.events.callRemote('logOutAdminServer');
})

mp.events.add('adminPanelCommand', (command, pid, value1, value2) => {
    mp.events.callRemote('adminPanelCommandServer', command, pid, value1, value2);
})

mp.events.add('clientSendDataPlayerbyID', (id, playerNickname, pid, lvl, playHours, login, socialclub, money, bank, warn, warnsall) => {
    adminpanel.execute(`updatePlayerDatabyID("${id}","${playerNickname}","${pid}","${lvl}","${playHours}","${login}","${socialclub}","${money}","${bank}","${warn}","${warnsall}");`)
})

mp.events.add('clientSendDataPlayerbyNickname', (isOnline, id, playerNickname, pid, lvl, playHours, login, socialclub, money, bank, warn, warnsall) => {
    adminpanel.execute(`updatePlayerDatabyNickname("${isOnline}","${id}","${playerNickname}","${pid}","${lvl}","${playHours}","${login}","${socialclub}","${money}","${bank}","${warn}","${warnsall}");`)
})

mp.events.add('render', () => {
    if(localPlayer.getVariable('adminlvl') == 0) return;
    adminpanel.execute(`permissionsEdit(${localPlayer.getVariable('adminlvl')});`);
});

mp.events.add('adminSettingsTabupdate', () => {
    if (mp.storage.data.admin == undefined) {
        mp.storage.data.admin = {
            showAuthInChat: true,
            hideRedTag: false,
            enableCustomTag: false,
            customRedTag: ''
        };
        mp.storage.flush();
    }
    adminpanel.execute(`updateSettingsTabValue(${mp.storage.data.admin.showAuthInChat}, ${mp.storage.data.admin.hideRedTag}, ${mp.storage.data.admin.enableCustomTag}, "${mp.storage.data.admin.customRedTag}");`);
});

mp.events.add('adminVehSpawnPanel', (value) => {
    mp.events.callRemote('adminVehSpawnPanelServer', value);
});

mp.events.add('adminVehList_RefreshCall', () => {
    mp.events.callRemote('adminVehList_RefreshCallServ');
});

mp.events.add('adminVehList_RefreshSend', (id, model, aname) => {
    adminpanel.execute(`adminVehAddInList("${id}", "${mp.game.vehicle.getDisplayNameFromVehicleModel(model)}", "${aname.replace('_', ' ')}");`);
});

mp.events.add('adminVehList_DeleteVeh', (value) => {
    mp.events.callRemote('adminVehList_DeleteVehServ', value);
});

mp.events.add('adminVehList_DeleteAllVeh', () => {
    mp.events.callRemote('adminVehList_DeleteAllVehServ');
});

mp.events.add('adminSettingsFromPanel', (value1, value2, value3, value4) => {
    //notifyBrowser.execute(`showNotify("${value1}, ${value2}, ${value3}, ${value4}", "blue");`);
    mp.storage.data.admin = {
        showAuthInChat: value1,
        hideRedTag: value2,
        enableCustomTag: value3,
        customRedTag: value4
    };
    mp.storage.flush();
    mp.events.callRemote('updateAdminPanelSettings', value1, value2, value3, value4);
});

setTimeout(function () {
    mp.keys.bind(Keys.VK_F6, true, function() { // F6
        if(localPlayer.getVariable('adminlvl') == 0) return;
        //mp.game.graphics.notify(localPlayer.getVariable('adminlvl'))
        if (showed) {
            showed = false;
            mp.gui.cursor.visible = false;
            adminpanel.execute('showPanel(false);');
        } else {
            showed = true;
            mp.gui.cursor.visible = true;
            adminpanel.execute('showPanel(true);');
        }

        if(!localPlayer.getVariable('isAdminAuth')){
            if(localPlayer.getVariable('adminpass') == null) {
                adminpanel.execute('showReg(true);');
            } else {
                adminpanel.execute('showAuth(true);');
            }
        } else {
            adminpanel.execute('showMain(true);');
        }
    })
    if (player.getVariable('adminlvl') > 0) {
        if (mp.storage.data.admin == undefined) {
            mp.storage.data.admin = {
                showAuthInChat: true,
                hideRedTag: false,
                enableCustomTag: false,
                customRedTag: ''
            };
            mp.storage.flush();
        }
        mp.events.callRemote('updateAdminPanelSettings', mp.storage.data.admin.showAuthInChat, mp.storage.data.admin.hideRedTag, mp.storage.data.admin.enableCustomTag, mp.storage.data.admin.customRedTag);
    }
}, 5000)
