var player = mp.players.local;
mp.gui.chat.activate(false);
mp.gui.chat.show(false);

setTimeout(function(){
    chatbox.execute(`chatAPI.show(false);`);

}, 2000);


mp.events.add('showBranchSim', () => {
    hudBrows.execute(`showAll(false);`);
    hudBrows.execute(`showDevWindow(true);`);
    chatbox.execute(`chatAPI.show(false);`);
    let sceneryCamera = mp.cameras.new('default', new mp.Vector3(-1479.23, -1271.86, 107.866), new mp.Vector3(0,0,0), 40);

    sceneryCamera.pointAtCoord(-1479.23, -1271.86, 107.866);
    sceneryCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    player.freezePosition(true);
    //mp.gui.chat.activate(false);
    //mp.gui.chat.show(false);
    chatbox.execute(`chatAPI.show(false);`);
    mp.game.ui.displayRadar(false);    
})

mp.events.add('showRegisterWindow', () => {
    mp.events.call('hudEvents')
    hudBrows.execute(`showAll(true);`);
    let sceneryCamera = mp.cameras.new('default', new mp.Vector3(-1479.23, -1271.86, 107.866), new mp.Vector3(0,0,0), 40);

    sceneryCamera.pointAtCoord(-1479.23, -1271.86, 107.866);
    sceneryCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    player.freezePosition(true);
    //mp.gui.chat.activate(false);
    //mp.gui.chat.show(false);
    chatbox.execute(`chatAPI.show(false);`);
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.visible = true;
    global.regBrowser = mp.browsers.new('package://cef/auth/index.html');
    if (mp.storage.data.auth == undefined) {
        mp.storage.data.auth = { login: '' };
    }
    regBrowser.execute(`document.getElementById('login').value = "${mp.storage.data.auth.login}";`);
});

mp.events.add('loginToClient', (login, pass) => {
    mp.events.callRemote('loginToServer', login, pass);
})

mp.events.add('registerToClient', (login, email, pass, rpass) => {
    mp.events.callRemote('registerToServer', login, email, pass);
})

mp.events.add('saveLoginInStorage', (login) => {
    mp.storage.data.auth = { login: login };
    mp.storage.flush();
})

mp.events.add('selectorChar', () => {
    player.position = new mp.Vector3(-793.222, 331.759, 210.796);
    player.alpha = 0;
    let sceneryCamera = mp.cameras.new('default', new mp.Vector3(-791.704, 330.909, 211.496), new mp.Vector3(0,0,58), 40);

    sceneryCamera.pointAtCoord(-791.704, 330.909, 211.496);
    sceneryCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    player.freezePosition(true);
    //mp.gui.chat.activate(false);
    //mp.gui.chat.show(false);
    chatbox.execute(`chatAPI.show(false);`);
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.visible = true;
    regBrowser.destroy();
    global.charSelector = mp.browsers.new('package://cef/characterSelector/index.html');
    mp.events.callRemote('requestSelectorData');
})

mp.events.add('selectorDataCEF', (login, donate, choose, character, nickname, lvl, timeHour, fraction, money, bank, dateBan, dateEndBan, adminBan, reasonBan) => {
    charSelector.execute(`takeDatas("${login}","${donate}","${choose}","${character}","${nickname}","${lvl}","${timeHour}","${fraction}","${money}","${bank}","${dateBan}","${dateEndBan}","${adminBan}","${reasonBan}");`);
})

mp.events.add('createCharacter', () => {
    player.position = new mp.Vector3(-793.222, 331.759, 210.796);
    
    let sceneryCamera = mp.cameras.new('default', new mp.Vector3(-791.704, 330.909, 211.496), new mp.Vector3(0,0,58), 40);

    sceneryCamera.pointAtCoord(-791.704, 330.909, 211.496);
    sceneryCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    player.freezePosition(true);
    //mp.gui.chat.activate(false);
    //mp.gui.chat.show(false);
    chatbox.execute(`chatAPI.show(false);`);
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.visible = true;
    regBrowser.destroy();
    global.charCreateBrowser = mp.browsers.new('package://cef/CharacterCreator/index.html');
})

mp.events.add('regSuccess', () => {
    regBrowser.destroy();
    
    player.freezePosition(false);
    //mp.gui.chat.activate(true);
    //mp.gui.chat.show(true);
    chatbox.execute(`chatAPI.show(true);`);
    mp.game.ui.displayRadar(true);
    mp.gui.cursor.visible = false;
    mp.game.cam.renderScriptCams(false, false, 0, false, false);
    player.position = new mp.Vector3(-424, 1124, 329);
})

mp.events.add('charCreateSuccess', () => {
    player.freezePosition(false);
    //mp.gui.chat.activate(true);
    //mp.gui.chat.show(true);
    chatbox.execute(`chatAPI.show(true);`);
    mp.game.ui.displayRadar(true);
    mp.gui.cursor.visible = false;
    mp.game.cam.renderScriptCams(false, false, 0, false, false);
    player.position = new mp.Vector3(-424, 1124, 329);
    mp.game.graphics.stopScreenEffect(lastScreenEffect);
});

mp.events.add('againCharacterCret', () => {
    mp.game.graphics.stopScreenEffect(lastScreenEffect);
    global.charCreateBrowser = mp.browsers.new('package://cef/CharacterCreator/index.html');
});



mp.events.add('charCreateSelected', (selected) => {
    charSelector.destroy();
    player.freezePosition(false);
    //mp.gui.chat.activate(true);
    //mp.gui.chat.show(true);
    chatbox.execute(`chatAPI.show(true);`);
    mp.game.ui.displayRadar(true);
    mp.gui.cursor.visible = false;
    mp.game.cam.renderScriptCams(false, false, 0, false, false);


    player.position = new mp.Vector3(-793.222, 331.759, 210.796);
    let sceneryCamera = mp.cameras.new('default', new mp.Vector3(-791.704, 330.909, 211.496), new mp.Vector3(0,0,58), 40);

    sceneryCamera.pointAtCoord(-791.704, 330.909, 211.496);
    sceneryCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    player.freezePosition(true);
    //mp.gui.chat.activate(false);
    //mp.gui.chat.show(false);
    chatbox.execute(`chatAPI.show(false);`);
    mp.game.ui.displayRadar(false);
    mp.gui.cursor.visible = true;
    global.charCreateBrowser = mp.browsers.new('package://cef/CharacterCreator/index.html');
});


mp.events.add('preLoadCharacter', (selected) => {
    mp.events.callRemote('localCharacterGet', selected);
})

mp.events.add('loadSelectedCharacter', (selected) => {
    charSelector.destroy();
    mp.events.callRemote('serverLoadCharacter', selected);
})


mp.events.add('charSelectionSuccess', () => {
    player.freezePosition(false);
    //mp.gui.chat.activate(true);
    //mp.gui.chat.show(true);
    chatbox.execute(`chatAPI.show(true);`);
    mp.game.ui.displayRadar(true);
    mp.gui.cursor.visible = false;
    mp.game.cam.renderScriptCams(false, false, 0, false, false);
})
