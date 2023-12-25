mp.events.add('playerReady', player => {
    player.call('loadIsland');
    player.dimension = player.id + 32;
    player.position = new mp.Vector3(-1355.051, -902.616, 12.455);
    player.authReady = false;

    db.Handle.query('SELECT * FROM whitelist_sc WHERE socialClub=?', [player.socialClub], function(e, result) {
        if (e) {
            //player.call('playerNotify',(['Произошла ошибка! DB', 'red']));
            console.log(e);
            return;
        }
        if (result[0]) player.call('showRegisterWindow');
        else {
            console.log(player.socialClub+' - Попытался зайти без вайтлиста')
            player.call('showBranchSim');
        }
    });
    
    //
    player.setVariable('adminlvl', 0);
    player.setVariable('isAdminAuth', false);
    player.setVariable('isPlayerAuth', false);

});