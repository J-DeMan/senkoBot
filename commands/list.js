const list = function () {};

const axios = require("axios");

/**
 * Returns a users anime list.
 *
 * @param user                  MyAnimeList user ID.
 * @param listFilter            Optional List filter (all, watching, onhold, dropped, plantowatch, ptw).
 * @returns []                  Array of anime urls sorted by score.
 */
const getList = async function (user, listFilter='all') {
    // Use a RESTFUL call to use API to filter. This is not supported with mal-scraper.
    let url = `https://api.jikan.moe/v3/user/${user}/animelist/${listFilter}`;

    let response = await axios.get(url);

    let urls = [];
    for (let anime of response.data.anime) {
        urls.push(anime.url);
    }
    return urls;
};

list.prototype.comparePTW = async function (users) {

    let lists = [];
    for (let user of users) {
        let usrPtwList = await getList(user, 'plantowatch');
        // usrPtwList = {user: usrPtwList};
        lists.push(usrPtwList);
    }

    let intersection = lists[0];
    lists.shift();
    for (let list of lists) {
        intersection = intersection.filter(value => list.includes(value));
    }

    let result = "Plan to watch anime shared:\n";
    result += intersection.join('\n');
    return result;
};


module.exports = new list();