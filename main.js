const mineflayer = require("mineflayer");

const main = mineflayer.createBot({
    host: 'mc.legendsGrief.ru',
    port: 25565,
    username: 'Catilka',
    version: '1.20.1'
});

console.warn = () => {};

let windowOpened = false;
let windowOpened2 = false;

main.on('spawn', async () => {
    console.log('Бот успешно подключен к серверу Minecraft');
    main.chat("/login 30201220")
    main.activateItem(false);
});

main.once('windowOpen', (window) => {
    windowOpened = true;
});
if (windowOpened = true) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Даем 1 секунду на открытие окна
    main.clickWindow(22, 0, 0);
    console.log("кликнул во второе меню")
    windowOpened2 = true;
}
if (windowOpened2 = true) {
    console.log("запускаю 2 меню")
    await new Promise(resolve => setTimeout(resolve, 1000)); // Даем 1 секунду на открытие окна
    main.clickWindow(1, 0, 0);
}

main.on('messagestr', async (messagestr) => {
    console.log(messagestr);
});
main.on('breath', (packet) => {
    if (packet && packet.metadata && packet.metadata[1] && packet.metadata[1].value) {
        const oxygenLevel = Math.round(packet.metadata[1].value / 15);
    }
});
main.once('spawn', () => {

    // Двигаться вперед при спавне
    main.setControlState('forward', true);

    // Через некоторое время остановить движение
    setTimeout(() => {
        main.clearControlStates();
    }, 5000); // Остановить движение через 5 секунд
});

