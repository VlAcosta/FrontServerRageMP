var hole = 0;
var seeds = 0;
var seedsName = "Картошку"
var field = 0;
//var farmShapeGame = workFarm1_1Shape , workFarm1_2Shape,workFarm1_3Shape,workFarm1_4Shape,workFarm1_5Shape,workFarm1_6Shape,workFarm1_7Shape,workFarm1_8Shape,workFarm1_9,ShapeworkFarm1_10Shape,ShapeworkFarm1_11Shape,ShapeworkFarm1_12Shape,ShapeworkFarm1_13Shape,ShapeworkFarm1_14Shape,ShapeworkFarm1_15Shape,ShapeworkFarm1_16Shape, ShapeworkFarm1_17Shape,ShapeworkFarm1_18Shape, ShapeworkFarm1_19Shape, ShapeworkFarm1_20Shape, ShapeworkFarm1_21Shape

mp.events.add('shovel', (player) => {
    mp.objects.new('xm_prop_x17_shovel_01a', player.position,
        {

        });
});



mp.events.add('+seeds', () => {
    seeds += 5;
});
 
mp.events.add('-seeds', () => {
    seeds -= 1;
})

function createWorkMarker() {
    let rnd = Math.floor(Math.random() * 2);
    if (rnd == 1) {
        workFarm1Shape = mp.colshapes.newSphere(2820.90, 4585.12, 45.03, 3, 0)
        workFarm1Marker = mp.markers.new(1, new mp.Vector3(2820.90, 4585.12, 45.03), 3, 0, true, 0);
        workFarm1Blip = mp.blips.new(238, new mp.Vector3(2820.90, 4585.12, 46.03), {name: 'Ваша участок', scale: 1, shortRange: false, dimension: 0});
        field = 1;
    } else if (rnd == 2){
        workFarm2Shape = mp.colshapes.newSphere(2826.98, 4586.79, 45.62, 3, 0)
        workFarm1Marker = mp.markers.new(1, new mp.Vector3(2826.98, 4586.79, 45.62), 3, 0, true, 0);
        workFarm1Blip = mp.blips.new(238, new mp.Vector3(2826.98, 4586.79, 46.62), {name: 'Ваша участок', scale: 1, shortRange: false, dimension: 0});
        field = 2;
    }
}





mp.events.add('playerEnterColshape', (shape) => {
    try{
        if (field ==1 ){
        try {
            if (shape == farmShapeGame) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы хороший человек`, 'yes')
            }
        } catch (err) {}
        try {
            if(shape == workFarm1Shape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                workFarm1Shape.destroy();
                workFarm1Marker.destroy();
                workFarm1Blip.destroy();
                //Создания 1 грядки
                workFarm1_1Shape = mp.colshapes.newSphere(2818.07, 4587.59, 44.88, 1.5, 0);
                workFarm1_1Marker = mp.markers.new(1, new mp.Vector3(2818.07, 4587.59, 44.88), 1, 0, true, 0)
                workFarm1_1Blip = mp.blips.new(1, new mp.Vector3(2818.07, 4587.59, 45.88), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            }
        } catch (err) {}

        try {
            if(shape == workFarm1_1Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок `, 'yes');
                workFarm1_1Shape.destroy();
                workFarm1_1Marker.destroy();
                workFarm1_1Blip.destroy();
                workFarm1_2Shape = mp.colshapes.newSphere(2816.82, 4592.22, 44.85, 1.5, 0);
                workFarm1_2Marker = mp.markers.new(1, new mp.Vector3(2816.82, 4592.22, 44.85), 1, 0, true, 0)
                workFarm1_2Blip = mp.blips.new(1, new mp.Vector3(2816.82, 4592.22, 45.85), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});

            }
        } catch (err) {}

        try{
            if(shape == workFarm1_2Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_2Shape.destroy();
                workFarm1_2Marker.destroy();
                workFarm1_2Blip.destroy();
                workFarm1_3Shape = mp.colshapes.newSphere(2815.72, 4596.80, 44.68, 1.5, 0);
                workFarm1_3Marker = mp.markers.new(1, new mp.Vector3(2815.72, 4596.80, 44.68), 1, 0, true, 0)
                workFarm1_3Blip = mp.blips.new(1, new mp.Vector3(2815.72, 4596.80, 45.68), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_3Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_3Shape.destroy();
                workFarm1_3Marker.destroy();
                workFarm1_3Blip.destroy();
                workFarm1_4Shape = mp.colshapes.newSphere(2814.28, 4601.96, 44.68, 1.5, 0);
                workFarm1_4Marker = mp.markers.new(1, new mp.Vector3(2814.28, 4601.96, 44.68), 1, 0, true, 0)
                workFarm1_4Blip = mp.blips.new(1, new mp.Vector3(2814.28, 4601.96, 45.68), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_4Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_4Shape.destroy();
                workFarm1_4Marker.destroy();
                workFarm1_4Blip.destroy();
                workFarm1_5Shape = mp.colshapes.newSphere(2812.91, 4607.10, 44.63, 1.5, 0);
                workFarm1_5Marker = mp.markers.new(1, new mp.Vector3(2812.91, 4607.10, 44.63), 1, 0, true, 0)
                workFarm1_5Blip = mp.blips.new(1, new mp.Vector3(2812.91, 4607.10, 45.63), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_5Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_5Shape.destroy();
                workFarm1_5Marker.destroy();
                workFarm1_5Blip.destroy();
                workFarm1_6Shape = mp.colshapes.newSphere(2811.58, 4612.66, 44.54, 1.5, 0);
                workFarm1_6Marker = mp.markers.new(1, new mp.Vector3(2811.58, 4612.66, 44.54), 1, 0, true, 0)
                workFarm1_6Blip = mp.blips.new(1, new mp.Vector3(2811.58, 4612.66, 45.54), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_6Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_6Shape.destroy();
                workFarm1_6Marker.destroy();
                workFarm1_6Blip.destroy();
                workFarm1_7Shape = mp.colshapes.newSphere(2810.40, 4617.76, 44.42, 1.5, 0);
                workFarm1_7Marker = mp.markers.new(1, new mp.Vector3(2810.40, 4617.76, 44.42), 1, 0, true, 0)
                workFarm1_7Blip = mp.blips.new(1, new mp.Vector3(2810.40, 4617.76, 45.42), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_7Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_7Shape.destroy();
                workFarm1_7Marker.destroy();
                workFarm1_7Blip.destroy();
                workFarm1_8Shape = mp.colshapes.newSphere(2819.96, 4588.21, 45.02, 1.5, 0);
                workFarm1_8Marker = mp.markers.new(1, new mp.Vector3(2819.96, 4588.21, 45.02), 1, 0, true, 0)
                workFarm1_8Blip = mp.blips.new(1, new mp.Vector3(2820.04, 4588.09, 46.02), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_8Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_8Shape.destroy();
                workFarm1_8Marker.destroy();
                workFarm1_8Blip.destroy();
                workFarm1_9Shape = mp.colshapes.newSphere(2818.81, 4592.65, 44.98, 1.5, 0);
                workFarm1_9Marker = mp.markers.new(1, new mp.Vector3(2818.81, 4592.65, 44.98), 1, 0, true, 0)
                workFarm1_9Blip = mp.blips.new(1, new mp.Vector3(2818.81, 4592.65, 45.98), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_9Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_9Shape.destroy();
                workFarm1_9Marker.destroy();
                workFarm1_9Blip.destroy();
                workFarm1_10Shape = mp.colshapes.newSphere(2817.61, 4597.43, 44.73, 1.5, 0);
                workFarm1_10Marker = mp.markers.new(1, new mp.Vector3(2817.61, 4597.43, 44.73), 1, 0, true, 0)
                workFarm1_10Blip = mp.blips.new(1, new mp.Vector3(2817.61, 4597.43, 45.73), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_10Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_10Shape.destroy();
                workFarm1_10Marker.destroy();
                workFarm1_10Blip.destroy();
                workFarm1_11Shape = mp.colshapes.newSphere(2816.31, 4602.56, 44.83, 1.5, 0);
                workFarm1_11Marker = mp.markers.new(1, new mp.Vector3(2816.31, 4602.56, 44.83), 1, 0, true, 0)
                workFarm1_11Blip = mp.blips.new(1, new mp.Vector3(2816.31, 4602.56, 45.83), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_11Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_11Shape.destroy();
                workFarm1_11Marker.destroy();
                workFarm1_11Blip.destroy();
                workFarm1_12Shape = mp.colshapes.newSphere(2814.84, 4607.68, 44.87, 1.5, 0);
                workFarm1_12Marker = mp.markers.new(1, new mp.Vector3(2814.84, 4607.68, 44.87), 1, 0, true, 0)
                workFarm1_12Blip = mp.blips.new(1, new mp.Vector3(2814.84, 4607.68, 45.87), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_12Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_12Shape.destroy();
                workFarm1_12Marker.destroy();
                workFarm1_12Blip.destroy();
                workFarm1_13Shape = mp.colshapes.newSphere(2813.47, 4613.42, 44.67, 1.5, 0);
                workFarm1_13Marker = mp.markers.new(1, new mp.Vector3(2813.47, 4613.42, 44.67), 1, 0, true, 0)
                workFarm1_13Blip = mp.blips.new(1, new mp.Vector3(2813.47, 4613.42, 45.67), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_13Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_13Shape.destroy();
                workFarm1_13Marker.destroy();
                workFarm1_13Blip.destroy();
                workFarm1_14Shape = mp.colshapes.newSphere(2812.30, 4618.45, 44.53, 1.5, 0);
                workFarm1_14Marker = mp.markers.new(1, new mp.Vector3(2812.30, 4618.45, 44.53), 1, 0, true, 0)
                workFarm1_14Blip = mp.blips.new(1, new mp.Vector3(2812.30, 4618.45, 45.53), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_14Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_14Shape.destroy();
                workFarm1_14Marker.destroy();
                workFarm1_14Blip.destroy();
                workFarm1_15Shape = mp.colshapes.newSphere(2822.03, 4588.79, 45.26, 1.5, 0);
                workFarm1_15Marker = mp.markers.new(1, new mp.Vector3(2822.03, 4588.79, 45.26), 1, 0, true, 0)
                workFarm1_15Blip = mp.blips.new(1, new mp.Vector3(2822.03, 4588.79, 46.26), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_15Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_15Shape.destroy();
                workFarm1_15Marker.destroy();
                workFarm1_15Blip.destroy();
                workFarm1_16Shape = mp.colshapes.newSphere(2820.93, 4593.22, 45.14, 1.5, 0);
                workFarm1_16Marker = mp.markers.new(1, new mp.Vector3(2820.93, 4593.22, 45.14), 1, 0, true, 0)
                workFarm1_16Blip = mp.blips.new(1, new mp.Vector3(2820.93, 4593.22, 46.14), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_16Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_16Shape.destroy();
                workFarm1_16Marker.destroy();
                workFarm1_16Blip.destroy();
                workFarm1_17Shape = mp.colshapes.newSphere(2819.79, 4598.06, 45.11 , 1.5, 0);
                workFarm1_17Marker = mp.markers.new(1, new mp.Vector3(2819.79, 4598.06, 45.11), 1, 0, true, 0)
                workFarm1_17Blip = mp.blips.new(1, new mp.Vector3(2819.79, 4598.06, 46.11), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_17Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_17Shape.destroy();
                workFarm1_17Marker.destroy();
                workFarm1_17Blip.destroy();
                workFarm1_18Shape = mp.colshapes.newSphere(2818.35, 4603.13, 45.03, 1.5, 0);
                workFarm1_18Marker = mp.markers.new(1, new mp.Vector3(2818.35, 4603.13, 45.03), 1, 0, true, 0)
                workFarm1_18Blip = mp.blips.new(1, new mp.Vector3(2818.35, 4603.13, 46.03), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_18Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_18Shape.destroy();
                workFarm1_18Marker.destroy();
                workFarm1_18Blip.destroy();
                workFarm1_19Shape = mp.colshapes.newSphere(2817.07, 4608.30, 44.98, 1.5, 0);
                workFarm1_19Marker = mp.markers.new(1, new mp.Vector3(2817.07, 4608.30, 44.98), 1, 0, true, 0)
                workFarm1_19Blip = mp.blips.new(1, new mp.Vector3(2817.07, 4608.30, 45.98), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_19Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_19Shape.destroy();
                workFarm1_19Marker.destroy();
                workFarm1_19Blip.destroy();
                workFarm1_20Shape = mp.colshapes.newSphere(2815.64, 4614.04, 44.82, 1.5, 0);
                workFarm1_20Marker = mp.markers.new(1, new mp.Vector3(2815.64, 4614.04, 44.82), 1, 0, true, 0)
                workFarm1_20Blip = mp.blips.new(1, new mp.Vector3(2815.64, 4614.04, 45.82), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}
        try{
            if(shape == workFarm1_20Shape) {
                hole += 1;
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                workFarm1_20Shape.destroy();
                workFarm1_20Marker.destroy();
                workFarm1_20Blip.destroy();
                workFarm1_21Shape = mp.colshapes.newSphere(2814.44, 4619.13, 44.76, 1.5, 0);
                workFarm1_21Marker = mp.markers.new(1, new mp.Vector3(2814.44, 4619.13, 44.76), 1, 0, true, 0)
                workFarm1_21Blip = mp.blips.new(1, new mp.Vector3(2814.44, 4619.13, 45.76), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } 
        } catch (err) {}

        //Засадка семян 

        try {
            if (shape == workFarm1_21Shape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                workFarm1_21Shape.destroy();
                workFarm1_21Marker.destroy();
                workFarm1_21Blip.destroy();
                mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
                mp.events.call('playerNotify', `Вы выкопали все лунки`, 'yes');
                mp.events.call('playerNotify', `Направляйтесь к фермеру Бену и купите у него семян для посадки`, 'yes');
                hole = 0;
                workFarm1_1PlantShape = mp.colshapes.newSphere(2818.07, 4587.59, 44.88, 1.5, 0);
                workFarm1_1PlantMarker = mp.markers.new(1, new mp.Vector3(2818.07, 4587.59, 44.88), 1, 0, true, 0)
                workFarm1_1PlantBlip = mp.blips.new(1, new mp.Vector3(2818.07, 4587.59, 45.88), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        }
        } catch (err){} 
        try {
            if (shape == workFarm1_1PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_1PlantShape.destroy();
                    workFarm1_1PlantMarker.destroy();
                    workFarm1_1PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_2PlantShape = mp.colshapes.newSphere(2816.82, 4592.22, 44.85, 1.5, 0);
                    workFarm1_2PlantMarker = mp.markers.new(1, new mp.Vector3(2816.82, 4592.22, 44.85), 1, 0, true, 0)
                    workFarm1_2PlantBlip = mp.blips.new(1, new mp.Vector3(2816.82, 4592.22, 45.85), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_2PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_2PlantShape.destroy();
                    workFarm1_2PlantMarker.destroy();
                    workFarm1_2PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_3PlantShape = mp.colshapes.newSphere(2815.72, 4596.80, 44.68, 1.5, 0);
                    workFarm1_3PlantMarker = mp.markers.new(1, new mp.Vector3(2815.72, 4596.80, 44.68), 1, 0, true, 0)
                    workFarm1_3PlantBlip = mp.blips.new(1, new mp.Vector3(2815.72, 4596.80, 45.68), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_3PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_3PlantShape.destroy();
                    workFarm1_3PlantMarker.destroy();
                    workFarm1_3PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_4PlantShape = mp.colshapes.newSphere(2814.28, 4601.96, 44.68, 1.5, 0);
                    workFarm1_4PlantMarker = mp.markers.new(1, new mp.Vector3(2814.28, 4601.96, 44.68), 1, 0, true, 0)
                    workFarm1_4PlantBlip = mp.blips.new(1, new mp.Vector3(2814.28, 4601.96, 45.68), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_4PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_4PlantShape.destroy();
                    workFarm1_4PlantMarker.destroy();
                    workFarm1_4PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_5PlantShape = mp.colshapes.newSphere(2812.91, 4607.10, 44.63, 1.5, 0);
                    workFarm1_5PlantMarker = mp.markers.new(1, new mp.Vector3(2812.91, 4607.10, 44.63), 1, 0, true, 0)
                    workFarm1_5PlantBlip = mp.blips.new(1, new mp.Vector3(2812.91, 4607.10, 45.63), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_5PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_5PlantShape.destroy();
                    workFarm1_5PlantMarker.destroy();
                    workFarm1_5PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_6PlantShape = mp.colshapes.newSphere(2811.58, 4612.66, 44.54, 1.5, 0);
                    workFarm1_6PlantMarker = mp.markers.new(1, new mp.Vector3(2811.58, 4612.66, 44.54), 1, 0, true, 0)
                    workFarm1_6PlantBlip = mp.blips.new(1, new mp.Vector3(2811.58, 4612.66, 44.54), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_6PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_6PlantShape.destroy();
                    workFarm1_6PlantMarker.destroy();
                    workFarm1_6PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_7PlantShape = mp.colshapes.newSphere(2810.40, 4617.76, 44.42, 1.5, 0);
                    workFarm1_7PlantMarker = mp.markers.new(1, new mp.Vector3(2810.40, 4617.76, 44.42), 1, 0, true, 0)
                    workFarm1_7PlantBlip = mp.blips.new(1, new mp.Vector3(2810.40, 4617.76, 45.42), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_7PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_7PlantShape.destroy();
                    workFarm1_7PlantMarker.destroy();
                    workFarm1_7PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_8PlantShape = mp.colshapes.newSphere(2819.96, 4588.21, 45.02, 1.5, 0);
                    workFarm1_8PlantMarker = mp.markers.new(1, new mp.Vector3(2819.96, 4588.21, 45.02), 1, 0, true, 0)
                    workFarm1_8PlantBlip = mp.blips.new(1, new mp.Vector3(2819.96, 4588.21, 45.02), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_8PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_8PlantShape.destroy();
                    workFarm1_8PlantMarker.destroy();
                    workFarm1_8PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_9PlantShape = mp.colshapes.newSphere(2818.81, 4592.65, 44.98, 1.5, 0);
                    workFarm1_9PlantMarker = mp.markers.new(1, new mp.Vector3(2818.81, 4592.65, 44.98), 1, 0, true, 0)
                    workFarm1_9PlantBlip = mp.blips.new(1, new mp.Vector3(2818.81, 4592.65, 45.98), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_9PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_9PlantShape.destroy();
                    workFarm1_9PlantMarker.destroy();
                    workFarm1_9PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_10PlantShape = mp.colshapes.newSphere(2817.61, 4597.43, 44.73, 1.5, 0);
                    workFarm1_10PlantMarker = mp.markers.new(1, new mp.Vector3(2817.61, 4597.43, 44.73), 1, 0, true, 0)
                    workFarm1_10PlantBlip = mp.blips.new(1, new mp.Vector3(2817.61, 4597.43, 45.73), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_10PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_10PlantShape.destroy();
                    workFarm1_10PlantMarker.destroy();
                    workFarm1_10PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_11PlantShape = mp.colshapes.newSphere(2816.31, 4602.56, 44.83, 1.5, 0);
                    workFarm1_11PlantMarker = mp.markers.new(1, new mp.Vector3(2816.31, 4602.56, 44.83), 1, 0, true, 0)
                    workFarm1_11PlantBlip = mp.blips.new(1, new mp.Vector3(2816.31, 4602.56, 45.83), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_11PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_11PlantShape.destroy();
                    workFarm1_11PlantMarker.destroy();
                    workFarm1_11PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_12PlantShape = mp.colshapes.newSphere(2814.84, 4607.68, 44.88, 1.5, 0);
                    workFarm1_12PlantMarker = mp.markers.new(1, new mp.Vector3(2814.84, 4607.68, 44.88), 1, 0, true, 0)
                    workFarm1_12PlantBlip = mp.blips.new(1, new mp.Vector3(2814.84, 4607.68, 45.88), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_12PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_12PlantShape.destroy();
                    workFarm1_12PlantMarker.destroy();
                    workFarm1_12PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_13PlantShape = mp.colshapes.newSphere(2813.47, 4613.42, 44.67, 1.5, 0);
                    workFarm1_13PlantMarker = mp.markers.new(1, new mp.Vector3(2813.47, 4613.42, 44.67), 1, 0, true, 0)
                    workFarm1_13PlantBlip = mp.blips.new(1, new mp.Vector3(2813.47, 4613.42, 45.67), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_13PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_13PlantShape.destroy();
                    workFarm1_13PlantMarker.destroy();
                    workFarm1_13PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_14PlantShape = mp.colshapes.newSphere(2812.30, 4618.45, 44.53, 1.5, 0);
                    workFarm1_14PlantMarker = mp.markers.new(1, new mp.Vector3(2812.30, 4618.45, 44.53), 1, 0, true, 0)
                    workFarm1_14PlantBlip = mp.blips.new(1, new mp.Vector3(2812.30, 4618.45, 45.53), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
            try {
            if (shape == workFarm1_14PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_14PlantShape.destroy();
                    workFarm1_14PlantMarker.destroy();
                    workFarm1_14PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_15PlantShape = mp.colshapes.newSphere(2822.03, 4588.79, 45.26, 1.5, 0);
                    workFarm1_15PlantMarker = mp.markers.new(1, new mp.Vector3(2822.03, 4588.79, 45.26), 1, 0, true, 0)
                    workFarm1_15PlantBlip = mp.blips.new(1, new mp.Vector3(2822.03, 4588.79, 45.26), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_15PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_15PlantShape.destroy();
                    workFarm1_15PlantMarker.destroy();
                    workFarm1_15PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_16PlantShape = mp.colshapes.newSphere(2820.93, 4593.22, 45.14, 1.5, 0);
                    workFarm1_16PlantMarker = mp.markers.new(1, new mp.Vector3(2820.93, 4593.22, 45.14), 1, 0, true, 0)
                    workFarm1_16PlantBlip = mp.blips.new(1, new mp.Vector3(2820.93, 4593.22, 46.14), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_16PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_16PlantShape.destroy();
                    workFarm1_16PlantMarker.destroy();
                    workFarm1_16PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_17PlantShape = mp.colshapes.newSphere(2819.79, 4598.06, 45.11, 1.5, 0);
                    workFarm1_17PlantMarker = mp.markers.new(1, new mp.Vector3(2819.79, 4598.06, 45.11), 1, 0, true, 0)
                    workFarm1_17PlantBlip = mp.blips.new(1, new mp.Vector3(2819.79, 4598.06, 46.11), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_17PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_17PlantShape.destroy();
                    workFarm1_17PlantMarker.destroy();
                    workFarm1_17PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_18PlantShape = mp.colshapes.newSphere(2818.35, 4603.13, 45.03, 1.5, 0);
                    workFarm1_18PlantMarker = mp.markers.new(1, new mp.Vector3(2818.35, 4603.13, 45.03), 1, 0, true, 0)
                    workFarm1_18PlantBlip = mp.blips.new(1, new mp.Vector3(2818.35, 4603.13, 46.03), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_18PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_18PlantShape.destroy();
                    workFarm1_18PlantMarker.destroy();
                    workFarm1_18PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_19PlantShape = mp.colshapes.newSphere(2817.07, 4608.30, 44.98, 1.5, 0);
                    workFarm1_19PlantMarker = mp.markers.new(1, new mp.Vector3(2817.07, 4608.30, 44.98), 1, 0, true, 0)
                    workFarm1_19PlantBlip = mp.blips.new(1, new mp.Vector3(2817.07, 4608.30, 45.98), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_19PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_19PlantShape.destroy();
                    workFarm1_19PlantMarker.destroy();
                    workFarm1_19PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_20PlantShape = mp.colshapes.newSphere(2815.64, 4614.04, 44.82, 1.5, 0);
                    workFarm1_20PlantMarker = mp.markers.new(1, new mp.Vector3(2815.64, 4614.04, 44.82), 1, 0, true, 0)
                    workFarm1_20PlantBlip = mp.blips.new(1, new mp.Vector3(2815.64, 4614.04, 45.82), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){} 
        try {
            if (shape == workFarm1_20PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_20PlantShape.destroy();
                    workFarm1_20PlantMarker.destroy();
                    workFarm1_20PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    workFarm1_21PlantShape = mp.colshapes.newSphere(2814.44, 4619.13, 44.76, 1.5, 0);
                    workFarm1_21PlantMarker = mp.markers.new(1, new mp.Vector3(2814.44, 4619.13, 44.76), 1, 0, true, 0)
                    workFarm1_21PlantBlip = mp.blips.new(1, new mp.Vector3(2814.44, 4619.13, 45.76), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
                } else 
                mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){}
        try {
            if (shape == workFarm1_21PlantShape) {
                if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
                if (seeds >= 1) {
                    workFarm1_21PlantShape.destroy();
                    workFarm1_21PlantMarker.destroy();
                    workFarm1_21PlantBlip.destroy();
                    mp.events.callRemote("plantSeeds");
                    mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                    mp.events.call('playerNotify', `Вы закончили посадку семян. Направляйтесь за лейкой и полейте свои растения.`, 'yes');
                } else mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
            }
        } catch (err){}
    }
} catch (err) {}



// Поле 2 



try{
    if (field == 2) {
    try {
        if(shape == workFarm2Shape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            workFarm1Shape.destroy();
            workFarm1Marker.destroy();
            workFarm1Blip.destroy();
            //Создания 1 грядки
            workFarm1_1Shape = mp.colshapes.newSphere(2824.13, 4589.14, 45.50, 1.5, 0);
            workFarm1_1Marker = mp.markers.new(1, new mp.Vector3(2824.13, 4589.14, 45.50), 1, 0, true, 0)
            workFarm1_1Blip = mp.blips.new(1, new mp.Vector3(2824.13, 4589.14, 46.50), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        }
    } catch (err) {}

    try {
        if(shape == workFarm1_1Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок `, 'yes');
            workFarm1_1Shape.destroy();
            workFarm1_1Marker.destroy();
            workFarm1_1Blip.destroy();
            workFarm1_2Shape = mp.colshapes.newSphere(2822.87, 4593.50, 45.41, 1.5, 0);
            workFarm1_2Marker = mp.markers.new(1, new mp.Vector3(2822.87, 4593.50, 45.41), 1, 0, true, 0)
            workFarm1_2Blip = mp.blips.new(1, new mp.Vector3(2822.87, 4593.50, 46.41), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});

        }
    } catch (err) {}

    try{
        if(shape == workFarm1_2Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_2Shape.destroy();
            workFarm1_2Marker.destroy();
            workFarm1_2Blip.destroy();
            workFarm1_3Shape = mp.colshapes.newSphere(2821.80, 4598.41, 45.34, 1.5, 0);
            workFarm1_3Marker = mp.markers.new(1, new mp.Vector3(2821.80, 4598.41, 45.34), 1, 0, true, 0)
            workFarm1_3Blip = mp.blips.new(1, new mp.Vector3(2821.80, 4598.41, 45.34), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_3Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_3Shape.destroy();
            workFarm1_3Marker.destroy();
            workFarm1_3Blip.destroy();
            workFarm1_4Shape = mp.colshapes.newSphere(2820.41, 4603.59, 45.26, 1.5, 0);
            workFarm1_4Marker = mp.markers.new(1, new mp.Vector3(2820.41, 4603.59, 45.26), 1, 0, true, 0)
            workFarm1_4Blip = mp.blips.new(1, new mp.Vector3(2820.41, 4603.59, 45.26), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_4Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_4Shape.destroy();
            workFarm1_4Marker.destroy();
            workFarm1_4Blip.destroy();
            workFarm1_5Shape = mp.colshapes.newSphere(2820.41, 4603.59, 45.26, 1.5, 0);
            workFarm1_5Marker = mp.markers.new(1, new mp.Vector3(2820.41, 4603.59, 45.26), 1, 0, true, 0)
            workFarm1_5Blip = mp.blips.new(1, new mp.Vector3(2820.41, 4603.59, 46.26), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_5Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_5Shape.destroy();
            workFarm1_5Marker.destroy();
            workFarm1_5Blip.destroy();
            workFarm1_6Shape = mp.colshapes.newSphere(2817.62, 4614.50, 45.10, 1.5, 0);
            workFarm1_6Marker = mp.markers.new(1, new mp.Vector3(2817.62, 4614.50, 45.10), 1, 0, true, 0)
            workFarm1_6Blip = mp.blips.new(1, new mp.Vector3(2817.62, 4614.50, 45.10), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_6Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_6Shape.destroy();
            workFarm1_6Marker.destroy();
            workFarm1_6Blip.destroy();
            workFarm1_7Shape = mp.colshapes.newSphere(2816.30, 4619.53, 44.96, 1.5, 0);
            workFarm1_7Marker = mp.markers.new(1, new mp.Vector3(2816.30, 4619.53, 44.96), 1, 0, true, 0)
            workFarm1_7Blip = mp.blips.new(1, new mp.Vector3(2816.30, 4619.53, 45.96), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_7Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_7Shape.destroy();
            workFarm1_7Marker.destroy();
            workFarm1_7Blip.destroy();
            workFarm1_8Shape = mp.colshapes.newSphere(2825.91, 4589.53, 45.64, 1.5, 0);
            workFarm1_8Marker = mp.markers.new(1, new mp.Vector3(2825.91, 4589.53, 45.64), 1, 0, true, 0)
            workFarm1_8Blip = mp.blips.new(1, new mp.Vector3(2825.91, 4589.53, 46.64), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_8Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_8Shape.destroy();
            workFarm1_8Marker.destroy();
            workFarm1_8Blip.destroy();
            workFarm1_9Shape = mp.colshapes.newSphere(2824.81, 4593.96, 45.58, 1.5, 0);
            workFarm1_9Marker = mp.markers.new(1, new mp.Vector3(2824.81, 4593.96, 45.58), 1, 0, true, 0)
            workFarm1_9Blip = mp.blips.new(1, new mp.Vector3(2824.81, 4593.96, 45.58), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_9Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_9Shape.destroy();
            workFarm1_9Marker.destroy();
            workFarm1_9Blip.destroy();
            workFarm1_10Shape = mp.colshapes.newSphere(2823.82, 4598.71, 45.46, 1.5, 0);
            workFarm1_10Marker = mp.markers.new(1, new mp.Vector3(2823.82, 4598.71, 45.46), 1, 0, true, 0)
            workFarm1_10Blip = mp.blips.new(1, new mp.Vector3(2823.82, 4598.71, 45.46), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_10Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_10Shape.destroy();
            workFarm1_10Marker.destroy();
            workFarm1_10Blip.destroy();
            workFarm1_11Shape = mp.colshapes.newSphere(2822.29, 4603.82, 45.41, 1.5, 0);
            workFarm1_11Marker = mp.markers.new(1, new mp.Vector3(2822.29, 4603.82, 45.41), 1, 0, true, 0)
            workFarm1_11Blip = mp.blips.new(1, new mp.Vector3(2822.29, 4603.82, 45.41), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_11Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_11Shape.destroy();
            workFarm1_11Marker.destroy();
            workFarm1_11Blip.destroy();
            workFarm1_12Shape = mp.colshapes.newSphere(2822.37, 4604.02, 45.42, 1.5, 0);
            workFarm1_12Marker = mp.markers.new(1, new mp.Vector3(2822.37, 4604.02, 45.42), 1, 0, true, 0)
            workFarm1_12Blip = mp.blips.new(1, new mp.Vector3(2822.37, 4604.02, 45.42), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_12Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_12Shape.destroy();
            workFarm1_12Marker.destroy();
            workFarm1_12Blip.destroy();
            workFarm1_13Shape = mp.colshapes.newSphere(2819.48, 4615.01, 45.31, 1.5, 0);
            workFarm1_13Marker = mp.markers.new(1, new mp.Vector3(2819.48, 4615.01, 45.31), 1, 0, true, 0)
            workFarm1_13Blip = mp.blips.new(1, new mp.Vector3(2819.48, 4615.01, 45.31), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_13Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_13Shape.destroy();
            workFarm1_13Marker.destroy();
            workFarm1_13Blip.destroy();
            workFarm1_14Shape = mp.colshapes.newSphere(2818.21, 4620.12, 45.17, 1.5, 0);
            workFarm1_14Marker = mp.markers.new(1, new mp.Vector3(2818.21, 4620.12, 45.17), 1, 0, true, 0)
            workFarm1_14Blip = mp.blips.new(1, new mp.Vector3(2818.21, 4620.12, 45.17), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_14Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_14Shape.destroy();
            workFarm1_14Marker.destroy();
            workFarm1_14Blip.destroy();
            workFarm1_15Shape = mp.colshapes.newSphere(2828.10, 4590.04, 45.73, 1.5, 0);
            workFarm1_15Marker = mp.markers.new(1, new mp.Vector3(2828.10, 4590.04, 45.73), 1, 0, true, 0)
            workFarm1_15Blip = mp.blips.new(1, new mp.Vector3(2828.10, 4590.04, 45.73), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_15Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_15Shape.destroy();
            workFarm1_15Marker.destroy();
            workFarm1_15Blip.destroy();
            workFarm1_16Shape = mp.colshapes.newSphere(2826.73, 4594.45, 45.61, 1.5, 0);
            workFarm1_16Marker = mp.markers.new(1, new mp.Vector3(2826.73, 4594.45, 45.61), 1, 0, true, 0)
            workFarm1_16Blip = mp.blips.new(1, new mp.Vector3(2826.73, 4594.45, 46.61), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_16Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_16Shape.destroy();
            workFarm1_16Marker.destroy();
            workFarm1_16Blip.destroy();
            workFarm1_17Shape = mp.colshapes.newSphere(2825.71, 4599.15, 45.50, 1.5, 0);
            workFarm1_17Marker = mp.markers.new(1, new mp.Vector3(2825.71, 4599.15, 45.50), 1, 0, true, 0)
            workFarm1_17Blip = mp.blips.new(1, new mp.Vector3(2825.71, 4599.15, 45.50), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_17Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_17Shape.destroy();
            workFarm1_17Marker.destroy();
            workFarm1_17Blip.destroy();
            workFarm1_18Shape = mp.colshapes.newSphere(2824.40, 4604.13, 45.50, 1.5, 0);
            workFarm1_18Marker = mp.markers.new(1, new mp.Vector3(2824.40, 4604.13, 45.50), 1, 0, true, 0)
            workFarm1_18Blip = mp.blips.new(1, new mp.Vector3(2824.40, 4604.13, 46.50), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_18Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_18Shape.destroy();
            workFarm1_18Marker.destroy();
            workFarm1_18Blip.destroy();
            workFarm1_19Shape = mp.colshapes.newSphere(2824.27, 4604.42, 45.50, 1.5, 0);
            workFarm1_19Marker = mp.markers.new(1, new mp.Vector3(2824.27, 4604.42, 45.50), 1, 0, true, 0)
            workFarm1_19Blip = mp.blips.new(1, new mp.Vector3(2824.27, 4604.42, 46.50), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_19Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_19Shape.destroy();
            workFarm1_19Marker.destroy();
            workFarm1_19Blip.destroy();
            workFarm1_20Shape = mp.colshapes.newSphere(2821.50, 4615.57, 45.44, 1.5, 0);
            workFarm1_20Marker = mp.markers.new(1, new mp.Vector3(2821.50, 4615.57, 45.44), 1, 0, true, 0)
            workFarm1_20Blip = mp.blips.new(1, new mp.Vector3(2821.50, 4615.57, 46.44), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}
    try{
        if(shape == workFarm1_20Shape) {
            hole += 1;
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            workFarm1_20Shape.destroy();
            workFarm1_20Marker.destroy();
            workFarm1_20Blip.destroy();
            workFarm1_21Shape = mp.colshapes.newSphere(2820.21, 4620.74, 45.37, 1.5, 0);
            workFarm1_21Marker = mp.markers.new(1, new mp.Vector3(2820.21, 4620.74, 45.37), 1, 0, true, 0)
            workFarm1_21Blip = mp.blips.new(1, new mp.Vector3(2820.21, 4620.74, 45.37), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
        } 
    } catch (err) {}

    //Засадка семян 

    try {
        if (shape == workFarm1_21Shape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            workFarm1_21Shape.destroy();
            workFarm1_21Marker.destroy();
            workFarm1_21Blip.destroy();
            mp.events.call('playerNotify', `Вы выкопали в ${hole}/21 лунок`, 'yes');
            mp.events.call('playerNotify', `Вы выкопали все лунки`, 'yes');
            mp.events.call('playerNotify', `Направляйтесь к фермеру Бену и купите у него семян для посадки`, 'yes');
            hole = 0;
            workFarm1_1PlantShape = mp.colshapes.newSphere(2824.13, 4589.14, 45.50, 1.5, 0);
            workFarm1_1PlantMarker = mp.markers.new(1, new mp.Vector3(2824.13, 4589.14, 45.50), 1, 0, true, 0)
            workFarm1_1PlantBlip = mp.blips.new(1, new mp.Vector3(2824.13, 4589.14, 45.50), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
    }
    } catch (err){} 
    try {
        if (shape == workFarm1_1PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_1PlantShape.destroy();
                workFarm1_1PlantMarker.destroy();
                workFarm1_1PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_2PlantShape = mp.colshapes.newSphere(2822.87, 4593.50, 45.41, 1.5, 0);
                workFarm1_2PlantMarker = mp.markers.new(1, new mp.Vector3(2822.87, 4593.50, 45.41), 1, 0, true, 0)
                workFarm1_2PlantBlip = mp.blips.new(1, new mp.Vector3(2822.87, 4593.50, 45.41), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_2PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_2PlantShape.destroy();
                workFarm1_2PlantMarker.destroy();
                workFarm1_2PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_3PlantShape = mp.colshapes.newSphere(2821.80, 4598.41, 45.34, 1.5, 0);
                workFarm1_3PlantMarker = mp.markers.new(1, new mp.Vector3(2821.80, 4598.41, 45.34), 1, 0, true, 0)
                workFarm1_3PlantBlip = mp.blips.new(1, new mp.Vector3(2821.80, 4598.41, 46.34), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_3PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_3PlantShape.destroy();
                workFarm1_3PlantMarker.destroy();
                workFarm1_3PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_4PlantShape = mp.colshapes.newSphere(2820.41, 4603.59, 45.26, 1.5, 0);
                workFarm1_4PlantMarker = mp.markers.new(1, new mp.Vector3(2820.41, 4603.59, 45.26), 1, 0, true, 0)
                workFarm1_4PlantBlip = mp.blips.new(1, new mp.Vector3(2820.41, 4603.59, 46.26), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_4PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_4PlantShape.destroy();
                workFarm1_4PlantMarker.destroy();
                workFarm1_4PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_5PlantShape = mp.colshapes.newSphere(2820.41, 4603.59, 45.26, 1.5, 0);
                workFarm1_5PlantMarker = mp.markers.new(1, new mp.Vector3(2820.41, 4603.59, 45.26), 1, 0, true, 0)
                workFarm1_5PlantBlip = mp.blips.new(1, new mp.Vector3(2820.41, 4603.59, 46.26), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_5PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_5PlantShape.destroy();
                workFarm1_5PlantMarker.destroy();
                workFarm1_5PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_6PlantShape = mp.colshapes.newSphere(2817.62, 4614.50, 45.10, 1.5, 0);
                workFarm1_6PlantMarker = mp.markers.new(1, new mp.Vector3(2817.62, 4614.50, 45.10), 1, 0, true, 0)
                workFarm1_6PlantBlip = mp.blips.new(1, new mp.Vector3(2817.62, 4614.50, 45.10), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_6PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_6PlantShape.destroy();
                workFarm1_6PlantMarker.destroy();
                workFarm1_6PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_7PlantShape = mp.colshapes.newSphere(2816.30, 4619.53, 44.96, 1.5, 0);
                workFarm1_7PlantMarker = mp.markers.new(1, new mp.Vector3(2816.30, 4619.53, 44.96), 1, 0, true, 0)
                workFarm1_7PlantBlip = mp.blips.new(1, new mp.Vector3(2816.30, 4619.53, 45.96), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_7PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_7PlantShape.destroy();
                workFarm1_7PlantMarker.destroy();
                workFarm1_7PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_8PlantShape = mp.colshapes.newSphere(2825.91, 4589.53, 45.64, 1.5, 0);
                workFarm1_8PlantMarker = mp.markers.new(1, new mp.Vector3(2825.91, 4589.53, 45.64), 1, 0, true, 0)
                workFarm1_8PlantBlip = mp.blips.new(1, new mp.Vector3(2825.91, 4589.53, 46.64), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_8PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_8PlantShape.destroy();
                workFarm1_8PlantMarker.destroy();
                workFarm1_8PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_9PlantShape = mp.colshapes.newSphere(2824.81, 4593.96, 45.58, 1.5, 0);
                workFarm1_9PlantMarker = mp.markers.new(1, new mp.Vector3(2824.81, 4593.96, 45.58), 1, 0, true, 0)
                workFarm1_9PlantBlip = mp.blips.new(1, new mp.Vector3(2824.81, 4593.96, 45.58), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_9PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_9PlantShape.destroy();
                workFarm1_9PlantMarker.destroy();
                workFarm1_9PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_10PlantShape = mp.colshapes.newSphere(2823.82, 4598.71, 45.46, 1.5, 0);
                workFarm1_10PlantMarker = mp.markers.new(1, new mp.Vector3(2823.82, 4598.71, 45.46), 1, 0, true, 0)
                workFarm1_10PlantBlip = mp.blips.new(1, new mp.Vector3(2823.82, 4598.71, 46.46), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_10PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_10PlantShape.destroy();
                workFarm1_10PlantMarker.destroy();
                workFarm1_10PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_11PlantShape = mp.colshapes.newSphere(2822.29, 4603.82, 45.41, 1.5, 0);
                workFarm1_11PlantMarker = mp.markers.new(1, new mp.Vector3(2822.29, 4603.82, 45.41), 1, 0, true, 0)
                workFarm1_11PlantBlip = mp.blips.new(1, new mp.Vector3(2822.29, 4603.82, 46.41), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_11PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_11PlantShape.destroy();
                workFarm1_11PlantMarker.destroy();
                workFarm1_11PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_12PlantShape = mp.colshapes.newSphere(2822.37, 4604.02, 45.42, 1.5, 0);
                workFarm1_12PlantMarker = mp.markers.new(1, new mp.Vector3(2822.37, 4604.02, 45.42), 1, 0, true, 0)
                workFarm1_12PlantBlip = mp.blips.new(1, new mp.Vector3(2822.37, 4604.02, 46.42), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_12PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_12PlantShape.destroy();
                workFarm1_12PlantMarker.destroy();
                workFarm1_12PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_13PlantShape = mp.colshapes.newSphere(2819.48, 4615.01, 45.31, 1.5, 0);
                workFarm1_13PlantMarker = mp.markers.new(1, new mp.Vector3(2819.48, 4615.01, 45.31), 1, 0, true, 0)
                workFarm1_13PlantBlip = mp.blips.new(1, new mp.Vector3(2819.48, 4615.01, 46.31), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_13PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_13PlantShape.destroy();
                workFarm1_13PlantMarker.destroy();
                workFarm1_13PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_14PlantShape = mp.colshapes.newSphere(2818.21, 4620.12, 45.17, 1.5, 0);
                workFarm1_14PlantMarker = mp.markers.new(1, new mp.Vector3(2818.21, 4620.12, 45.17), 1, 0, true, 0)
                workFarm1_14PlantBlip = mp.blips.new(1, new mp.Vector3(2818.21, 4620.12, 46.17), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
        try {
        if (shape == workFarm1_14PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_14PlantShape.destroy();
                workFarm1_14PlantMarker.destroy();
                workFarm1_14PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_15PlantShape = mp.colshapes.newSphere(2828.10, 4590.04, 45.73, 1.5, 0);
                workFarm1_15PlantMarker = mp.markers.new(1, new mp.Vector3(2828.10, 4590.04, 45.73), 1, 0, true, 0)
                workFarm1_15PlantBlip = mp.blips.new(1, new mp.Vector3(2828.10, 4590.04, 46.73), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_15PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_15PlantShape.destroy();
                workFarm1_15PlantMarker.destroy();
                workFarm1_15PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_16PlantShape = mp.colshapes.newSphere(2826.73, 4594.45, 45.61, 1.5, 0);
                workFarm1_16PlantMarker = mp.markers.new(1, new mp.Vector3(2826.73, 4594.45, 45.61), 1, 0, true, 0)
                workFarm1_16PlantBlip = mp.blips.new(1, new mp.Vector3(2826.73, 4594.45, 45.61), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_16PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_16PlantShape.destroy();
                workFarm1_16PlantMarker.destroy();
                workFarm1_16PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_17PlantShape = mp.colshapes.newSphere(2825.71, 4599.15, 45.50, 1.5, 0);
                workFarm1_17PlantMarker = mp.markers.new(1, new mp.Vector3(2825.71, 4599.15, 45.50), 1, 0, true, 0)
                workFarm1_17PlantBlip = mp.blips.new(1, new mp.Vector3(2825.71, 4599.15, 46.50), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_17PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_17PlantShape.destroy();
                workFarm1_17PlantMarker.destroy();
                workFarm1_17PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_18PlantShape = mp.colshapes.newSphere(2824.40, 4604.13, 45.50, 1.5, 0);
                workFarm1_18PlantMarker = mp.markers.new(1, new mp.Vector3(2824.40, 4604.13, 45.50), 1, 0, true, 0)
                workFarm1_18PlantBlip = mp.blips.new(1, new mp.Vector3(2824.40, 4604.13, 46.50), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_18PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_18PlantShape.destroy();
                workFarm1_18PlantMarker.destroy();
                workFarm1_18PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_19PlantShape = mp.colshapes.newSphere(2824.27, 4604.42, 45.50, 1.5, 0);
                workFarm1_19PlantMarker = mp.markers.new(1, new mp.Vector3(2824.27, 4604.42, 45.50), 1, 0, true, 0)
                workFarm1_19PlantBlip = mp.blips.new(1, new mp.Vector3(2824.27, 4604.42, 46.50), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_19PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_19PlantShape.destroy();
                workFarm1_19PlantMarker.destroy();
                workFarm1_19PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_20PlantShape = mp.colshapes.newSphere(2821.50, 4615.57, 45.44, 1.5, 0);
                workFarm1_20PlantMarker = mp.markers.new(1, new mp.Vector3(2821.50, 4615.57, 45.44), 1, 0, true, 0)
                workFarm1_20PlantBlip = mp.blips.new(1, new mp.Vector3(2821.50, 4615.57, 46.44), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){} 
    try {
        if (shape == workFarm1_20PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_20PlantShape.destroy();
                workFarm1_20PlantMarker.destroy();
                workFarm1_20PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                workFarm1_21PlantShape = mp.colshapes.newSphere(2820.21, 4620.74, 46.37, 1.5, 0);
                workFarm1_21PlantMarker = mp.markers.new(1, new mp.Vector3(2820.21, 4620.74, 46.37), 1, 0, true, 0)
                workFarm1_21PlantBlip = mp.blips.new(1, new mp.Vector3(2820.21, 4620.74, 46.37), {name: 'Лунка', scale: 0.5, shortRange: false, dimension: 0});
            } else 
            mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){}
    try {
        if (shape == workFarm1_21PlantShape) {
            if (player.vehicle) return mp.events.call('playerNotify', `Выйдите из машины`, 'no');
            if (seeds >= 1) {
                workFarm1_21PlantShape.destroy();
                workFarm1_21PlantMarker.destroy();
                workFarm1_21PlantBlip.destroy();
                mp.events.callRemote("plantSeeds");
                mp.events.call('playerNotify', `Вы посадили ${seedsName}`, 'yes');
                mp.events.call('playerNotify', `Вы закончили посадку семян. Направляйтесь за лейкой и полейте свои растения.`, 'yes');
            } else mp.events.call('playerNotify', `У вас нет семян купите их у фермера Бена!`, 'no');
        }
    } catch (err){}
    }
} catch (err) {}
});

mp.events.add('farmWorkStart', createWorkMarker);
