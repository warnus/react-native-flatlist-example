import X2JS from 'x2js'

const daum_url = 'https://media.daum.net/syndication/today_sisa.rss'


export const fetchHotEntry = () => {
    return fetchRss(daum_url)
}


const fetchRss = async (url) => {
    const response = await fetch(url)
    const rssText = await response.text()
    const x2js = new X2JS()
    const rss = x2js.xml2js(rssText)
    return rss.rss.channel
}
