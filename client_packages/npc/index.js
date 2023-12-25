// LSPD 

let pedLSPD = mp.peds.new(
    mp.game.joaat('s_m_y_cop_01'), 
    new mp.Vector3(441.11, -978.64, 30.68),
    180.0,
    mp.players.local.dimension
);

pedLSPD.freezePosition (true);

mp.labels.new("Генри", new mp.Vector3(441.11, -978.64, 31.6),
{
    los: false,
    font: 0,
    drawDistance: 2,
    color: [255, 255, 255, 255],
    dimension: 0,
}) 


mp.labels.new("Нажмите Е", new mp.Vector3(441.36, -981.03, 30.70),
{
    los: false,
    font: 0,
    drawDistance: 0.5,
    color: [255, 255, 255, 255], 
    dimension: 0,
});


//Farm1

let pedFarm1 = mp.peds.new(
    mp.game.joaat('a_m_m_farmer_01'), 
    new mp.Vector3(2833.05, 4571.37, 46.55),
    -170.0,
    mp.players.local.dimension
);

pedFarm1.freezePosition (true);

mp.labels.new("Бен", new mp.Vector3(2833.05, 4571.37, 47.55),
{
    los: false,
    font: 0,
    drawDistance: 4,
    color: [255, 255, 255, 255],
    dimension: 0,
}) 


mp.labels.new("Нажмите Е", new mp.Vector3(2833.16, 4570.82, 46.55),
{
    los: false,
    font: 0,
    drawDistance: 2,
    color: [255, 255, 255, 255], 
    dimension: 0,
});




// 24/7 


let pedShop1 = mp.peds.new(
    mp.game.joaat('a_f_y_eastsa_03'),
    new mp.Vector3(372.59, 326.42, 103.56),
    -90,
    mp.players.local.dimension
)
pedShop1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(373.85, 326.16, 103.56),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop2 = mp.peds.new(
    mp.game.joaat('s_m_m_autoshop_01'),
    new mp.Vector3(1165.07, -324.47, 69.20),
    96.74,
    mp.players.local.dimension
)
pedShop2.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1163.50, -323.96, 69.21),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})
let pedShop3 = mp.peds.new(
    mp.game.joaat('ig_g'),
    new mp.Vector3(1134.18, -982.71, 46.41),
    -84.07,
    mp.players.local.dimension
)
pedShop3.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1136.01, -982.88, 46.42),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop4 = mp.peds.new(
    mp.game.joaat('a_m_m_mexlabor_01'),
    new mp.Vector3(24.25, -1347.23, 29.49),
    -85.02,
    mp.players.local.dimension
)
pedShop4.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(25.75, -1347.61, 29.49),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop5 = mp.peds.new(
    mp.game.joaat('a_m_y_runner_02'),
    new mp.Vector3(-47.31, -1759.04, 29.42),
    45.0,
    mp.players.local.dimension
)
pedShop5.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-48.58, -1757.98, 29.42),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop6 = mp.peds.new(
    mp.game.joaat('cs_stretch'),
    new mp.Vector3(-705.85, -914.77, 19.21),
    91.52,
    mp.players.local.dimension
)
pedShop6.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-707.59, -914.76, 19.21),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop7 = mp.peds.new(
    mp.game.joaat('csb_undercover'),
    new mp.Vector3(1727.72, 6415.10, 35.03),
    -119.81,
    mp.players.local.dimension
)
pedShop7.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1728.80, 6414.06, 35.03),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop8 = mp.peds.new(
    mp.game.joaat('a_f_y_vinewood_01'),
    new mp.Vector3(-1221.48, -908.28, 12.32),
    45.0,
    mp.players.local.dimension
)
pedShop8.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-1222.54, -906.50, 12.33),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop9 = mp.peds.new(
    mp.game.joaat('a_m_y_vinewood_01'),
    new mp.Vector3(-1486.58, -377.51, 40.16),
    133.43,
    mp.players.local.dimension
)
pedShop9.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-1487.85, -378.85, 40.16),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop10 = mp.peds.new(
    mp.game.joaat('a_f_y_vinewood_02'),
    new mp.Vector3(-1819.60, 793.83, 138.08),
    135.24,
    mp.players.local.dimension
)
pedShop10.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-1820.50, 792.50, 138.11),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop11 = mp.peds.new(
    mp.game.joaat('ig_tonya'),
    new mp.Vector3(2557.43, 380.58, 108.62),
    -0.82,
    mp.players.local.dimension
)
pedShop11.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(2557.50, 382.24, 108.62),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop12 = mp.peds.new(
    mp.game.joaat('cs_tomepsilon'),
    new mp.Vector3(-2966.15, 391.41, 15.04),
    87.71,
    mp.players.local.dimension
)
pedShop12.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-2968.18, 391.39, 15.04),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop13 = mp.peds.new(
    mp.game.joaat('a_f_m_tourist_01'),
    new mp.Vector3(1697.00, 4923.44, 42.06),
    -36.20,
    mp.players.local.dimension
)
pedShop13.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1697.88, 4924.67, 42.06),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop14 = mp.peds.new(
    mp.game.joaat('csb_popov'),
    new mp.Vector3(1960.12, 3739.72, 32.34),
    -66.10,
    mp.players.local.dimension
)
pedShop14.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1961.48, 3740.48, 32.34),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})
let pedShop15 = mp.peds.new(
    mp.game.joaat('g_m_y_armgoon_02'),
    new mp.Vector3(2678.38, 3279.09, 55.24),
    -25.77,
    mp.players.local.dimension
)
pedShop15.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(2679.05, 3280.48,55.24),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop16 = mp.peds.new(
    mp.game.joaat('cs_denise'),
    new mp.Vector3(-3241.94, 999.94, 12.83),
    -5.44,
    mp.players.local.dimension
)
pedShop16.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-3241.67, 1001.39, 12.83),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop17 = mp.peds.new(
    mp.game.joaat('csb_denise_friend'),
    new mp.Vector3(1392.47, 3606.36, 34.98),
    -156.68,
    mp.players.local.dimension
)
pedShop17.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1392.91, 3604.87, 34.98),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop18 = mp.peds.new(
    mp.game.joaat('a_f_m_eastsa_01'),
    new mp.Vector3(1165.64, 2710.88, 38.15),
    179.73,
    mp.players.local.dimension
)
pedShop18.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1165.60, 2709.07, 38.16),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedShop19 = mp.peds.new(
    mp.game.joaat('a_m_y_epsilon_01'),
    new mp.Vector3(549.02, 2671.72, 42.15),
    101.96,
    mp.players.local.dimension
)
pedShop19.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(547.53, 2671.54, 42.15),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})
let pedShop20 = mp.peds.new(
    mp.game.joaat('a_m_y_epsilon_02'),
    new mp.Vector3(-3038.59, 584.64, 7.90),
    20.04,
    mp.players.local.dimension
)
pedShop20.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-3039.21, 585.99, 7.91),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})




// ТАТУ
let pedTatuShop1 = mp.peds.new(
    mp.game.joaat('player_one'),
    new mp.Vector3(-3170.47, 1072.97, 20.82),
    -29.0,
    mp.players.local.dimension
)
pedTatuShop1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-3170.97,1076.13, 20.83),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedTatuShop2 = mp.peds.new(
    mp.game.joaat('player_one'),
    new mp.Vector3(-292.11, 6199.64, 31.49),
    -142.21,
    mp.players.local.dimension
)
pedTatuShop2.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-294.40, 6200.60, 31.49),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedTatuShop3 = mp.peds.new(
    mp.game.joaat('player_one'),
    new mp.Vector3(1862.49, 3748.45, 33.05),
    26.84,
    mp.players.local.dimension
)
pedTatuShop3.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1864.67, 3747.07, 33.03),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedTatuShop4 = mp.peds.new(
    mp.game.joaat('player_one'),
    new mp.Vector3(1324.65, -1650.41, 52.28),
    123.94,
    mp.players.local.dimension
)
pedTatuShop4.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1323.42, -1653.11, 52.28),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedTatuShop5 = mp.peds.new(
    mp.game.joaat('player_one'),
    new mp.Vector3(319.85, 181.16, 103.59),
    -112.81,
    mp.players.local.dimension
)
pedTatuShop5.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(322.87, 181.33, 103.59),
{
    los: false,
    font: 0,
    drawDistance: 0.75,
    color: [255, 255, 255, 255],
    dimension: 0,
})



//БАРБЕРШОП

let pedBarbshop1 = mp.peds.new(
    mp.game.joaat('a_f_m_ktown_02'),
    new mp.Vector3(-30.90, -151.79, 57.08),
    -11.48,
    mp.players.local.dimension
)
pedBarbshop1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-33.41, -149.51, 57.08),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedBarbshop2 = mp.peds.new(
    mp.game.joaat('a_f_m_ktown_02'),
    new mp.Vector3(1930.91, 3728.14, 32.84),
    -140.42,
    mp.players.local.dimension
)
pedBarbshop2.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1934.13, 3728.65, 32.85),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedBarbshop3 = mp.peds.new(
    mp.game.joaat('a_f_m_ktown_02'),
    new mp.Vector3(-278.00, 6230.35, 31.70),
    49.52,
    mp.players.local.dimension
)
pedBarbshop3.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-281.01, 6229.09, 31.70),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedBarbshop4 = mp.peds.new(
    mp.game.joaat('a_f_m_ktown_02'),
    new mp.Vector3(-1284.18, -1115.29, 6.99),
    89.10,
    mp.players.local.dimension
)
pedBarbshop4.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-1285.33, -1118.42, 6.99),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedBarbshop5 = mp.peds.new(
    mp.game.joaat('a_f_m_ktown_02'),
    new mp.Vector3(-821.99, -183.20, 37.57),
    -157.16,
    mp.players.local.dimension
)
pedBarbshop5.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-816.80, -183.82, 37.57),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})
let pedBarbshop6 = mp.peds.new(
    mp.game.joaat('a_f_m_ktown_02'),
    new mp.Vector3(1211.49, -470.77, 66.21),
    68.28,
    mp.players.local.dimension
)
pedBarbshop6.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1209.49, -473.39, 66.21),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})



// Премиальные магазины одежды


let pedPrimeClothesShop1 = mp.peds.new(
    mp.game.joaat('a_f_y_business_01'),
    new mp.Vector3(-164.99, -303.00, 39.73),
    -108.70,
    mp.players.local.dimension
)
pedPrimeClothesShop1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-163.37, -303.58, 39.73 ),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedPrimeClothesShop2 = mp.peds.new(
    mp.game.joaat('a_f_y_business_01'),
    new mp.Vector3(-1448.74, -237.90, 49.81),
    50.51,
    mp.players.local.dimension
)
pedPrimeClothesShop2.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-1449.91, -236.82, 49.81),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedPrimeClothesShop3 = mp.peds.new(
    mp.game.joaat('a_f_y_business_01'),
    new mp.Vector3(-709.03, -151.58, 37.42),
    121.85,
    mp.players.local.dimension
)
pedPrimeClothesShop3.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-710.50, -152.40, 37.42),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})





// БАНК 


let pedBank1 = mp.peds.new(
    mp.game.joaat('a_m_y_business_02'),
    new mp.Vector3(149.58, -1042.21, 29.36),
    -22.53,
    mp.players.local.dimension
)
pedBank1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(149.83, -1040.71, 29.37),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank1_1 = mp.peds.new(
    mp.game.joaat('a_f_y_business_02'),
    new mp.Vector3(148.07, -1041.64, 29.36),
    -22.53,
    mp.players.local.dimension
)
pedBank1_1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(148.49, -1040.16, 29.37),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank2 = mp.peds.new(
    mp.game.joaat('a_m_y_business_02'),
    new mp.Vector3(-1211.90, -332.01, 37.78),
    32.14,
    mp.players.local.dimension
)
pedBank2.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-1214.03, -330.99, 37.79),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank2_1 = mp.peds.new(
    mp.game.joaat('a_f_y_business_02'),
    new mp.Vector3(-1213.22, -332.60, 37.78),
    32.14,
    mp.players.local.dimension
)
pedBank2_1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-1212.73, -330.51, 37.78),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank3 = mp.peds.new(
    mp.game.joaat('a_m_y_business_02'),
    new mp.Vector3(313.91, -280.47, 54.16),
    -20.07,
    mp.players.local.dimension
)
pedBank3.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(314.12, -279.14, 54.17),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank3_1 = mp.peds.new(
    mp.game.joaat('a_f_y_business_02'),
    new mp.Vector3(312.40, -279.94, 54.16),
    -20.07,
    mp.players.local.dimension
)
pedBank3_1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(312.79, -278.52, 54.17),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank4 = mp.peds.new(
    mp.game.joaat('a_m_y_business_02'),
    new mp.Vector3(-351.34, -51.31, 49.03),
    -19.56,
    mp.players.local.dimension
)
pedBank4.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-351.04, -49.97, 49.04),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank4_1 = mp.peds.new(
    mp.game.joaat('a_f_y_business_02'),
    new mp.Vector3(-352.69, -50.80, 49.03),
    -19.56,
    mp.players.local.dimension
)
pedBank4_1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-352.42, -49.44, 49.04),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank5 = mp.peds.new(
    mp.game.joaat('a_m_y_business_02'),
    new mp.Vector3(-2961.11, 482.99, 15.69),
    -265.0,
    mp.players.local.dimension
)
pedBank5.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-2962.94, 482.90, 15.70),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank5_1 = mp.peds.new(
    mp.game.joaat('a_f_y_business_02'),
    new mp.Vector3(-2961.14, 481.54, 15.69),
    -265.0,
    mp.players.local.dimension
)
pedBank5_1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-2963.06, 481.41, 15.70),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})



let pedBank6 = mp.peds.new(
    mp.game.joaat('a_m_y_business_02'),
    new mp.Vector3(1174.99, 2708.28, 38.09),
    -177.0,
    mp.players.local.dimension
)
pedBank6.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1174.90, 27.06, 38.09),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank6_1 = mp.peds.new(
    mp.game.joaat('a_f_y_business_02'),
    new mp.Vector3(1176.52, 2708.24, 38.09),
    -177.0,
    mp.players.local.dimension
)
pedBank6_1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1176.42, 2706.67, 38.10),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank7 = mp.peds.new(
    mp.game.joaat('a_m_y_business_02'),
    new mp.Vector3(241.81, 226.95, 106.29),
    160.0,
    mp.players.local.dimension
)
pedBank7.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(241.43, 225.36, 106.29),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank7_1 = mp.peds.new(
    mp.game.joaat('a_f_y_business_02'),
    new mp.Vector3(243.66, 226.33, 106.29),
    160.0,
    mp.players.local.dimension
)
pedBank7_1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(243.28, 224.76, 106.29),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank7_2 = mp.peds.new(
    mp.game.joaat('a_m_y_business_02'),
    new mp.Vector3(246.95, 225.03, 106.29),
    160.0,
    mp.players.local.dimension
)
pedBank7_2.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(246.55, 223.56, 106.29),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank7_3 = mp.peds.new(
    mp.game.joaat('a_f_y_business_02'),
    new mp.Vector3(248.77, 224.47, 106.29),
    160.0,
    mp.players.local.dimension
)
pedBank7_3.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(248.45, 222.90, 106.29),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank7_4 = mp.peds.new(
    mp.game.joaat('a_m_y_business_02'),
    new mp.Vector3(252.14, 223.17, 106.29),
    160.0,
    mp.players.local.dimension
)
pedBank7_4.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(251.70, 221.65, 106.29),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank7_5 = mp.peds.new(
    mp.game.joaat('a_f_y_business_02'),
    new mp.Vector3(254.04, 222.51, 106.29),
    160.0,
    mp.players.local.dimension
)
pedBank7_5.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(253.56, 220.99, 106.29),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedBank8 = mp.peds.new(
    mp.game.joaat('a_f_y_business_02'),
    new mp.Vector3(-110.13, 6468.90, 31.63),
    134.0,
    mp.players.local.dimension
)
pedBank8.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-110.95, 6468.18, 31.63),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank8_1 = mp.peds.new(
    mp.game.joaat('a_m_y_business_02'),
    new mp.Vector3(-111.21, 6469.98, 31.63),
    134.0,
    mp.players.local.dimension
)
pedBank8_1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-112.08, 6469.18, 31.63),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})


let pedBank8_2 = mp.peds.new(
    mp.game.joaat('a_f_y_business_02'),
    new mp.Vector3(-112.30, 6471.07, 31.63),
    134.0,
    mp.players.local.dimension
)
pedBank8_2.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-112.99, 6470.19, 31.63),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})




//Ганшопы 


let pedGunshop1 = mp.peds.new(
    mp.game.joaat('csb_mp_agent14'),
    new mp.Vector3(810.03, -2159.33, 29.62),
    -3.24,
    mp.players.local.dimension
)
pedGunshop1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(809.77, -2157.53, 29.62),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedGunshop5 = mp.peds.new(
    mp.game.joaat('csb_mp_agent14'),
    new mp.Vector3(253.54, -51.39, 69.94),
    69.87,
    mp.players.local.dimension
)
pedGunshop5.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(252.24, -50.51, 69.94),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedGunshop2 = mp.peds.new(
    mp.game.joaat('csb_mp_agent14'),
    new mp.Vector3(23.56, -1105.81, 29.80),
    161.32,
    mp.players.local.dimension
)
pedGunshop2.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(22.57, -1107.09, 29.80),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedGunshop4 = mp.peds.new(
    mp.game.joaat('csb_mp_agent14'),
    new mp.Vector3(-1304.31, -395.57, 36.70),
    74.75,
    mp.players.local.dimension
)
pedGunshop4.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-1305.76, -394.83, 36.70),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedGunshop3 = mp.peds.new(
    mp.game.joaat('csb_mp_agent14'),
    new mp.Vector3(-661.39, -933.52, 21.83),
    176.44,
    mp.players.local.dimension
)
pedGunshop3.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-661.78, -935.07, 21.83),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedGunshop6 = mp.peds.new(
    mp.game.joaat('csb_mp_agent14'),
    new mp.Vector3(2566.94, 292.59, 108.73),
    -0.13,
    mp.players.local.dimension
)
pedGunshop6.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(2567.44, 294.14, 108.73),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedGunshop7 = mp.peds.new(
    mp.game.joaat('csb_mp_agent14'),
    new mp.Vector3(-3173.16, 1089.29, 20.84),
    -120.80,
    mp.players.local.dimension
)
pedGunshop7.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-3171.93, 1088.29, 20.84),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedGunshop8 = mp.peds.new(
    mp.game.joaat('csb_mp_agent14'),
    new mp.Vector3(-1118.28, 2700.40, 18.55),
    -138.15,
    mp.players.local.dimension
)
pedGunshop8.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-1117.54, 2698.97, 18.55),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedGunshop9 = mp.peds.new(
    mp.game.joaat('csb_mp_agent14'),
    new mp.Vector3(1692.92, 3761.74, 34.71),
    -138.35,
    mp.players.local.dimension
)
pedGunshop9.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1693.75, 3760.35, 34.71),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedGunshop10 = mp.peds.new(
    mp.game.joaat('csb_mp_agent14'),
    new mp.Vector3(-330.89, 6085.63, 31.45),
    -142.48,
    mp.players.local.dimension
)
pedGunshop10.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-330.15, 6084.26, 31.45),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})



//Магазин одежды

let pedclothesshop1 = mp.peds.new(
    mp.game.joaat('ig_jewelass'),
    new mp.Vector3(-3169.19, 1043.59, 20.86),
    62.04,
    mp.players.local.dimension
)
pedclothesshop1.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-3170.62, 1044.08, 20.86),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedclothesshop2 = mp.peds.new(
    mp.game.joaat('ig_jewelass'),
    new mp.Vector3(-1096.05, 2712.48, 19.11),
    133.29,
    mp.players.local.dimension
)
pedclothesshop2.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-1097.07, 2710.62, 19.11),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})
let pedclothesshop3 = mp.peds.new(
    mp.game.joaat('ig_jewelass'),
    new mp.Vector3(127.15, -223.85, 54.56),
    66.90,
    mp.players.local.dimension
)
pedclothesshop3.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(125.59, -223.51, 54.56),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})
let pedclothesshop4 = mp.peds.new(
    mp.game.joaat('ig_jewelass'),
    new mp.Vector3(-816.70, -1072.93, 11.33),
    123.77,
    mp.players.local.dimension
)
pedclothesshop4.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-817.90, -1074.35, 11.33),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedclothesshop5 = mp.peds.new(
    mp.game.joaat('ig_jewelass'),
    new mp.Vector3(1692.30, 4817.35, 42.06),
    5.55,
    mp.players.local.dimension
)
pedclothesshop5.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1691.56, 4819.10, 42.06),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedclothesshop6 = mp.peds.new(
    mp.game.joaat('ig_jewelass'),
    new mp.Vector3(612.95, 2762.38, 42.09),
    -87.15,
    mp.players.local.dimension
)
pedclothesshop6.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(614.47, 2762.66, 42.09),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedclothesshop7 = mp.peds.new(
    mp.game.joaat('ig_jewelass'),
    new mp.Vector3(77.67, -1387.66, 29.38),
    179.24,
    mp.players.local.dimension
)
pedclothesshop7.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(78.22, -1389.44, 29.38),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedclothesshop8 = mp.peds.new(
    mp.game.joaat('ig_jewelass'),
    new mp.Vector3(-1194.16, -767.17, 17.32),
    -146.40,
    mp.players.local.dimension
)
pedclothesshop8.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(-1193.18, -768.28, 17.32),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})
let pedclothesshop9 = mp.peds.new(
    mp.game.joaat('ig_jewelass'),
    new mp.Vector3(1201.90, 2707.98, 38.22),
    90.45,
    mp.players.local.dimension
)
pedclothesshop9.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(1200.03, 2707.44, 38.22),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
})

let pedclothesshop10 = mp.peds.new(
    mp.game.joaat('ig_jewelass'),
    new mp.Vector3(-0.59, 6510.58, 31.88),
    -46.77,
    mp.players.local.dimension
)
pedclothesshop10.freezePosition(true);
mp.labels.new("Нажмите Е", new mp.Vector3(0.38, 6512.14, 31.88),
{
    los: false,
    font: 0,
    drawDistance: 2.0,
    color: [255, 255, 255, 255],
    dimension: 0,
}) 

