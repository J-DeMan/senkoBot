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
        case 'search':
            mal.getInfoFromName(message.content.substring(config.prefix.length + 6))
                .then((data) => message.reply(data.url))
                .catch((err) => console.log(err));
            break;
        case 'stats':
            if (args.length > 2) {
                message.reply("To many arguments. Should be 1.");
            } else {
                console.log(args[1]);
                mal.getWatchListFromUser(args[1], 'anime')
                    .then((data) => {
                        let stats = args[1] + "'s list stats:\n";
                        stats += "TV shows: " + data.stats.TV + "\n";
                        stats += "Movies: " + data.stats.Movies + "\n";
                        stats += "OVAs: " + data.stats.OVA + "\n";
                        stats += "Specials: " + data.stats.Spcl + "\n";
                        stats += "Episodes of anime watched: " + data.stats.Eps + "\n";
                        stats += "Days of anime watched: " + data.stats.Days + "\n";
                        stats += "Mean score: " + data.stats.MeanScore + "\n";
                        stats += "Score deviation: " + data.stats.ScoreDev + "\n";
                        message.reply(stats);
                    })
                    .catch((err) => console.log(err));
            }
            break;
    }
});

senkoBot.login(secretConfig.token);