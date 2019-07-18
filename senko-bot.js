// get discord and config resources
const discord = require('discord.js');
const mal = require("mal-scraper");
const secretConfig = require('./config/secretConfig.json');
const config = require('./config/config.json')
const anime = require("./anime.js");
const user = require("./user.js");

// create the discord client
const senkoBot = new discord.Client();

// log ready status to console
senkoBot.on("ready", () => {
    console.log('Bot online');
});

// listen for messages
senkoBot.on("message", async message=> {
    let args = message.content.substring(config.prefix.length).split(" ");

    switch(args[0]){
        case 'help':
            //TODO: help command
            message.reply("Not implemented");
            break;
        case 'search':
            let title = message.content.substring(config.prefix.length + 7);
            message.reply(await anime.search(title));
            break;
        case 'stats':
            if (args.length > 2) {
                message.reply("To many arguments. Should be 1.");
            } else {
                message.reply(await user.stats(args[1]));
            }
            break;
    }
});

senkoBot.login(secretConfig.token);