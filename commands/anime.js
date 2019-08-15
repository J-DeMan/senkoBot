const mal = require("mal-scraper");

var anime = function () {};

/**
 * Searches for an anime by title.
 *
 * @param title                 Title to search for.
 * @returns {Promise<string>}   Anime url.
 */
anime.prototype.search = async function (title) {
    let result = "";
    await mal.getInfoFromName(title)
        .then((data) => {result = data.url})
        .catch((err) => {result = err});
    return result;
};

module.exports = new anime();