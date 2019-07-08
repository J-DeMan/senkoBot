const Discord = require('discord.js');
const secretConfig = require('./config/secretConfig');
const senkoBot = new Discord.Client();

senkoBot.on("ready", () => {
    console.log('Bot online');
});

senkoBot.on("message", msg=>{
    if (msg.content == "hello") {
        msg.reply("hey");
    }
});

senkoBot.login(secretConfig.token);