mp.events.add('rentFarm1Field', () => {
    hudBrows.execute(`showRentVehWindow('150', ', чтобы арендовать поле!')`);
    mp.gui.cursor.visible = true;
})

mp.events.add('rentVehCEFdata', (value) => {
    if (value) {
        mp.events.callRemote('startFarm')
        mp.gui.cursor.visible = false;
    } else {
        mp.events.callRemote('animStop');
        mp.gui.cursor.visible = false;
    }
});