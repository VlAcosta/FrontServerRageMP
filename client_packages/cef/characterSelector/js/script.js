let countchar = 0;
let selected = 0;
function takeDatas(donate, character, nickname, lvl, exp, fraction, money, bank, dateBan, dateEndBan, adminBan, reasonBan){
    document.getElementById("DPcount").innerHTML = `${new Intl.NumberFormat('ru-RU').format(donate)} DP`;
    if (fraction == 'none') fraction = 'Безработный';
    $("#characters").append(`<div class="character" id="char_${character}" onclick="selectChar(${character})">
    <span class="playername">${nickname.replace('_', ' ')}</span>
    <div class="playermoney">
        <div class="money">
            <img draggable="false" src="./img/money1.svg" class="moneylogo">
            <span class="moneycount">${new Intl.NumberFormat('ru-RU').format(money)}</span>
        </div>
        <div class="bank">
            <img draggable="false" src="./img/money2.svg" class="moneylogo">
            <span class="bankcount">${new Intl.NumberFormat('ru-RU').format(bank)}</span>
        </div>
    </div>
    <div class="fractionname">
        Организация: <span class="fractionlabel">${fraction}</span>
    </div>
    <div class="lvl">
        <img draggable="false" src="./img/lvl_back.svg" alt="">
        <div class="lvl_label">${lvl}</div>
    </div>
</div>`)
    countchar += 1;
    if (countchar == 3){
        $("#character_nul").remove()
    }
};

function loadPage() {
    //takeDatas(1000, 12, "Oscar_Moore", 10, 100, 'LSPD', 10000, 1403087, 0, 0,'Admin', 'Читы');
    document.getElementById(`applyBtn`).hidden = true;
    
}

function selectChar(pid){
    if (selected > 0) {
        $(`#char_${selected}`).css('filter', 'none');
    } else if (selected == -1 && countchar < 3 ) {
        $(`#character_nul`).css('filter', 'none');
    }
    selected = pid;
    mp.trigger('preLoadCharacter', selected)
    $(`#char_${pid}`).css('filter', 'drop-shadow(0px 0px 9px #668AE6)');
    document.getElementById(`applyBtn`).hidden = false;
};

$("#character_nul").click(function(){
    if (selected > 0) {
        $(`#char_${selected}`).css('filter', 'none');
    }
    selected = -1;
    $(`#character_nul`).css('filter', 'drop-shadow(0px 0px 9px #668AE6)');
    document.getElementById(`applyBtn`).hidden = false;
})




$("#applyBtn").click(function(){
    if(countchar >= 3 && selected == -1) return
    if (selected > 0) {
        mp.trigger('loadSelectedCharacter', selected);
    } else if (selected == -1 && countchar < 3) {
        mp.trigger('charCreateSelected', selected)
    }
})