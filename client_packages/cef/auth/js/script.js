//mp.trigger('loginToClient', $('#login').val(), $('#pass').val());
//mp.trigger('playerNotify', `Логин слишком длинный`, `yellow`);
//mp.trigger('playerNotify', 'Пароль от 8 английских букв включая специальные символы `!@#$%^&*()`', `yellow`);
//mp.trigger('registerToClient', $('#reglogin').val(), $('#regemail').val(), $('#regpass').val());


function foo() {
    changeTabLog()
}


$('#signin_btn').click(() => { //Авторизация

    authlogin = $('#authlogin').val()
    authpass = $('#authpass').val()

    if((authlogin.length) < 1 || (authpass.length) < 1) {
        errorMsg('Заполните все поля')
        return 
    }
    mp.trigger('loginToClient', authlogin, authpass);
    setTimeout(() => {
        $('#pass').val('')
    }, 200);
});


$('#signup_btn').click(() => { //Регистрация

    reglogin = $('#reglogin').val()
    regpass = $('#regpass').val()
    regrpass = $('#regrpass').val()
    regemail = $('#regemail').val()
    regpromo = $('#regpromo').val()


    if((reglogin.length) < 1 || (regemail.length) < 1 || (regpass.length) < 1 || (regrpass.length) < 1) {
        errorMsg('Заполните все поля')
        return 
    }
    if((!/^[A-z0-9]+$/.test(reglogin)) || ((reglogin.length) < 5)) {
        errorMsg('Логин от 5 английских букв либо цифр');
        return
    } else if (reglogin.length > 30) {
        errorMsg('Логин слишком длинный');
        return
    }

    if((!/^[0-9a-zA-Z!@#$%^&*()]+$/.test(regpass)) || ((regpass.length) < 8)) {
        errorMsg('Пароль от 8 английских букв включая специальные символы `!@#$%^&*()`');
        return
    } else if (regpass.length > 30) {
        errorMsg('Пароль слишком длинный');
        return
    }

    if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test($('#regemail').val())){
        errorMsg('Введите корректный E-mail');
        return
    }

    if (regpass != regrpass) {
        errorMsg('Пароли должны совпадать');
        return
    }
    console.log('Все ок')
    mp.trigger('registerToClient', reglogin, regemail, regpass);
});


function errorMsg(message){
    $("#errorBlock").css("opacity", "1");
    $("#error_text").text(message);

    setTimeout(() => {
        $("#errorBlock").css("opacity", "0");
    }, 5000);
}



function changeTabLog(){
    $('#regWindow').hide()
    $('#passwWindow').hide()
    $('#logWindow').show()

    $('#btn_log').css("opacity", "1");
    $('#btn_reg').css("opacity", ".4");
    $('#btn_pass').css("opacity", ".4");
}

function changeTabReg(){
    $('#logWindow').hide()
    $('#passwWindow').hide()
    $('#regWindow').show()

    $('#btn_log').css("opacity", ".4");
    $('#btn_reg').css("opacity", "1");
    $('#btn_pass').css("opacity", ".4");
}

function changeTabPass(){
    $('#regWindow').hide()
    $('#logWindow').hide()
    $('#passwWindow').show()

    $('#btn_log').css("opacity", ".4");
    $('#btn_reg').css("opacity", ".4");
    $('#btn_pass').css("opacity", "1");
}

$("#authlogin").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#signin_btn").click();
    }
});

$("#authpass").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#signin_btn").click();
    }
});