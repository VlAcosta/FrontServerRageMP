mp.markers.new(1, new mp.Vector3(450.20, -992.80, 29.69), 1, {color: [255, 255, 51, 255], dimension: 0})
let shapeCloakRoom = mp.colshapes.newSphere(450.20, -992.80, 30.69, 1, 0);
mp.labels.new('Раздевалка', new mp.Vector3(450.20, -992.80, 30.69), { los: true, drawDistance: 5 });

function playerEnterColshapeHandler(player, shape) {
    if (shape == shapeCloakRoom){
        player.call('LSPD_cloak');
    }
};

function playerExitColshapeHandler(player, shape) {
    if (shape == shapeCloakRoom) player.call('LSPD_cloak_end');
};

mp.events.add('playerEnterColshape', playerEnterColshapeHandler);
mp.events.add("playerExitColshape", playerExitColshapeHandler);



mp.events.add('LSPDСloak', (player) => {   
    if(player.oldfraction == 1) {
        if (!player.fractionWork) {
            player.fractionWork = true;
            if (player.gender) {
                player.setClothes(4, 34, 0, 0) //Legs
                player.setClothes(6, 25, 0, 0); //Shoes
                player.setClothes(8, 129, 0, 0); //Undershirts
                player.setClothes(10, 8, 1 , 0); //Decals
                player.setClothes(11, 55, 0 , 0); //Tops
            } else {
                player.setClothes(4, 33, 0, 0) //Legs
                player.setClothes(6, 24, 0, 0); //Shoes
                player.setClothes(8, 159, 0, 0); //Undershirts
                player.setClothes(10, 7, 1 , 0); //Decals
                player.setClothes(11, 55, 0 , 0); //Tops
            }
        }
        else {
            player.fractionWork = false;
            if (player.gender) {
                player.setClothes(3, 0, 0, 0); //Torsos
                player.setClothes(4, 0, 0,  0); //Legs
                player.setClothes(6, 0, 0, 0); //Shoes
                player.setClothes(8, 0, 0, 0); //Undershirts
                player.setClothes(11, 0, 0 , 0); //Tops
            } else {
                player.setClothes(3, 0, 0, 0); //Torsos
                player.setClothes(4, 0, 0,  0); //Legs
                player.setClothes(6, 0, 0, 0); //Shoes
                player.setClothes(8, 0, 0, 0); //Undershirts
                player.setClothes(11, 0, 0 , 0); //Tops
            }
        }
    } else {
        player.call('playerNotify',([`Вы не состоите в данной фракции!`, 'no']));

    }
})


