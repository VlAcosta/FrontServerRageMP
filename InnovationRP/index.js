const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (input) => {
    if (input.charAt(0) == '/') {
        const data = input.substr(1).split(' '); // убираем слеш и преобразовываем строку в массив разделяя по пробелам
        const commandName = data[0];
        const args = data.slice(1); // из data убираем первый элемент - название команды и получаем массив только аргументов args
        mp.events.call(`console:${commandName}`, args); // передаем args в обработчик команды
    }
});


///const fs = require("fs");
require('./Commands/admin');
require('./Commands/player');
require('./events/OnPlayerConnect');
require('./events/events');
require('./events/AccEvents');
require('./modules/voice');
require('./events/animation.js');
require('./fraction/index');
require('./works/farm_1_get.js')
global.db = require('./modules/db');

db.Connect(function(e) {
    if (!e) {
        console.log(`DB connection success!`);
    } else {
        console.log(`DB connection error - ${e}`);
    }
})

mp.events.add("console:help", () => {
    console.log('Список консольных комманд:');
    console.log('-  /players * Информация о игроках на сервере');
});

mp.events.add("console:msg", (args) => {
    mp.players.broadcast(`!{F13F37}${args.join(' ')}`);
    console.log('Сообщение отправлено всем игрокам');
});


mp.events.add("console:players", () => {
    let count = 0;
    console.log('Игроки онлайн:');
    mp.players.forEach((player) => {
        if (!player.authReady) return
        console.log(`${player.name} (ID: ${player.id})`);
        count++;
    });
    console.log(`Всего игроков: ${count}`);
});