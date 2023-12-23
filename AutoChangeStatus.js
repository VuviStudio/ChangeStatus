const { Client, Intents } = require('discord.js-selfbot-v13');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    checkUpdate: false,
});

const statuses = [
    { status: 'online', message: 'First1' },
    { status: 'online', message: 'Second' },
    { status: 'online', message: 'Third' },
];

let currentIndex = 0;
let interval;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    cycleStatus();
});

function cycleStatus() {
    interval = setInterval(() => {
        if (currentIndex >= statuses.length) {
            currentIndex = 0; 
        }

        const { status, message } = statuses[currentIndex];

        client.user.setActivity(message);

        console.log(`Changed status to ${status} with message: ${message}`);
        
        currentIndex++;
    }, 10000); 
}


client.login('urtoken');