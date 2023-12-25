let show = false;
selectedAvehID = -1

setTimeout(() => {
    document.getElementById(`frame`).hidden = true;
    document.getElementById(`allfr`).hidden = true;
    document.getElementById(`regWindow`).hidden = true;
    document.getElementById(`authWindow`).hidden = true;
    document.getElementById(`acceptWindow`).hidden = true;
    document.getElementById(`acceptWindow1`).hidden = true;
    document.getElementById(`acceptWindow2`).hidden = true;
    document.getElementById(`playerInfo`).hidden = true;
    document.getElementById(`accountInfo`).hidden = true;
}, 300);

$('#playersTab').addClass('upmenubutton-active');
editTab('Players');
spawnAdminVehChangeCat('none');
spawnAdminVehChangeType('none');

$('#playersTab').click(() => { 
    $('#playersTab').addClass('upmenubutton-active');

    $('#accountsTab').removeClass('upmenubutton-active');
    $('#reportsTab').removeClass('upmenubutton-active');
    $('#factionTab').removeClass('upmenubutton-active');
    $('#banlistTab').removeClass('upmenubutton-active');
    $('#vehiclesTab').removeClass('upmenubutton-active');
    $('#logsTab').removeClass('upmenubutton-active');
    $('#adminsTab').removeClass('upmenubutton-active');
    $('#settingsTab').removeClass('upmenubutton-active');
    editTab('Players');
});

$('#accountsTab').click(() => { 
    $('#accountsTab').addClass('upmenubutton-active');

    $('#playersTab').removeClass('upmenubutton-active');
    $('#reportsTab').removeClass('upmenubutton-active');
    $('#factionTab').removeClass('upmenubutton-active');
    $('#banlistTab').removeClass('upmenubutton-active');
    $('#vehiclesTab').removeClass('upmenubutton-active');
    $('#logsTab').removeClass('upmenubutton-active');
    $('#adminsTab').removeClass('upmenubutton-active');
    $('#settingsTab').removeClass('upmenubutton-active');
    editTab('Accounts');
});

$('#reportsTab').click(() => { 
    $('#reportsTab').addClass('upmenubutton-active');

    $('#playersTab').removeClass('upmenubutton-active');
    $('#accountsTab').removeClass('upmenubutton-active');
    $('#factionTab').removeClass('upmenubutton-active');
    $('#banlistTab').removeClass('upmenubutton-active');
    $('#vehiclesTab').removeClass('upmenubutton-active');
    $('#logsTab').removeClass('upmenubutton-active');
    $('#adminsTab').removeClass('upmenubutton-active');
    $('#settingsTab').removeClass('upmenubutton-active');
    editTab('Reports');
});

$('#factionTab').click(() => { 
    $('#factionTab').addClass('upmenubutton-active');

    $('#playersTab').removeClass('upmenubutton-active');
    $('#accountsTab').removeClass('upmenubutton-active');
    $('#reportsTab').removeClass('upmenubutton-active');
    $('#banlistTab').removeClass('upmenubutton-active');
    $('#vehiclesTab').removeClass('upmenubutton-active');
    $('#logsTab').removeClass('upmenubutton-active');
    $('#adminsTab').removeClass('upmenubutton-active');
    $('#settingsTab').removeClass('upmenubutton-active');
    editTab('Faction');
});

$('#banlistTab').click(() => {
    $('#banlistTab').addClass('upmenubutton-active');

    $('#playersTab').removeClass('upmenubutton-active');
    $('#accountsTab').removeClass('upmenubutton-active');
    $('#reportsTab').removeClass('upmenubutton-active');
    $('#factionTab').removeClass('upmenubutton-active');
    $('#vehiclesTab').removeClass('upmenubutton-active');
    $('#logsTab').removeClass('upmenubutton-active');
    $('#adminsTab').removeClass('upmenubutton-active');
    $('#settingsTab').removeClass('upmenubutton-active');
    editTab('Banlist');
});

$('#vehiclesTab').click(() => { 
    $('#vehiclesTab').addClass('upmenubutton-active');

    $('#playersTab').removeClass('upmenubutton-active');
    $('#accountsTab').removeClass('upmenubutton-active');
    $('#reportsTab').removeClass('upmenubutton-active');
    $('#factionTab').removeClass('upmenubutton-active');
    $('#banlistTab').removeClass('upmenubutton-active');
    $('#logsTab').removeClass('upmenubutton-active');
    $('#adminsTab').removeClass('upmenubutton-active');
    $('#settingsTab').removeClass('upmenubutton-active');
    editTab('Vehicles');
});

$('#logsTab').click(() => { 
    $('#logsTab').addClass('upmenubutton-active');

    $('#playersTab').removeClass('upmenubutton-active');
    $('#accountsTab').removeClass('upmenubutton-active');
    $('#reportsTab').removeClass('upmenubutton-active');
    $('#factionTab').removeClass('upmenubutton-active');
    $('#banlistTab').removeClass('upmenubutton-active');
    $('#vehiclesTab').removeClass('upmenubutton-active');
    $('#adminsTab').removeClass('upmenubutton-active');
    $('#settingsTab').removeClass('upmenubutton-active');
    editTab('Logs');
});

$('#adminsTab').click(() => { 
    $('#adminsTab').addClass('upmenubutton-active');

    $('#playersTab').removeClass('upmenubutton-active');
    $('#accountsTab').removeClass('upmenubutton-active');
    $('#reportsTab').removeClass('upmenubutton-active');
    $('#factionTab').removeClass('upmenubutton-active');
    $('#banlistTab').removeClass('upmenubutton-active');
    $('#vehiclesTab').removeClass('upmenubutton-active');
    $('#logsTab').removeClass('upmenubutton-active');
    $('#settingsTab').removeClass('upmenubutton-active');
    editTab('Admins');
});

$('#settingsTab').click(() => { 
    $('#settingsTab').addClass('upmenubutton-active');

    $('#playersTab').removeClass('upmenubutton-active');
    $('#accountsTab').removeClass('upmenubutton-active');
    $('#reportsTab').removeClass('upmenubutton-active');
    $('#factionTab').removeClass('upmenubutton-active');
    $('#banlistTab').removeClass('upmenubutton-active');
    $('#vehiclesTab').removeClass('upmenubutton-active');
    $('#logsTab').removeClass('upmenubutton-active');
    $('#adminsTab').removeClass('upmenubutton-active');
    editTab('Settings');

    mp.trigger('adminSettingsTabupdate');
});

$('#regButton').click(() => { // Регистрация
    if((!/^[0-9a-zA-Z!@#$%^&*()]+$/.test($('#apassReg').val())) || (($('#apassReg').val().length) < 8)) {
        console.log('Пароль от 8 английских букв включая специальные символы `!@#$%^&*()`');
        mp.trigger('playerNotify', 'Пароль от 8 английских букв включая специальные символы `!@#$%^&*()` (Должен отличаться от пароля Аккаунта)', `yellow`);
        return
    } else if ($('#apassReg').val().length > 30) {
        console.log('Пароль слишком длинный');
        mp.trigger('playerNotify', `Пароль слишком длинный`, `yellow`);
        return
    }
    mp.trigger('regAdminPass', $('#apassReg').val());
});

$('#authButton').click(() => { // Авторизация
    if(($('#apass').val().length) < 1) {
        console.log('Введите пароль');
        mp.trigger('playerNotify', 'Введите пароль', `yellow`);
        return
    }
    mp.trigger('authAdminPass', $('#apass').val());
});

$('#logOutButton').click(() => { // Log Out
    showMain(false);
    showAccept('logOutAdmin', 'выйти с админки');
});

$('#tpToPlayer').click(() => { // ТП к игроку
    showMain(false);
    showAccept('tpToPlayer', 'телепортироваться к игроку');
});

$('#tpGetHerePlayer').click(() => { // ТП игрока
    showMain(false);
    showAccept('tpGetHerePlayer', 'телепортировать игрока к себе');
});

$('#slapPlayer').click(() => { // Слап игрока
    showMain(false);
    showAccept('slapPlayer', 'слапнуть игрока');
});

$('#tpPlayerDimZero').click(() => { // Dim 0
    showMain(false);
    showAccept('tpPlayerDimZero', 'телепортировать игрока в 0 измерение');
});

$('#setHPPlayer').click(() => { // HP
    showMain(false);
    showAccept1('setHPPlayer', 'изменить HP игрока', 'Кол-во HP (0-100)');
});

$('#setArmorPlayer').click(() => { // Armor
    showMain(false);
    showAccept1('setArmorPlayer', 'измененить броню игрока', 'Кол-во брони (0-100)');
});

$('#setSkinPlayer').click(() => { // Skin
    showMain(false);
    showAccept1('setSkinPlayer', 'измененить скин игрока', 'Скин');
});

$('#givePlayerMoney').click(() => { // Money
    showMain(false);
    showAccept1('givePlayerMoney', 'выдать игроку валюту', 'Деньги');
});

$('#makePlayerAdmin').click(() => { // makeAdmin
    showMain(false);
    showAccept1('makePlayerAdmin', 'выдать игроку админку', 'Уровень админки');
});

//--------------------------------------------- Наказания

$('#mutePlayer').click(() => { // Mute
    showMain(false);
    showAccept2('mutePlayer', 'заглушить игрока', 'Количество минут', 'Причина');
});

$('#kickPlayer').click(() => { // Kick
    showMain(false);
    showAccept1('kickPlayer', 'кикнуть игрока', 'Причина');
});

$('#jailPlayer').click(() => { // Jail
    showMain(false);
    showAccept2('jailPlayer', 'посадить игрока в деморган', 'Количество минут', 'Причина')
});

$('#warnPlayer').click(() => { // Warn
    showMain(false);
    showAccept1('warnPlayer', 'выдать варн игроку', 'Причина');
});

$('#banPlayer').click(() => { // Ban
    showMain(false);
    showAccept2('banPlayer', 'заблокировать игрока', 'Количество дней', 'Причина')
});

$('#hardBan').click(() => { // Hard Ban
    showMain(false);
    showAccept1('hardBan', 'выдать игроку Hard Ban', 'Причина');
});

//--------------------------------------------- Снятие Наказания

$('#unMutePlayer').click(() => { // unMute
    showMain(false);
    showAccept1('unMutePlayer', 'снять игроку мут', 'Причина');
});

$('#unJailPlayer').click(() => { // unJail
    showMain(false);
    showAccept1('unJailPlayer', 'освободить игрока из деморгана', 'Причина')
});

$('#unWarnPlayer').click(() => { // unWarn
    showMain(false);
    showAccept1('unWarnPlayer', 'снять варн игроку', 'Причина');
});

$('#unBanPlayer').click(() => { // unBan
    showMain(false);
    showAccept1('unBanPlayer', 'разблокировать игрока', 'Причина')
});

$('#pmPlayerSend').click(() => { // PM
    if($('#pmPlayer').val().length < 1) return
    showAccept('pmPlayerSend', `отправить игроку сообщение: ${$('#pmPlayer').val()}`);
    showMain(false);
});

$('#acceptButtonNo').click(() => { // Accept No
    document.getElementById(`acceptWindow`).hidden = true;
    showMain(true);
    accept = "";
});

$('#acceptButtonYes').click(() => { // Accept Yes
    document.getElementById(`acceptWindow`).hidden = true;
    showMain(true);
    console.log(accept)
    if (accept == "logOutAdmin") {
        showMain(false);
        mp.trigger('logOutAdmin');
        showAuth(true);
    } else mp.trigger('adminPanelCommand', accept, selectedPid, $('#pmPlayer').val(), "");
    accept = "";
});

$('#acceptButton1No').click(() => { // Accept No
    document.getElementById(`acceptWindow1`).hidden = true;
    document.getElementById("accept1text").value = "";
    showMain(true);
    accept1 = "";
});

$('#acceptButton1Yes').click(() => { // Accept Yes
    if($('#accept1text').val().length < 1) return mp.trigger('playerNotify', 'Заполните поле', `yellow`);
    document.getElementById(`acceptWindow1`).hidden = true;
    showMain(true);
    console.log(accept1);
    mp.trigger('adminPanelCommand', accept1, selectedPid, $('#accept1text').val(), "");
    document.getElementById("accept1text").value = "";
    accept1 = "";
});

$('#acceptButton2No').click(() => { // Accept No
    document.getElementById(`acceptWindow2`).hidden = true;
    document.getElementById("accept2text1").value = "";
    document.getElementById("accept2text2").value = "";
    showMain(true);
    accept2 = "";
});

$('#acceptButton2Yes').click(() => { // Accept Yes
    if(($('#accept2text1').val().length < 1) || ($('#accept2text2').val().length < 1)) return mp.trigger('playerNotify', 'Заполните поля', `yellow`);
    document.getElementById(`acceptWindow2`).hidden = true;
    showMain(true);
    console.log(accept2)
    mp.trigger('adminPanelCommand', accept2, selectedPid, $('#accept2text1').val(), $('#accept2text2').val());
    document.getElementById("accept2text1").value = "";
    document.getElementById("accept2text2").value = "";
    accept2 = "";
});

$('#saveButton').click(() => { // Save settings
    mp.trigger('adminSettingsFromPanel', $('#showAuthInChat').is(":checked"), $('#hideRedTag').is(":checked"), $('#enableCustomTag').is(":checked"), $('#customRedTag').val());
});

function updateSettingsTabValue(value1, value2, value3, value4){
    $('#showAuthInChat').attr("checked", value1);
    $('#hideRedTag').attr("checked", value2);
    $('#enableCustomTag').attr("checked", value3);
    $('#customRedTag').val(value4)
    
}

//foo()
function foo() {
    showMain(true);
    showPanel(true);
    $('#vehiclesTab').click()
    permissionsEdit(12);
    updatePlayerDatabyID(1,'Oscar_Moore',33,1,1,'Armatov','HALOFRAS',1000,10000, 1 , 3);
}

function showPanel(value) {
    document.getElementById(`allfr`).hidden = !value;
}

function showMain(value) {
    document.getElementById(`frame`).hidden = !value;
}

function showAccept(value1, value2) {
    accept = value1;
    document.getElementById('acceptNoteText').innerHTML = `${value2}`;
    document.getElementById(`acceptWindow`).hidden = false;
}

function showAccept1(value1, value2, label) {
    accept1 = value1;
    $('#accept1text').attr('placeholder', label);
    document.getElementById('acceptNoteText1').innerHTML = `${value2}`;
    document.getElementById(`acceptWindow1`).hidden = false;
}

function showAccept2(value1, value2, label1, label2) {
    accept2 = value1;
    $('#accept2text1').attr('placeholder', label1);
    $('#accept2text2').attr('placeholder', label2);
    document.getElementById('acceptNoteText2').innerHTML = `${value2}`;
    document.getElementById(`acceptWindow2`).hidden = false;
}

function showReg(value) {
    document.getElementById(`regWindow`).hidden = !value;
}

function showAuth(value) {
    document.getElementById(`authWindow`).hidden = !value;
}

function updatePlayerDatabyID(id, playerNickname, pid, lvl, playHours, login, socialclub, money, bank, warn, warnsall) {
    selectedPid = pid;
    document.getElementById('isOnline').innerHTML = `Да (ID: ${id})`;
    document.getElementById('charInfo').innerHTML = `${playerNickname.replace('_', ' ')} (PID: ${pid})`;
    document.getElementById('charLvl').innerHTML = `${lvl}`;
    document.getElementById('playHour').innerHTML = `${playHours}`;
    document.getElementById('warnAct').innerHTML = `${warn}`;
    document.getElementById('allWarns').innerHTML = `${warnsall}`;
    document.getElementById('charLogin').innerHTML = `${login}`;
    document.getElementById('playerSocialClub').innerHTML = `${socialclub}`;
    document.getElementById('playerMoney').innerHTML = `${new Intl.NumberFormat('de-DE').format(money)}`;
    document.getElementById('playerBank').innerHTML = `${new Intl.NumberFormat('de-DE').format(bank)}`;
    /*document.getElementById('').innerHTML = ``;
    document.getElementById('').innerHTML = ``;*/

    document.getElementById(`playerInfo`).hidden = false;
}

function updatePlayerDatabyNickname(isOnline, id, playerNickname, pid, lvl, playHours, login, socialclub, money, bank, warn, warnsall) {
    selectedPid = pid;
    if(isOnline == 1) {
        document.getElementById('isOnline').innerHTML = `Да (ID: ${id})`;
    } else {
        document.getElementById('isOnline').innerHTML = `Нет`;
    }
    
    document.getElementById('charInfo').innerHTML = `${playerNickname.replace('_', ' ')} (PID: ${pid})`;
    document.getElementById('charLvl').innerHTML = `${lvl}`;
    document.getElementById('playHour').innerHTML = `${playHours}`;
    document.getElementById('warnAct').innerHTML = `${warn}`;
    document.getElementById('allWarns').innerHTML = `${warnsall}`;
    document.getElementById('charLogin').innerHTML = `${login}`;
    document.getElementById('playerSocialClub').innerHTML = `${socialclub}`;
    document.getElementById('playerMoney').innerHTML = `${new Intl.NumberFormat('de-DE').format(money)}`;
    document.getElementById('playerBank').innerHTML = `${new Intl.NumberFormat('de-DE').format(bank)}`;
    /*document.getElementById('').innerHTML = ``;
    document.getElementById('').innerHTML = ``;*/

    document.getElementById(`playerInfo`).hidden = false;
}

function editTab(value) {

    var arr = ["Players", "Accounts", "Reports", "Faction", "Banlist", "Vehicles", "Logs", "Admins", "Settings"];
    arr.forEach(function(item, i, arr) {
        document.getElementById(`tab${item}`).hidden = true;
    })
    document.getElementById(`tab${value}`).hidden = false;
}

function permissionsEdit(value) {
    var arr = ["players", "accounts", "reports", "faction", "banlist", "vehicles", "logs", "admins", "settings"];
    arr.forEach(function(item, i, arr) {
        document.getElementById(`${item}Tab`).hidden = true;
    })
    document.getElementById(`setHPPlayer`).hidden = true;
    document.getElementById(`setArmorPlayer`).hidden = true;
    document.getElementById(`setSkinPlayer`).hidden = true;
    document.getElementById(`buttonsImuch_l`).hidden = true;
    document.getElementById(`givePlayerMoney`).hidden = true;
    document.getElementById(`giveOwnVeh`).hidden = true;
    document.getElementById(`buttonsMakes_l`).hidden = true;
    document.getElementById(`setPlayerFraction`).hidden = true;
    document.getElementById(`makePlayerAdmin`).hidden = true;
    document.getElementById(`warnPlayer`).hidden = true;
    document.getElementById(`banPlayer`).hidden = true;
    document.getElementById(`hardBan`).hidden = true;
    document.getElementById(`unJailPlayer`).hidden = true;
    document.getElementById(`unWarnPlayer`).hidden = true;
    document.getElementById(`unBanPlayer`).hidden = true;
    document.getElementById(`hideRedTagBox`).hidden = true;
    document.getElementById(`customRedTagBox`).hidden = true;



    if (value >= 1) {
        document.getElementById(`playersTab`).hidden = false;
        document.getElementById(`reportsTab`).hidden = false;
        document.getElementById(`logsTab`).hidden = false;
        document.getElementById(`settingsTab`).hidden = false;
    }
    if (value >= 2) {
        document.getElementById(`unJailPlayer`).hidden = false;
    }
    if (value >= 3) {

    }
    if (value >= 4) {
        document.getElementById(`vehiclesTab`).hidden = false;

        document.getElementById(`warnPlayer`).hidden = false;
        document.getElementById(`banPlayer`).hidden = false;
    }
    if (value >= 5) {
        document.getElementById(`factionTab`).hidden = false;

        document.getElementById(`setHPPlayer`).hidden = false;
        document.getElementById(`setSkinPlayer`).hidden = false;
        document.getElementById(`buttonsMakes_l`).hidden = false;
        document.getElementById(`setPlayerFraction`).hidden = false;
        document.getElementById(`hardBan`).hidden = false;
    }
    if (value >= 6) {
        document.getElementById(`accountsTab`).hidden = false;

        document.getElementById(`unWarnPlayer`).hidden = false;
    }
    if (value >= 7) {
        document.getElementById(`buttonsImuch_l`).hidden = false;
        document.getElementById(`givePlayerMoney`).hidden = false;
        document.getElementById(`hideRedTagBox`).hidden = false;
        document.getElementById(`customRedTagBox`).hidden = false;
    }
    if (value >= 8) {
        document.getElementById(`adminsTab`).hidden = false;

        document.getElementById(`makePlayerAdmin`).hidden = false;
        document.getElementById(`unBanPlayer`).hidden = false;
    }
    if (value >= 9) {

    }
    if (value >= 10) {
        document.getElementById(`setArmorPlayer`).hidden = false;
    }
    if (value >= 11) {
        
    }
    if (value >= 12) {
        document.getElementById(`giveOwnVeh`).hidden = false;
    }
}

function spawnAdminVehChangeCat(tab){
    var arr = ["Boats", "Commercials", "Compacts", "Coupes", "Cycles", "Emergency", "Helicopters", "Industrial", "Military", "Motorcycles", "Muscle", "OffRoad", "OpenWheel", "Planes", "SUVs", "Sedans", "Service", "Sports", "SportsClassic", "Super", "Utility", "Vans"];
    arr.forEach(function(item, i, arr) {
        $(`#spawnAdminVeh_Default_Categ_${item}`).hide()
    })
    if (tab != 'none'){
        $(`#spawnAdminVeh_Default_Categ_${tab}`).show()
    }
}

function adminVehAddInList(id, model, aname) {
    $('#adminVehList_Box_Data').append(`<div class="adminVeh_Info_class" id="adminVeh_Info_${id}">
    <span class="aVehID">${id}</span>
    <span class="aVehModel">${model}</span>
    <span class="aVehAname">${aname}</span>
</div>`)
    $('.adminVeh_Info_class').click(function() {
        selectedAvehID = this.id.split('_')[2]
        $('.adminVeh_Info_class').css('background', 'none');
        $(this).css('background', 'rgba(129, 129, 129, 0.8)');
    })
}

function spawnAdminVehChangeType(tab){
    var arr = ["Default", "DLC"];
    arr.forEach(function(item, i, arr) {
        $(`#spawnAdminVeh_${item}`).hide()
    })
    if (tab != 'none'){
        $(`#spawnAdminVeh_${tab}`).show()
    }
}


$("#searchplayer").keyup(function(event) {
    if (event.keyCode === 13) {
        ddvalue = 'null';
        let ddvalue1 = document.getElementsByName('playercat')[0].checked;
        let ddvalue2 = document.getElementsByName('playercat')[1].checked;
        let ddvalue3 = document.getElementsByName('playercat')[2].checked;
        let ddvalue4 = document.getElementsByName('playercat')[3].checked;
        if (ddvalue1) {
            ddvalue = 'id';
        } else if (ddvalue2) {
            ddvalue = 'nickname';
        } else if (ddvalue3) {
            ddvalue = 'login';
        } else if (ddvalue4) {
            ddvalue = 'pid';
        }
        console.log(ddvalue)
        if (ddvalue == 'id') {
            mp.trigger('ClientGetDataPlayer', 'id', document.getElementById("searchplayer").value)
        } else if (ddvalue == 'nickname') {
            mp.trigger('ClientGetDataPlayer', 'nickname', document.getElementById("searchplayer").value)
        } else if (ddvalue == 'login') {
            mp.trigger('ClientGetDataPlayer', 'login', document.getElementById("searchplayer").value)
        } else if (ddvalue == 'pid') {
            mp.trigger('ClientGetDataPlayer', 'pid', document.getElementById("searchplayer").value)
        }
    }
});

$("#searchaccounts").keyup(function(event) {
    if (event.keyCode === 13) {
        dvalue = 'null';
        let dvalue1 = document.getElementsByName('accountcat')[0].checked;
        let dvalue2 = document.getElementsByName('accountcat')[1].checked;
        if (dvalue1) {
            dvalue = 'login';
        } else if (dvalue2) {
            dvalue = 'socialclub';
        }
        console.log(dvalue)
        if (dvalue == 'login') {
            mp.trigger('ClientGetDataAccount', 'login', document.getElementById("searchaccounts").value)
        } else if (dvalue == 'socialclub') {
            mp.trigger('ClientGetDataAccount', 'socialclub', document.getElementById("searchaccounts").value)
        }
    }
});

$("#apass").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#authButton").click();
    }
});

$(".spawnAdminVeh_VehBtn").click(function() {
    $('#spawnAdminVehInsert_Input').val(this.id.split('_')[2])
})

$('#spawnAdminVehInsert_Save').click(function() {
    if ($('#spawnAdminVehInsert_Input').val().length < 1) return
    mp.trigger('adminVehSpawnPanel', $('#spawnAdminVehInsert_Input').val())
})

$('.spawnAdminVeh_Categ_Btn').click(function() {
    spawnAdminVehChangeCat(this.id.split('_')[1])
})

$('.defaDLC_Btns').click(function() {
    spawnAdminVehChangeType(this.id.split('_')[1])
})

$('#adminVehList_ManageBtn_Refresh').click(function() {
    $('#adminVehList_Box_Data').empty()
    mp.trigger('adminVehList_RefreshCall')
})

$('#adminVehList_ManageBtn_Delete').click(function() {
    if (selectedAvehID == -1 || $('#adminVehList_Box_Data').length == 0) return
    $(`#adminVeh_Info_${selectedAvehID}`).remove()
    mp.trigger('adminVehList_DeleteVeh', selectedAvehID)
    selectedAvehID = -1
})

$('#adminVehList_ManageBtn_DeleteAll').click(function() {
    $('#adminVehList_Box_Data').empty()
    mp.trigger('adminVehList_DeleteAllVeh')
    selectedAvehID = -1
})