let g_bIslandLoaded = false;

mp.keys.bind(0x72 /* F3 */, false, () => {
    g_bIslandLoaded = !g_bIslandLoaded;
    mp.game.invoke("0x9A9D1BA639675CF1", "HeistIsland", g_bIslandLoaded);
    mp.gui.chat.push(`Island ${g_bIslandLoaded ? "loaded" : "unloaded"}`);
});

mp.events.add('playerNotify', (data1, data2) => {
    //notifyBrowser.execute(`showNotify("${data1}", "${data2}");`);
    if (data2 == 'blue') hudBrows.execute(`showNotify("${data1} (replace)", "info");`);
    else if (data2 == 'red') hudBrows.execute(`showNotify("${data1} (replace)", "no");`);
    else if (data2 == 'yellow') hudBrows.execute(`showNotify("${data1} (replace)", "info");`);
    else if (data2 == 'green') hudBrows.execute(`showNotify("${data1} (replace)", "yes");`);
    else hudBrows.execute(`showNotify("${data1}", "${data2}");`);
});



mp.events.add('updateTimeServ', (hour, minute, second, day, month, year) => {
    mp.game.time.setClockTime(parseInt(hour), parseInt(minute), parseInt(second));
    //notifyBrowser.execute(`showNotify("${day} ${month} ${year}", "blue");`);
    mp.game.time.setClockDate(parseInt(day), parseInt(month), parseInt(year));
});

