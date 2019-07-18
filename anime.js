const mal = require("mal-scraper");

var anime = function () {};

anime.prototype.search = async function (title) {
    let result = "";
    await mal.getInfoFromName(title)
        .then((data) => {result = data.url})
        .catch((err) => {result = err});
    return result;
};

module.exports = new anime();