const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async () => {
    const feed = await parser.parseURL("https://trends.google.com/trends/trendingsearches/daily/rss?geo=KR");
    return feed.items.map((item)=>item.title);
};