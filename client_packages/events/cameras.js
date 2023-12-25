mp.events.add('cameraPort', () => {
    let sceneryCamera = mp.cameras.new('port', new mp.Vector3(-193.21, -2496.10, 12.04), new mp.Vector3(-25,0,-130), 65);

    sceneryCamera.pointAtCoord(-193.21, -2496.10, 12.04);
    sceneryCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false); // Активировать
});

mp.events.add('cameraBus', () => {
    let sceneryCamera = mp.cameras.new('bus', new mp.Vector3(-2177.19, -409.34, 19.17), new mp.Vector3(-25,0,75), 65);

    sceneryCamera.pointAtCoord(-2177.19, -409.34, 19.17);
    sceneryCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false); // Активировать
});

mp.events.add('cameraSawmill', () => {
    let sceneryCameraSawill = mp.cameras.new('sawmill', new mp.Vector3(-836.84, 5415.42, 39.45), new mp.Vector3(-25,0,150), 65);

    sceneryCameraSawill.pointAtCoord(-836.84, 5415.42, 39.45);
    sceneryCameraSawill.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false); // Активировать
});

mp.events.add('cameraIncos', () => {
    let sceneryCamera = mp.cameras.new('Incos', new mp.Vector3(105.81, -1080.05, 34.19), new mp.Vector3(-25, 0, -160), 60)
    
    sceneryCamera.pointAtCoord(105.81, -1080.05, 34.19);
    sceneryCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false); // Активировать
});


mp.events.add('cameraStop', () => {
    mp.game.cam.renderScriptCams(false, false, 0, false, false);
});

