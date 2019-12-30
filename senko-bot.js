// get discord and config resources
const discord = require('discord.js');
const secretConfig = require('./config/secretConfig.json');
const config = require('./config/config.json');

// command modules
const anime = require("./commands/anime.js");
const user = require("./commands/user.js");
const list = require("./commands/list.js");

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
            await message.reply("Not implemented");
            break;
        case 'search':
            let title = message.content.substring(config.prefix.length + 7);
            await message.reply(await anime.search(title));
            break;
        case 'stats':
            if (args.length > 2) {
                await message.reply("To many arguments. Should be 1.");
            } else {
                await message.reply(await user.stats(args[1]));
            }
            break;
        case 'comparePTW':
            args.shift();
            await message.reply(await list.comparePTW(args));
            break;
    }
});

senkoBot.login(secretConfig.token).then();