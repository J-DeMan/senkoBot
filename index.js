const Discord = require('discord.js');
const secretConfig = require('./config/secretConfig');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log('Bot online');
});

bot.on("message", msg=>{
    if (msg.content == "hello") {
        msg.reply("hey");
    }
});

bot.login(secretConfig.token);