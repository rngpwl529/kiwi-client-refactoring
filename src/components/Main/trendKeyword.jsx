import { React } from 'react';
// const Parser = require('rss-parser');
// const parser = new Parser();

const TrendKeyword = () => {

    // const feed = await parser.parseURL("https://trends.google.com/trends/trendingsearches/daily/rss?geo=KR");
    const keywords = [
        '리니지M',               '닌텐도 스위치',
        '이탈리아 스페인',       '델타변이',
        '현대백화점 무역센터점', '윤지선',
        '유재석',                '코로나 확진자 현황',
        '코로나 확진자',         '확진자',
        '임승호',                '벨기에 대사 부인',
        '용인 곰 탈출',          '대깨문',
        '너는 나의 봄',          '김광현',
        '이낙연',                '신지민',
        '싸이월드',              '전두환'
      ]

    return (<div>
            {keywords.forEach((keyword)=>(<div>{keyword}</div>))}
        </div>)
}

export default TrendKeyword;