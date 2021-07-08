const Parser = require('rss-parser');
const parser = new rssParser();

const googleTrend = async () => {
    const feed = await parser.parseURL("https://trends.google.com/trends/trendingsearches/daily/rss?geo=KR");
    console.log(feed)
};

export default googleTrend