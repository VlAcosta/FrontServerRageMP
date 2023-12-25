global.localplayer = mp.players.local;

// Chat
mp.gui.chat.show(false);
global.chatbox = mp.browsers.new('package://player/chat/index.html');
require('./player/chat/chat.js');
chatbox.markAsChat();

require('./bind');
require('./admin/index');
require('./admin/esp');
require('./admin/panel');
require('./player/hud.js');
require('./player/chat/chat.js');
require('./player/character.js');
require('./player/charselection.js');
require('./player/finger.js');
require('./player/voice.js');
require('./player/OnPlayerConnect.js');
require('./player/ZoneManager.js');
require('./player/zones.js');
require('./events/events.js');
require('./events/cameras.js');
require('./events/talkNPC.js');
require('./events/rentVehicle.js')
require('./npc/index.js');
require('./works/farm1.js')

require('./customtags');
require('./fly.js');
require('./indicator_car');
require('./blips');
// Tuning
require("./nativeui");
require("./CarTuner");


setInterval(function() {
    //var name = (localplayer.getVariable('REMOTE_ID') == undefined) ? `Не авторизован` : `Игрок №${localplayer.getVariable("REMOTE_ID")}`;
    mp.discord.update('', '');
}, 10000);