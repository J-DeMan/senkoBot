const mal = require("mal-scraper");

const user = function () {};

/**
 * Finds user stats.
 *
 * @param id                    User's ID.
 * @returns {Promise<string>}   User stats.
 */
user.prototype.stats = async function (id) {
    let data = await mal.getWatchListFromUser(id, 'anime');

    // format the response
    let result;
    result = id + "'s list stats:\n";
    result += "TV shows: " + data.stats.TV + "\n";
    result += "Movies: " + data.stats.Movies + "\n";
    result += "OVAs: " + data.stats.OVA + "\n";
    result += "Specials: " + data.stats.Spcl + "\n";
    result += "Episodes of anime watched: " + data.stats.Eps + "\n";
    result += "Days of anime watched: " + data.stats.Days + "\n";
    result += "Mean score: " + data.stats.MeanScore + "\n";
    result += "Score deviation: " + data.stats.ScoreDev + "\n";

    return result;
};

module.exports = new user();