// get discord and config resources
const discord = require('discord.js');
const mal = require("mal-scraper");
const secretConfig = require('./config/secretConfig.json');
const config = require('./config/config.json')

// create the discord client
const senkoBot = new discord.Client();

// log ready status to console
senkoBot.on("ready", () => {
    console.log('Bot online');
});

// listen for messages
senkoBot.on("message", message=>{
    let args = message.content.substring(config.prefix.length).split(" ");

    switch(args[0]){
        case 'help':
            //TODO: help command
            message.reply("Not implemented");
            break;
    }
});

senkoBot.login(secretConfig.token);