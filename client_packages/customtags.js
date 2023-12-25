const maxDistance = 300;
const width = 0.03;
const height = 0.006;
const border = 0.001; 
const color = [255,255,255,255];

if (player.remoteAdminlvl >= 1) {
    const maxDistance = 100*100;
}

mp.nametags.enabled = false;
global.showNametags = true;

mp.events.add('render', (nametags, player) => {
    const graphics = mp.game.graphics;
    const screenRes = graphics.getScreenResolution(0, 0);
    if (!showNametags) return;
    nametags.forEach(nametag => {
        let [player, x, y, distance] = nametag;
        if (player.getAlpha() > 15) {
		
            if(distance <= maxDistance) {	   
                let scale = (distance / maxDistance);
                if(scale < 0.4) scale = 0.4;
                
                var health = player.getHealth();
                health = health < 100 ? 0 : ((health - 100) / 100);
            
                var armour = player.getArmour() / 100;
                
                y -= scale * (0.005 * (screenRes.y / 1080));
                
                mp.game.graphics.drawText(`${player.name.replace('_', ' ')} (${player.remoteId})` , [x, y],
                {
                font: 4,
                color: [255, 255, 255, 255],
                scale: [0.4, 0.4],
                outline: true
                });

                if (player.getVariable('isAdminAuth')) {
                    let adminrank = ['', 'Хелпер', 'Хелпер', 'Хелпер', 'Администратор', 'Администратор', 'Администратор', 'Партнер проекта', 'Заместитель Главного Администратора', 'Главный Администратор', 'Технический Администратор', 'Разработчик', 'Руководство проекта'];
                    if (!player.getVariable('hideAdminRedTag')) {
                        if (player.getVariable('isAdminCustomRedTag') && player.getVariable('adminlvl') >= 7) admintag = player.getVariable('adminCustomRedTag');
                        else admintag = adminrank[parseInt(player.getVariable('adminlvl'))];
                        mp.game.graphics.drawText(`${admintag}` , [x, y-0.02],
                        {
                            font: 4,
                            color: [255, 0, 0, 255],
                            scale: [.3, .3],
                            outline: true
                        });
                    }
                }

                
                if(mp.game.player.isFreeAimingAtEntity(player.handle)) {
                    let y2 = y + 0.042;
                    
                    if(armour > 0) {
                        let x2 = x - width / 2 - border / 2;
                        
                        graphics.drawRect(x2, y2, width + border * 2, 0.0085, 0, 0, 0, 200);
                        graphics.drawRect(x2, y2, width, height, 150, 150, 150, 255);
                        graphics.drawRect(x2 - width / 2 * (1 - health), y2, width * health, height, 255, 255, 255, 200);

                        x2 = x + width / 2 + border / 2;
                    
                        graphics.drawRect(x2, y2, width + border * 2, height + border * 2, 0, 0, 0, 200);
                        graphics.drawRect(x2, y2, width, height, 41, 66, 78, 255);
                        graphics.drawRect(x2 - width / 2 * (1 - armour), y2, width * armour, height, 48, 108, 135, 200);
                    }
                    else {
                        graphics.drawRect(x, y2, width + border * 2, height + border * 2, 0, 0, 0, 200);
                        graphics.drawRect(x, y2, width, height, 150, 150, 150, 255);
                        graphics.drawRect(x - width / 2 * (1 - health), y2, width * health, height, 255, 255, 255, 200);
                    }
                }
            }
        }
    })
})