$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

function foo(){
    showHUD(false)
    showAll(false)
    showDevWindow(false)
    showGreenZone(false)

    //showHUD(true); showAll(true); locationUpdate('Международный аэропорт Лос-Сантос','Шоссе 68')
    //routeSelgenerate(20)
    //showRentVehWindow('1500', ', чтобы начать работу дальнобойщиком?')
    showInventory(false)
    document.getElementById(`rentVehWindow`).hidden = true;
    document.getElementById(`routeSel`).hidden = true;
    document.getElementById(`talkNPC`).hidden = true;
    let speed = 0;
    let odo = 0;
    if(speed < 10){
        document.getElementById("speednul").innerHTML = "00";
        document.getElementById("speednum").innerHTML = speed;
    } else if(speed < 100){
        document.getElementById("speednul").innerHTML = "0";
        document.getElementById("speednum").innerHTML = speed;
    } else {
        document.getElementById("speednum").innerHTML = speed;
    }
    //document.getElementById("rpm").style.width = `0%`;

    if(odo < 10){
        document.getElementById("odometernul").innerHTML = "000000";
        document.getElementById("odometernum").innerHTML = odo;
    } else if(odo < 100){
        document.getElementById("odometernul").innerHTML = "00000";
        document.getElementById("odometernum").innerHTML = odo;
    } else if(odo < 1000){
        document.getElementById("odometernul").innerHTML = "0000";
        document.getElementById("odometernum").innerHTML = odo;
    } else if(odo < 10000){
        document.getElementById("odometernul").innerHTML = "000";
        document.getElementById("odometernum").innerHTML = odo;
    } else if(odo < 100000){
        document.getElementById("odometernul").innerHTML = "00";
        document.getElementById("odometernum").innerHTML = odo;
    } else if(odo < 1000000){
        document.getElementById("odometernul").innerHTML = "0";
        document.getElementById("odometernum").innerHTML = odo;
    } else {
        document.getElementById("odometernul").innerHTML = "";
        document.getElementById("odometernum").innerHTML = odo;
    }
    $("#factionmenulist_clicked_members").click();
}

function updateVehData(speed, rpm, odo, fuel) {
    var rpmsector = document.querySelector('#rpm');
    if(speed < 10){
        document.getElementById("speednul").innerHTML = "00";
        document.getElementById("speednum").innerHTML = speed;
    } else if(speed < 100){
        document.getElementById("speednul").innerHTML = "0";
        document.getElementById("speednum").innerHTML = speed;
    } else {
        document.getElementById("speednul").innerHTML = "";
        document.getElementById("speednum").innerHTML = speed;
    }

    if(odo < 10){
        document.getElementById("odometernul").innerHTML = "000000";
        document.getElementById("odometernum").innerHTML = odo;
    } else if(odo < 100){
        document.getElementById("odometernul").innerHTML = "00000";
        document.getElementById("odometernum").innerHTML = odo;
    } else if(odo < 1000){
        document.getElementById("odometernul").innerHTML = "0000";
        document.getElementById("odometernum").innerHTML = odo;
    } else if(odo < 10000){
        document.getElementById("odometernul").innerHTML = "000";
        document.getElementById("odometernum").innerHTML = odo;
    } else if(odo < 100000){
        document.getElementById("odometernul").innerHTML = "00";
        document.getElementById("odometernum").innerHTML = odo;
    } else if(odo < 1000000){
        document.getElementById("odometernul").innerHTML = "0";
        document.getElementById("odometernum").innerHTML = odo;
    } else {
        document.getElementById("odometernul").innerHTML = "";
        document.getElementById("odometernum").innerHTML = odo;
    }
    document.getElementById("rpm").style.width = `${(rpm/10)*100}%`;
    document.getElementById("fuel").style.width = `${(fuel/100)*100}%`;
}

function updateIcons(item, value) {
    if (item == 'engine'){
        if (value) document.getElementById("engine").style.filter = "none"
        else document.getElementById("engine").style.filter = "hue-rotate(-135deg) sepia(70%) saturate(1900%) brightness(90%)"
    } else if (item == 'door'){
        if (value) document.getElementById("door").style.filter = "none"
        else document.getElementById("door").style.filter = "hue-rotate(-135deg) sepia(70%) saturate(1900%) brightness(90%)"
    } else if (item == 'belt'){
        if (value) document.getElementById("belt").style.filter = "none"
        else document.getElementById("belt").style.filter = "hue-rotate(-135deg) sepia(70%) saturate(1900%) brightness(90%)"
    }
}

function updateTurns(item, value) {
    if (item == 'left') {
        if (value) {
            document.getElementById("turn-right").style.filter = "none";
            stopl = false
            stopr = true
            stopall = true

            document.getElementById("turn-left").style.filter = "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)";
            turnworkl = true
            var turnsupdatel = setInterval( function() {
                if (turnworkl) document.getElementById("turn-left").style.filter = "none";
                else document.getElementById("turn-left").style.filter = "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)";
                turnworkl = !turnworkl;
                if (stopl) {
                    clearInterval(turnsupdatel);
                    document.getElementById("turn-left").style.filter = "none";
                }
            }, 500);
        } else {
            stopl = true
        }
    } else if (item == 'right') {
        if (value) {
            document.getElementById("turn-left").style.filter = "none";
            stopl = true
            stopr = false
            stopall = true

            document.getElementById("turn-right").style.filter = "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)";
            turnworkr = true
            var turnsupdater = setInterval( function() {
                if (turnworkr) document.getElementById("turn-right").style.filter = "none";
                else document.getElementById("turn-right").style.filter = "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)";
                turnworkr = !turnworkr;
                if (stopr) {
                    clearInterval(turnsupdater);
                    document.getElementById("turn-right").style.filter = "none";
                }
            }, 500);
        } else {
            stopr = true
        }
    } else if (item == 'all') {
        if (value) {
            stopl = true
            stopr = true
            stopall = false

            document.getElementById("turn-left").style.filter = "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)";
            document.getElementById("turn-right").style.filter = "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)";
            turnworkall = true
            var turnsupdateall = setInterval( function() {
                if (turnworkall) {
                    document.getElementById("turn-left").style.filter = "none";
                    document.getElementById("turn-right").style.filter = "none";
                } else {
                    document.getElementById("turn-left").style.filter = "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)";
                    document.getElementById("turn-right").style.filter = "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)";
                }
                turnworkall = !turnworkall;
                if (stopall) {
                    clearInterval(turnsupdateall);
                    document.getElementById("turn-left").style.filter = "none";
                    document.getElementById("turn-right").style.filter = "none";
                }
            }, 500);
        } else {
            stopall = true
        }
    }
}

function showSpeed(value) {
    document.getElementById("speedometer").hidden = !value;
}

function showHUD(value) {
    document.getElementById("hudosn").hidden = !value;
}

function showInventory(value) {
    document.getElementById("inventory").hidden = !value;
}

function showFactionMenu(value) {
    document.getElementById("factionmenu").hidden = !value;
}

function showPlayerMenu(value) {
    //document.getElementById("playermenu").hidden = !value;
    if (!value) $('#playermenu').hide()
    else $('#playermenu').show()
}

function showPlayerMenuItems(value, state) {
    document.getElementById(`playermenu_item_${value}`).hidden = !state;
}

function updateMoney(value) {
    value = new Intl.NumberFormat('ru-RU').format(value);
    document.getElementById("moneycount").innerHTML = value;
}

function updateIdPl(value) {
    document.getElementById("plidnum").innerHTML = value;
}

function updateCountPl(value) {
    document.getElementById("plcountnum").innerHTML = value;
}

function updateTimes(value) {
    document.getElementById("plcountnum").innerHTML = value;
}

function updateTime(dates, times) {
    document.getElementById("date").innerHTML = dates;
    document.getElementById("time").innerHTML = times;
}

function microUpdate(type) {
    if (type == "on") document.getElementById("micro").style.filter = "none"
    else if (type == "off") document.getElementById("micro").style.filter = "contrast(0)"
    else if (type == "mute") document.getElementById("micro").style.filter = "hue-rotate(-75deg) contrast(200%) saturate(2000%) hue-rotate(55deg) brightness(85%)"
}

function locationUpdate(hood, place) {
    if (hood.length < 21) {
        $('#player_pos_background').css('width', '232px')
        $('#player_pos_background').css('background', "url('./img/plpos_background.svg')")
        $('#micro_background').css('margin-left', '-15px')
    } else {
        $('#player_pos_background').css('width', '367px')
        $('#player_pos_background').css('background', "url('./img/plpos_background_big.svg')")
        $('#micro_background').css('margin-left', '-17px')
    }
    $('#player_pos_neighborhood').text(hood)
    $('#player_pos_place').text(place)
}

function showAll(value) {
    if (value) {
        $('#hudall').show()
    } else {
        $('#hudall').hide()
    }
}

function showDevWindow(value) {
    if (value) {
        $('#entryservclose_dev').show()
    } else {
        $('#entryservclose_dev').hide()
    }
}

function showGreenZone(value) {
    if (value) {
        $('#greenzone_label').show()
    } else {
        $('#greenzone_label').hide()
    }
}

function showNotify(text, type) {
    if (type == 'yes') $('#notify_cont').append(`<div class="notifybox"><img src="img/notify_ok.svg" alt="notify" class="notify_img"><span class="notifytext">${text}</span></div>`)
    else if (type == 'no') $('#notify_cont').append(`<div class="notifybox"><img src="img/notify_no.svg" alt="notify" class="notify_img"><span class="notifytext">${text}</span></div>`)
    else if (type == 'info') $('#notify_cont').append(`<div class="notifybox"><img src="img/notify_i.svg" alt="notify" class="notify_img"><span class="notifytext">${text}</span></div>`)
    else return

    setTimeout(() => {
        let children = $('#notify_cont').children();
        for (let i = 0; i < children.length; i++) {
            if (!$(children[i]).hasClass('notifyrem')) {
                $(children[i]).addClass('notifyrem')
                $(children[i]).css('opacity', '0')
                setTimeout(() => {
                    let childrens = $('#notify_cont').children();
                    for (let i = 0; i < childrens.length; i++) {
                        if ($(childrens[i]).hasClass('notifyrem')) {
                            $(childrens[i]).remove()
                            break
                        }
                    }
                }, 1000)
                break
            }
        }
    }, 5000);
}

//showInventory(false);
showSpeed(false);
showHUD(false); //исправить на false
showFactionMenu(false);
showPlayerMenuItems("faction", true)
showPlayerMenu(false)

$(".playermenu_item").click(function() {
    showPlayerMenu(false);
    mp.trigger('changeMmenuState', false);
    if (this.id.split('_')[2] == 'main') return
    else if (this.id.split('_')[2] == 'faction') return showFactionMenu(true);
})

$(".close_x").click(function() {
    showFactionMenu(false);
    mp.trigger('showCursorEv', false);
})


let players =
[
    
]

function updateplayerlist(playerlist){
    players = JSON.parse(playerlist);
    players.sort(function(a, b){
        var nameA=a.nickname.toLowerCase(), nameB=b.nickname.toLowerCase()
        if (nameA < nameB) //сортируем строки по возрастанию
          return -1
        if (nameA > nameB)
          return 1
        return 0 // Никакой сортировки
    })
    
    /*players.sort(function(a, b) {
        return a.isOnline - b.isOnline
    });*/
    
    players.sort(function(a, b) {
        return b.rank - a.rank
    });
    $('#factionmenu_members_list').empty();
    
    for (let i = 0; i < players.length; i++) {
        $('#factionmenu_members_list').append(`<div class="factionmenu_members_player">
        <div class="factionmenu_members_player_main">
            <span class="factionmenu_members_player_${players[i].isOnline ? 'online' : 'offline'}">${players[i].isOnline ? 'Online' : 'Offline'}</span>
            <span class="factionmenu_members_player_nickname">${players[i].nickname}</span>
            <span class="factionmenu_members_player_rangnow">${players[i].ranktext} (${players[i].rank})</span>
            <span class="factionmenu_members_player_lastentry">${players[i].lastdate}</span>
        </div>
        <div class="factionmenu_members_player_right">
            <div class="factionmenu_members_player_top">
                <span class="factionmenu_members_player_rang">Ранг</span>
            </div>
            <div class="factionmenu_members_player_bottom">
                <span class="factionmenu_members_player_uval" id="playerfactionuvalpid_${players[i].pid}">Уволить</span>
            </div>
        </div>
    </div>`);
    }
}

$(".factionmenulist_clicked").click(function() {
    //console.log(this.id.split('_')[2])
    $(`.factionmenulist_selectedline`).css('opacity', '0');
    $(`#factionmenulist_selectedline_${this.id.split('_')[2]}`).css('opacity', '1');

    $(`.factionmenu_tabs`).css('opacity', '0');
    $(`.factionmenu_tabs`).css('pointerEvents', 'none');
    $(`.factionmenu_tabs :input`).attr('disabled', true);

    $(`#factionmenu_${this.id.split('_')[2]}`).css('opacity', '1');
    $(`#factionmenu_${this.id.split('_')[2]}`).css('pointerEvents', 'all');
    $(`#factionmenu_${this.id.split('_')[2]} :input`).removeAttr('disabled');
})

players.sort(function(a, b){
    var nameA=a.nickname.toLowerCase(), nameB=b.nickname.toLowerCase()
    if (nameA < nameB) //сортируем строки по возрастанию
      return -1
    if (nameA > nameB)
      return 1
    return 0 // Никакой сортировки
})

/*players.sort(function(a, b) {
    return a.isOnline - b.isOnline
});*/

players.sort(function(a, b) {
    return b.rank - a.rank
});


for (let i = 0; i < players.length; i++) {
    $('#factionmenu_members_list').append(`<div class="factionmenu_members_player">
    <div class="factionmenu_members_player_main">
        <span class="factionmenu_members_player_${players[i].isOnline ? 'online' : 'offline'}">${players[i].isOnline ? 'Online' : 'Offline'}</span>
        <span class="factionmenu_members_player_nickname">${players[i].nickname}</span>
        <span class="factionmenu_members_player_rangnow">${players[i].ranktext} (${players[i].rank})</span>
        <span class="factionmenu_members_player_lastentry">${players[i].lastdate}</span>
    </div>
    <div class="factionmenu_members_player_right">
        <div class="factionmenu_members_player_top">
            <span class="factionmenu_members_player_rang">Ранг</span>
        </div>
        <div class="factionmenu_members_player_bottom">
            <span class="factionmenu_members_player_uval" id="playerfactionuvalpid_${players[i].pid}">Уволить</span>
        </div>
    </div>
</div>`);
}

$(".factionmenu_members_player_uval").click(function() {
    console.log(this.id)
})

function factionmembersupdatesearch(){
    $('#factionmenu_members_list').empty();
    for (let i = 0; i < players.length; i++) {
        if ($("#factionsearchname_text").val().length != 0) {
            if (players[i].nickname.indexOf($("#factionsearchname_text").val()) === -1) continue
        }
        $('#factionmenu_members_list').append(`<div class="factionmenu_members_player">
        <div class="factionmenu_members_player_main">
            <span class="factionmenu_members_player_${players[i].isOnline ? 'online' : 'offline'}">${players[i].isOnline ? 'Online' : 'Offline'}</span>
            <span class="factionmenu_members_player_nickname">${players[i].nickname}</span>
            <span class="factionmenu_members_player_rangnow">${players[i].ranktext} (${players[i].rank})</span>
            <span class="factionmenu_members_player_lastentry">${players[i].lastdate}</span>
        </div>
        <div class="factionmenu_members_player_right">
            <div class="factionmenu_members_player_top">
                <span class="factionmenu_members_player_rang">Ранг</span>
            </div>
            <div class="factionmenu_members_player_bottom">
                <span class="factionmenu_members_player_uval" id="playerfactionuvalpid_${players[i].pid}">Уволить</span>
            </div>
        </div>
    </div>`);
    }
}
















// Инвентарь


let inventory_player_max_weight = 10;
let inventory_slots_count = 16;

setTimeout(() => {
    $('#inventory_player_weight_max').text(inventory_player_max_weight)
    createBackpack(100, cells_back)
    showInventoryPl()
}, 100);

let allItems = [
    { id: 1, name: 'Трусы от гучи', srcImg: 'img/items/clothes-legs.png', type: 'clothes_legs', weight: 0.3, isStackable: false, adatareq: true },
    { id: 2, name: 'Футболка от Влада A4', srcImg: 'img/items/t-shirt.svg', type: 'clothes_tshirt', weight: 0.3, isStackable: false, adatareq: true },
    { id: 3, name: 'Пистолет пулемёт', srcImg: 'img/items/weapon.svg', type: 'weapon', weight: 1.5, isStackable: false, adatareq: true },
    { id: 4, name: 'Патроны 0.5мм', srcImg: 'img/items/bullets.svg', type: 'bullets', weight: 0.02, isStackable: true, maxCount: 100, adatareq: false },
    { id: 5, name: 'Патроны 1мм', srcImg: 'img/items/bullets.svg', type: 'bullets', weight: 0.02, isStackable: true, maxCount: 100, adatareq: false },
    { id: 6, name: 'Пистолет', srcImg: 'img/items/weapon.svg', type: 'weapon', weight: 1, isStackable: false, adatareq: true },
];

let itemMenu = {
    "clothes_mask": ['Надеть'],
    "clothes_head": ['Надеть'],
    "clothes_tshirt": ['Надеть'],
    "clothes_legs": ['Надеть'],
    "clothes_boots": ['Надеть'],

    "clothes_glasses": ['Надеть'],
    "clothes_upper": ['Надеть'],
    "clothes_gloves": ['Надеть'],
    "clothes_backpack": ['Надеть'],
    "clothes_bracelets": ['Надеть'],
    
    "weapon": ['Использовать', 'Разрядить'],
    "bullets": []
}

let cells = [
    { idItem: 1, value: 1, adata: 'Синие' },
    { idItem: 2, value: 1, adata: 'Красная' },
    { idItem: 3, value: 1, adata: {serial: 'PDW123', ammo: 13} },
    { idItem: 4, value: 10 },
    { idItem: null, value: null },
    { idItem: 4, value: 10 },
    { idItem: null, value: null },
    { idItem: 4, value: 1 },
    { idItem: 6, value: 1, adata: {serial: 'PDW123', ammo: 13} },
    { idItem: null, value: null },
    { idItem: null, value: null },
    { idItem: null, value: null },
    { idItem: null, value: null },
    { idItem: null, value: null },
    { idItem: null, value: null },
    { idItem: null, value: null },
]

let cells_back = [
    { idItem: null, value: null },
    { idItem: 2, value: 1, adata: 'Красная' },
    { idItem: 3, value: 1, adata: {serial: 'PDW123', ammo: 13} },
    { idItem: 4, value: 100 },
    { idItem: null, value: null },
    { idItem: 4, value: 50 },
    { idItem: 6, value: 1, adata: {serial: 'PDW123', ammo: 13} },
    { idItem: 4, value: 1 },
    { idItem: null, value: null },
    { idItem: null, value: null },
    { idItem: null, value: null },
]

function showInventory(value){
    if (value) $('#inventory').show();
    else $('#inventory').hide();
}

function showInventoryPl(){
    $('#inventory_player').empty()
    $('#inventory_item_menu').remove()
    if (inventory_slots_count >= cells.length) {
        for (let i = 0; i < cells.length; i++) {
            $('#inventory_player').append(`<div class="inventory_player_cell" id="inventory_player_cell_${i}"></div>`)
            if (cells[i].idItem != null) {
                if (allItems[cells[i].idItem-1].isStackable) $(`#inventory_player_cell_${i}`).append(`<div class="inventory_player_item stackable" id="${cells[i].idItem}"><img src="${allItems[cells[i].idItem-1].srcImg}" id="${cells[i].idItem}" class="inventory_player_item_img"><span class="inventory_player_item_label">${allItems[cells[i].idItem-1].name}</span><span class="inventory_player_item_count">x${cells[i].value}</span></div>`)
                else $(`#inventory_player_cell_${i}`).append(`<div class="inventory_player_item" id="${cells[i].idItem}"><img src="${allItems[cells[i].idItem-1].srcImg}" id="${cells[i].idItem}" class="inventory_player_item_img"><span class="inventory_player_item_label">${allItems[cells[i].idItem-1].name}</span><span class="inventory_player_item_adata">${JSON.stringify(cells[i].adata)}</span></div>`)
            }
        }

        if (inventory_slots_count > cells.length) {
            for (let i = 0; i < (inventory_slots_count - cells.length); i++) {
                $('#inventory_player').append(`<div class="inventory_player_cell" id="inventory_player_cell_${i}"></div>`)
            }
        }
    } else {
        for (let i = 0; i < inventory_slots_count; i++) {
            $('#inventory_player').append(`<div class="inventory_player_cell" id="inventory_player_cell_${i}"></div>`)
            if (cells[i].idItem != null) {
                if (allItems[cells[i].idItem-1].isStackable) $(`#inventory_player_cell_${i}`).append(`<div class="inventory_player_item stackable" id="${cells[i].idItem}"><img src="${allItems[cells[i].idItem-1].srcImg}" id="${cells[i].idItem}" class="inventory_player_item_img"><span class="inventory_player_item_label">${allItems[cells[i].idItem-1].name}</span><span class="inventory_player_item_count">x${cells[i].value}</span></div>`)
                else $(`#inventory_player_cell_${i}`).append(`<div class="inventory_player_item" id="${cells[i].idItem}"><img src="${allItems[cells[i].idItem-1].srcImg}" id="${cells[i].idItem}" class="inventory_player_item_img"><span class="inventory_player_item_label">${allItems[cells[i].idItem-1].name}</span><span class="inventory_player_item_adata">${JSON.stringify(cells[i].adata)}</span></div>`)
            }
        }
    }
    getAllInvenoryWeight()
    dragodrop()
}

arraytest = JSON.stringify({serial: 'PDW228', ammo: 30})



function addItemInventory(id, count, adatan) {
    let addItemcount = 0
    let children = $('#inventory_player').children();
    if (id > allItems.length) return "Нет"
    if (allItems[id-1].isStackable) {
        if ((getAllInvenoryWeight().player + (allItems[id-1].weight * count)) > inventory_player_max_weight) return "Переполнено"
        let itemCount = count;
        let spaceAmount = 0;

        for (let i = 0; i < children.length; i++) {
            if (children[i].children.length == 0) {
                spaceAmount += allItems[id-1].maxCount
            } else if (children[i].children[0].id == id) {
                if (parseInt(children[i].children[0].children[2].innerHTML.replace('x','')) < allItems[id-1].maxCount) {
                    spaceAmount += (allItems[id-1].maxCount - parseInt(children[i].children[0].children[2].innerHTML.replace('x','')))
                }
            }
        }

        if (spaceAmount < count) return "Места не хватит"

        for (let i = 0; i < children.length; i++) {
            if (children[i].children.length == 0) continue
            if (children[i].children[0].id == id) {
                if (parseInt(children[i].children[0].children[2].innerHTML.replace('x','')) < allItems[id-1].maxCount) {
                    if ((itemCount - (allItems[id-1].maxCount - parseInt(children[i].children[0].children[2].innerHTML.replace('x','')))) > 0) {
                        itemCount -= (allItems[id-1].maxCount - parseInt(children[i].children[0].children[2].innerHTML.replace('x','')))
                        $(children[i].children[0].children[2]).text(`x${allItems[id-1].maxCount}`)
                        continue
                    } else if ((itemCount - (allItems[id-1].maxCount - parseInt(children[i].children[0].children[2].innerHTML.replace('x','')))) == 0) {
                        itemCount -= (allItems[id-1].maxCount - parseInt(children[i].children[0].children[2].innerHTML.replace('x','')))
                        $(children[i].children[0].children[2]).text(`x${allItems[id-1].maxCount}`)
                        dragodrop()
                        addItemcount++
                        break
                    } else {
                        $(children[i].children[0].children[2]).text(`x${itemCount + parseInt(children[i].children[0].children[2].innerHTML.replace('x',''))}`)
                        dragodrop()
                        itemCount = 0;
                        addItemcount++
                        break
                    }
                }
            }
        }
        if (itemCount > 0) {
            if (itemCount <= allItems[id-1].maxCount) {
                for (let i = 0; i < children.length; i++) {
                    if (children[i].children.length == 0) {
                        $(children[i]).append(`<div class="inventory_player_item stackable" id="${id}"><img src="${allItems[id-1].srcImg}" id="${id}" class="inventory_player_item_img"><span class="inventory_player_item_label">${allItems[id-1].name}</span><span class="inventory_player_item_count">x${itemCount}</span></div>`);
                        itemCount = 0
                        addItemcount++
                        dragodrop()
                        break
                    }
                }
            } else {
                for (let i = 0; i < children.length; i++) {
                    if (children[i].children.length == 0) {
                        if (itemCount > allItems[id-1].maxCount) {
                            $(children[i]).append(`<div class="inventory_player_item stackable" id="${id}"><img src="${allItems[id-1].srcImg}" id="${id}" class="inventory_player_item_img"><span class="inventory_player_item_label">${allItems[id-1].name}</span><span class="inventory_player_item_count">x${allItems[id-1].maxCount}</span></div>`);
                            itemCount -= allItems[id-1].maxCount
                            addItemcount++
                            dragodrop()
                        } else {
                            $(children[i]).append(`<div class="inventory_player_item stackable" id="${id}"><img src="${allItems[id-1].srcImg}" id="${id}" class="inventory_player_item_img"><span class="inventory_player_item_label">${allItems[id-1].name}</span><span class="inventory_player_item_count">x${itemCount}</span></div>`);
                            itemCount = 0
                            addItemcount++
                            dragodrop()
                            break
                        }
                    }
                }
            }
        }
    } else {
        for (let i = 0; i < children.length; i++) {

            /*if (allItems[children[i].children[0].id-1].isStackable) {
                plweight_inv += parseInt(children[i].children[0].children[2].innerHTML.replace('x', '')) * allItems[children[i].children[0].id-1].weight
            } else {
                plweight_inv += allItems[children[i].children[0].id-1].weight
            }*/
            
            if (children[i].children.length == 0) {
                if ((getAllInvenoryWeight().player + allItems[id-1].weight) > inventory_player_max_weight) return "Переполнено"
                else if (allItems[id-1].adatareq) $(children[i]).append(`<div class="inventory_player_item" id="${id}"><img src="${allItems[id-1].srcImg}" id="${id}" class="inventory_player_item_img"><span class="inventory_player_item_label">${allItems[id-1].name}</span><span class="inventory_player_item_adata">${adatan}</span></div>`);
                else $(children[i]).append(`<div class="inventory_player_item" id="${id}"><img src="${allItems[id-1].srcImg}" id="${id}" class="inventory_player_item_img"><span class="inventory_player_item_label">${allItems[id-1].name}</span></div>`)
                dragodrop()
                addItemcount++
                break
            }
            
        }
    }
    getAllInvenoryWeight()
    if (addItemcount == 0) return "Нет места"
    else return "Добавлено"
    
}


function createBackpack(maxw, array) {
    $('#backpack_player').empty()
    for (let i = 0; i < array.length; i++) {
        $('#backpack_player').append(`<div class="inventory_player_cell" id="inventory_backpack_cell_${i}"></div>`)
        if (array[i].idItem != null) {
            if (allItems[array[i].idItem-1].isStackable) $(`#inventory_backpack_cell_${i}`).append(`<div class="inventory_player_item stackable" id="${array[i].idItem}"><img src="${allItems[array[i].idItem-1].srcImg}" id="${array[i].idItem}" class="inventory_player_item_img"><span class="inventory_player_item_label">${allItems[array[i].idItem-1].name}</span><span class="inventory_player_item_count">x${array[i].value}</span></div>`)
            else $(`#inventory_backpack_cell_${i}`).append(`<div class="inventory_player_item" id="${array[i].idItem}"><img src="${allItems[array[i].idItem-1].srcImg}" id="${array[i].idItem}" class="inventory_player_item_img"><span class="inventory_player_item_label">${allItems[array[i].idItem-1].name}</span><span class="inventory_player_item_adata">${JSON.stringify(array[i].adata)}</span></div>`)
        }
    }
    $('#inventory_backpack_weight_max').html(parseFloat(maxw))
    dragodrop()
    getAllInvenoryWeight()
    $('#backpack_player_box').css('display', 'block')
    return `Инвентарь рюкзака создан!`
    
}
dragodrop()
function dragodrop() {

    $( ".inventory_player_item").draggable({ // ВЫБИРАЕМ ЭЛЕМЕНТЫ КОТОРЫЕ БУДЕМ ПЕРЕМЕЩАТЬ
        scroll: false, // ЗАПРЕЩАЕМ ПОЯВЛЕНИЮ SCROLL ВО ВРЕМЯ ПЕРЕМЕЩЕНИЯ
        helper: "clone", // ПРИ ПЕРЕМЕЩЕНИИ СОЗДАЕТ КЛОНА
        opacity: .6,
        zIndex: 127, // ОТОБРАЖЕНИЕ ПЕРЕТАСКИВАЕМОГО ЭЛЕМЕНТА СВЕРХУ
        drag: function(event, ui)
        {
            item_cell = this.parentNode.id;
            item_cell_class = this.parentNode.parentNode.id
            item_isStackable = $(this).hasClass("stackable");
        },
    });

    $( ".inventory_player_cell" ).droppable({
        accept: ".inventory_player_item",
        drop: function( event, ui ) {
            var item = $(this).find(".inventory_player_item");
            $('#inventory_item_menu').remove() 
            if(item.length == 0) {
                //console.log(item_cell_class)
                if (item_cell_class != this.parentNode.id) {
                    if (this.parentNode.id == 'inventory_player') {
                        if (item_isStackable) {
                            //console.log(ui.draggable.attr('id'))
                            if ((getAllInvenoryWeight().player + parseInt(ui.draggable.children()[2].innerHTML.replace('x','')) * allItems[ui.draggable.attr('id')-1].weight) > inventory_player_max_weight) return console.log('Переполнено')
                        } else {
                            if ((getAllInvenoryWeight().player + allItems[ui.draggable.attr('id')-1].weight) > inventory_player_max_weight) return console.log('Переполнено')
                        }
                    } else if (this.parentNode.id == 'backpack_player') {
                        if (item_isStackable) {
                            //console.log(ui.draggable.attr('id'))
                            if ((getAllInvenoryWeight().backpack + parseInt(ui.draggable.children()[2].innerHTML.replace('x','')) * allItems[ui.draggable.attr('id')-1].weight) > $('#inventory_backpack_weight_max').text()) return console.log('Переполнено')
                        } else {
                            if ((getAllInvenoryWeight().backpack + allItems[ui.draggable.attr('id')-1].weight) > $('#inventory_backpack_weight_max').text()) return console.log('Переполнено')
                        }
                    }
                }
                if (this.parentNode.id == 'player_inv_clothes_cells' || this.parentNode.id == 'player_inv_clothes_cells2') {
                    if (allItems[ui.draggable.attr('id')-1].type == `${this.id.split('_')[2]}_${this.id.split('_')[3]}`) {
                        // ивент
                    } else {
                        return
                    }
                } else if (this.parentNode.id == 'player_inv_weapon_cells') {
                    if (allItems[ui.draggable.attr('id')-1].type == `weapon`) {
                        //console.log($('#player_inv_weapon_cells').children()[0].children.length)
                            
                        for (let i = 1; i < 4; i++) {
                            //console.log($('#player_inv_weapon_cells').children()[i].children.length)
                            //console.log(i)
                            //console.log($('#player_inv_weapon_cells').children()[i].children.length, $('#player_inv_weapon_cells').children()[i].children.length, $('#player_inv_weapon_cells').children()[i].children.length)
                            if ($('#player_inv_weapon_cells').children()[i].children.length > 0) {
                                if ($($('#player_inv_weapon_cells').children()[i].children).attr('id') == ui.draggable.attr('id')) return
                            }
                        }
                    } else {
                        return
                    }
                }
                
                ui.draggable.detach().appendTo($(this));
                inventoryGetArray()
            } else if (item_cell == this.id) {
                $(ui.draggable).click()
                //inventoryCreateItemMenu(this, e)
                if (allItems[ui.draggable.attr('id')-1].adatareq){
                    //console.log(JSON.parse(ui.draggable.children()[2].innerHTML))
                }
                //inventoryCreateItemMenu(ui.draggable.attr('id'))
                
            } else if (ui.draggable.attr('id') == $(this).children().attr('id') && item_isStackable) {
                ui.draggable.animate(ui.draggable.data().origPosition,"slow");
                if (item_cell_class != this.parentNode.id) {
                    if (this.parentNode.id == 'inventory_player') {
                        if (item_isStackable) {
                            //console.log(ui.draggable.attr('id'))
                            if ((getAllInvenoryWeight().player + parseInt(ui.draggable.children()[2].innerHTML.replace('x','')) * allItems[ui.draggable.attr('id')-1].weight) > inventory_player_max_weight) return console.log('Переполнено')
                        } else {
                            if ((getAllInvenoryWeight().player + allItems[ui.draggable.attr('id')-1].weight) > inventory_player_max_weight) return console.log('Переполнено')
                        }
                    } if (this.parentNode.id == 'backpack_player') {
                        if (item_isStackable) {
                            //console.log(ui.draggable.attr('id'))
                            if ((getAllInvenoryWeight().backpack + parseInt(ui.draggable.children()[2].innerHTML.replace('x','')) * allItems[ui.draggable.attr('id')-1].weight) > $('#inventory_backpack_weight_max').text()) return console.log('Переполнено')
                        } else {
                            if ((getAllInvenoryWeight().backpack + allItems[ui.draggable.attr('id')-1].weight) > $('#inventory_backpack_weight_max').text()) return console.log('Переполнено')
                        }
                    }
                }
                if (parseInt(ui.draggable.children('.inventory_player_item_count').html().replace('x','')) + parseInt($(this).children().children('.inventory_player_item_count').html().replace('x','')) > allItems[ui.draggable.attr('id')-1].maxCount) return
                $(this).children().children('.inventory_player_item_count').html(`x${parseInt(ui.draggable.children('.inventory_player_item_count').html().replace('x','')) + parseInt($(this).children().children('.inventory_player_item_count').html().replace('x',''))}`)
                ui.draggable.detach();
            }
            setTimeout(() => {
                getAllInvenoryWeight()
            }, 200);
            
        }
    })

    $('.inventory_player_cell').click(function(){
        inventoryCreateItemMenu(this, $(this).offset().left, $(this).offset().top)
    })


    $(document).click(function(e) {
        setTimeout(() => {
            if ( $(e.target).closest('.inventory_player_cell').length === 0 ) {
                $('#inventory_item_menu').remove() 
            }
        }, 100);
        
    });
    
}


function inventoryCreateItemMenu(thiss, posX, posY){
    $('#inventory_item_menu').remove()
    if (thiss.children.length > 0 && thiss.parentNode.id == 'inventory_player') {
        item_id = thiss.children[0].id
        $('#inventory').append(`<div id="inventory_item_menu" style="position: absolute; left: ${posX-30}px; top: ${posY+85}px"><div class="arrow_upss"></div></div>`)
        for (let i = 0; i < itemMenu[allItems[item_id-1].type].length; i++) {
            $('#inventory_item_menu').append(`<span class="inventory_item_menu_item">${itemMenu[allItems[item_id-1].type][i]}</span> <hr align="center" width="50%" size="0.4" color="grey" />`)
        }
        $('#inventory_item_menu').append(`<span class="inventory_item_menu_item">Выбросить</span>`)
    }

}


function getAllInvenoryWeight(){
    let children = $('#inventory_player').children();
    plweight_inv = 0;
    for (let i = 0; i < children.length; i++) {
        
        if (children[i].children.length == 0) {
            plweight_inv += 0
            continue
        }
        if (allItems[children[i].children[0].id-1].isStackable) {
            plweight_inv += parseInt(children[i].children[0].children[2].innerHTML.replace('x', '')) * allItems[children[i].children[0].id-1].weight
        } else {
            plweight_inv += allItems[children[i].children[0].id-1].weight
        }
        $('#inventory_player_weight').html(parseFloat(plweight_inv.toFixed(2))+0)
    }

    let children_b = $('#backpack_player').children();
    plweight_backpack = 0;
    for (let i = 0; i < children_b.length; i++) {
        
        if (children_b[i].children.length == 0) {
            plweight_backpack += 0
            continue
        }
        if (allItems[children_b[i].children[0].id-1].isStackable) {
            plweight_backpack += parseInt(children_b[i].children[0].children[2].innerHTML.replace('x', '')) * allItems[children_b[i].children[0].id-1].weight
        } else {
            plweight_backpack += allItems[children_b[i].children[0].id-1].weight
        }
        $('#inventory_backpack_weight').html(parseFloat(plweight_backpack.toFixed(2))+0)
    }
    $('#inventory_player_weight').html(parseFloat(plweight_inv.toFixed(2))+0)
    $('#inventory_backpack_weight').html(parseFloat(plweight_backpack.toFixed(2))+0)
    return {player: parseFloat(plweight_inv.toFixed(2))+0, backpack: parseFloat(plweight_backpack.toFixed(2))+0}
}

function inventoryGetArray(){
    setTimeout(() => {
        let children = $('#inventory_player').children();

        let cells2 = []

        for (let i = 0; i < children.length; i++) {
            
            if (children[i].children.length == 0) {
                cells2.push({ idItem: null, value: null })
            } else if (allItems[children[i].children[0].id-1].isStackable) {
                cells2.push({ idItem: parseInt(children[i].children[0].id), value: parseInt(children[i].children[0].children[2].innerHTML.replace('x', '')) })
                //console.log(parseInt(children[i].children[0].children[2].innerHTML.replace('x', '')))
            } else {
                cells2.push({ idItem: parseInt(children[i].children[0].id), value: 1, adata: JSON.parse(children[i].children[0].children[2].innerHTML) })
                //cells2[i].adata = cells[children[i].id.split('_')[3]].adata
                
            }
            
        }
        cells = cells2
    }, 200);
    
}

function showRentVehWindow(value, value2) {
    $('#rentVehMoney').text(value)
    $('#rentVehTextAdd').text(value2)
    document.getElementById(`rentVehWindow`).hidden = false;
}

$('#rentVehBtnYes').click(function(){
    document.getElementById(`rentVehWindow`).hidden = true;
    mp.trigger('rentVehCEFdata', true);
})

$('#rentVehBtnNo').click(function(){
    document.getElementById(`rentVehWindow`).hidden = true;
    mp.trigger('rentVehCEFdata', false);
})

function talkNPC(type, NPCname, text, btn1, btn2, btn3, btn4) {
    document.getElementById(`talkNPC`).hidden = false;
    NPCTalktype = type;
    $('#talkNPC_name').text(`${NPCname}:`);
    $('#talkNPC_text').text(`${text}`);

    $('#talkNPC_btn_1').hide()
    $('#talkNPC_btn_2').hide()
    $('#talkNPC_btn_3').hide()
    $('#talkNPC_btn_4').hide()

    $('#talkNPC_btn_1').text(``)
    $('#talkNPC_btn_2').text(``)
    $('#talkNPC_btn_3').text(``)
    $('#talkNPC_btn_4').text(``)

    //$('#talkNPC_btns').empty()
    if (btn1.length > 0) {
        $('#talkNPC_btn_1').text(`${btn1}`)
        $('#talkNPC_btn_1').show()
    }
    if (btn2.length > 0) {
        $('#talkNPC_btn_2').text(`${btn2}`)
        $('#talkNPC_btn_2').show()
    }
    if (btn3.length > 0) {
        $('#talkNPC_btn_3').text(`${btn3}`)
        $('#talkNPC_btn_3').show()
    }
    if (btn4.length > 0) {
        $('#talkNPC_btn_4').text(`${btn4}`)
        $('#talkNPC_btn_4').show()
    }
    
}

$('.talkNPC_btn').click(function(){
    console.log(NPCTalktype, this.id.split('_')[2])
    document.getElementById(`talkNPC`).hidden = true;
    mp.trigger('talkNPCCEFdata', NPCTalktype, this.id.split('_')[2])
})

function routeSelgenerate(count) {
    $('#routeSel_list').empty()
    document.getElementById(`routeSel`).hidden = false;
    aradas = []
    while (aradas.length < 3) {
        randint = Math.round(Math.random()*count)
        if (!aradas.includes(randint)){
            aradas.push(randint)
        }
    }
    aradas.sort((a, b) => a - b)

    for (var i = 0; i < aradas.length; i++) {
        $('#routeSel_list').append(`<div class="routeSel_item">
        <span class="routeSel_item_label">Маршрут №${aradas[i]+1}</span>
        <span class="routeSel_item_btn" id="routeSel_item_btn_${aradas[i]+1}">Выбрать</span>
        </div>`)
    }
    $('.routeSel_item_btn').click(function(){
        console.log(this.id.split('_')[3])
        document.getElementById(`routeSel`).hidden = true;
        mp.trigger('selectedRouteCEFdata', this.id.split('_')[3])
    })
}

$('#routeSel_closebtn').click(function(){
    document.getElementById(`routeSel`).hidden = true;
})