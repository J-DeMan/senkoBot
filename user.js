const mal = require("mal-scraper");

var user = function () {};

user.prototype.stats = async function (id) {
    let result = "";
    await mal.getWatchListFromUser(id, 'anime')
        .then((data) => {
            result = id + "'s list stats:\n";
            result += "TV shows: " + data.stats.TV + "\n";
            result += "Movies: " + data.stats.Movies + "\n";
            result += "OVAs: " + data.stats.OVA + "\n";
            result += "Specials: " + data.stats.Spcl + "\n";
            result += "Episodes of anime watched: " + data.stats.Eps + "\n";
            result += "Days of anime watched: " + data.stats.Days + "\n";
            result += "Mean score: " + data.stats.MeanScore + "\n";
            result += "Score deviation: " + data.stats.ScoreDev + "\n";
        })
        .catch((err) => {
            result = err;
        });
    return result;
};

module.exports = new user();