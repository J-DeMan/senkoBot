const mal = require("mal-scraper");

const anime = function () {};

/**
 * Searches for an anime by title.
 *
 * @param title                 Title to search for.
 * @returns {Promise<string>}   Anime url.
 */
anime.prototype.search = async function (title) {
    let data = await mal.getInfoFromName(title);
    return data.url;
};

module.exports = new anime();