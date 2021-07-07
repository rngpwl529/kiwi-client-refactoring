import googleTrend from '../../utils/googleTrend';

const trendKeyword = async () => {

    const keywords = await googleTrend();

    return (<div>
        {keywords.slice(0,10).forEach((keyword)=>(<div>{keyword}</div>))}
    </div>)
}

export default trendKeyword;