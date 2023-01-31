import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    article = [
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Hanan Zaffar, Jyoti Thakur",
            "title": "Gandhi’s 150-day march is over. But will it revive Congress?",
            "description": "Leader of India’s main opposition party concludes cross-country ‘unity’ march in Kashmir.",
            "url": "http://www.aljazeera.com/news/2023/1/30/rahul-gandhi-150-day-march-is-over-but-will-it-revive-congress",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/01/AP23030440736386.jpg?resize=1920%2C1440",
            "publishedAt": "2023-01-30T15:44:17Z",
            "content": "New Delhi, India Hundreds of people on Monday defied the harsh Himalayan cold as they gathered in Srinagar, the largest city in Indian-administered Kashmir, to join opposition leader Rahul Gandhi on … [+6081 chars]"
        },
        {
            "source": {
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "Moneycontrol News",
            "title": "Manu Jain quits Xiaomi group after 9-year stint",
            "description": "Manu Jain had earlier served as the India managing director for Xiaomi, and since 2017, he was the company's global vice president.",
            "url": "https://www.moneycontrol.com/news/business/companies/manu-jain-quits-xiaomi-group-9965091.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2019/05/D6_UpPlUcAA28Fy.jpg-large-653x435.jpeg",
            "publishedAt": "2023-01-30T12:16:50+00:00",
            "content": "Manu Kumar Jain on January 30 announced his exit from the Xiaomi group, after being it associated with it for over nine years. In a statement shared on social media, Jain said he would be \"taking som… [+2328 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Weilun Soon, Dave Sebastian",
            "title": "Rout in Adani Stocks, Bonds Continues; Conglomerate Trades Barbs With Short Seller",
            "description": "India’s Adani Group issues 413-page response to Hindenburg Research’s allegations",
            "url": "https://www.wsj.com/articles/rout-in-adani-stocks-bonds-continues-conglomerate-trades-barbs-with-short-seller-11675071805?mod=hp_lead_pos3",
            "urlToImage": "https://images.wsj.net/im-712826/social",
            "publishedAt": "2023-01-30T09:43:00Z",
            "content": "The namesake conglomerate of Indias richest man, Gautam Adani, fired back at an American short seller, but the groups 413-page response didnt stop a slide in the shares and bonds of its companies on … [+444 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Adani's market loss swells to $70 billion as its fight with short-seller escalates",
            "description": "Adani group shares extended their sharp falls on Monday as the Indian conglomerate's rebuttal of a U.S. short-seller's criticism failed to pacify investors, driving stock market losses for the companies to almost $70 billion over three days.",
            "url": "https://www.reuters.com/world/india/adani-enterprises-shares-rise-other-group-stocks-plunge-after-short-seller-2023-01-30/",
            "urlToImage": "https://www.reuters.com/resizer/dPBNLInWyUxN-20QzYJwzVko4hE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UTJ6KOHZSNNWNPHFWHAD4QCWE4.jpg",
            "publishedAt": "2023-01-30T09:33:23Z",
            "content": "NEW DELHI, Jan 30 (Reuters) - Adani group shares extended their sharp falls on Monday as the Indian conglomerate's rebuttal of a U.S. short-seller's criticism failed to pacify investors, driving stoc… [+4519 chars]"
        },
        {
            "source": {
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "LIVELAW NEWS NETWORK",
            "title": "Centre Violated Citizens' Right To Know By Blocking BBC Documentary On Modi : N Ram, Prashant Bhushan &...",
            "description": "Terming the Centre's decision to block public access to BBC's documentary \"India : The Modi Question\" as \"manifestly arbitrary\" and \"unconstitutional\",  veteran journalist and former editor of The...",
            "url": "https://www.livelaw.in/top-stories/centre-violated-citizens-right-to-know-by-blocking-bbc-documentary-on-modi-n-ram-prashant-bhushan-mahua-moitra-tell-supreme-court-220216",
            "urlToImage": "https://www.livelaw.in/h-upload/2023/01/30/456257-prashant-bhushan-n-ram-and-mahua-moitra-india-the-modi-question-bbc-documentary.jpg",
            "publishedAt": "2023-01-30T09:20:32+00:00",
            "content": "Terming the Centre's decision to block public access to BBC's documentary \"India : The Modi Question\" as \"manifestly arbitrary\" and \"unconstitutional\", veteran journalist and former editor of The Hin… [+6506 chars]"
        },
        {
            "source": {
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "Aniruddha Dhar",
            "title": "Rahul Gandhi reveals why he wore t-shirt during yatra; recalls Indira, Rajiv",
            "description": "Rahul Gandhi was addressing a rally at the concluding function of the Bharat Jodo Yatra amid heavy snowfall in Srinagar. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/rahul-gandhi-reveals-why-he-wore-t-shirt-during-congress-yatra-recalls-indira-rajiv-101675065302049.html",
            "urlToImage": "https://images.hindustantimes.com/img/2023/01/30/1600x900/ANI-20230130018-0_1675070042338_1675070042338_1675070061759_1675070061759.jpg",
            "publishedAt": "2023-01-30T09:17:05+00:00",
            "content": "Congress leader Rahul Gandhi on Monday turned a little emotional as he revealed why he didn't wear a jacket or a warm cloth during the Congress Bharat Jodo Yatra which officially concluded in Jammu a… [+3908 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "UPSC: How Indians crack one of the world's toughest exams",
            "description": "A topper's story of endurance and sacrifice offers a glimpse into a highly competitive exam.",
            "url": "http://www.bbc.co.uk/news/world-asia-india-64316112",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0BCA/production/_128381030_mediaitem128381029.jpg",
            "publishedAt": "2023-01-30T08:52:20.3896327Z",
            "content": "For close to three years, Gamini Singla stayed away from friends, did not go on a vacation and avoided family meetings and celebrations.\r\nShe stopped binging on takeaways, going to the cinema and ste… [+7595 chars]"
        },
        {
            "source": {
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "Loveena Tandon",
            "title": "'Witch hunt against PM Modi': Indian diaspora in London protests outside BBC headquarters",
            "description": "The protests in London came a week after the Indian government imposed a nationwide ban on the airing of the BBC documentary.",
            "url": "https://www.indiatoday.in/world/story/indians-london-protest-outside-bbc-headquarters-pm-modi-documentary-godhra-riots-2327935-2023-01-29",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/bbcprotest-sixteen_nine.jpeg?VersionId=HYDHUr0.2.KDnTSS_p3qTvY9hIVS4VBr",
            "publishedAt": "2023-01-29T17:28:04+00:00",
            "content": "By Loveena Tandon: \"We do not deserve this,\" said one of the protestors in London, staging demonstrations against the controversial BBC documentary on Prime Minister Narendra Modi. The Indian diaspor… [+3576 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Emma Hinchliffe, Paige McGlauflin",
            "title": "Why a former SoftBank partner is tackling mid-career drop-off for working mothers",
            "description": "Former SoftBank partner and Facebook India director Kirthiga Reddy is the cofounder of Laddrr, a resource hub for working mothers aiming to prevent mid-career drop-off.",
            "url": "https://fortune.com/2022/06/01/former-softbank-partner-tackling-mid-career-drop-off-for-working-mothers/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600",
            "publishedAt": "2022-06-01T13:22:34Z",
            "content": "Skip to Content"
        },
        {
            "source": {
                "id": "the-hindu",
                "name": "The Hindu"
            },
            "author": "Ananth Krishnan",
            "title": "Dalai Lama’s close aides targeted on Pegasus spyware list",
            "description": "‘Analysis indicates that the Indian govt. was selecting the potential targets’",
            "url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
            "urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
            "publishedAt": "2021-07-22T15:47:01Z",
            "content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
        },
        {
            "source": {
                "id": "rte",
                "name": "RTE"
            },
            "author": "RTÉ News",
            "title": "UK continues with reopening plan despite concerns",
            "description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
            "url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
            "urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
            "publishedAt": "2021-05-15T09:33:48Z",
            "content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Rajat Pandit",
            "title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
            "description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
            "url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T08:29:00Z",
            "content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Army explores procurement of 350 light tanks for mou… [+58 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Times Of India",
            "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
            "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
            "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T05:44:49Z",
            "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "PTI",
            "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
            "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
            "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T05:43:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Bloomberg",
            "title": "Even record death toll may hide extent of India’s Covid crisis",
            "description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19 wave may be m.",
            "url": "http://timesofindia.indiatimes.com/india/even-record-death-toll-may-hide-extent-of-indias-covid-crisis/articleshow/82213444.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82213819,width-1070,height-580,imgsize-232887,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T04:41:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Dipak K Dash",
            "title": "Government to provide 5 kg free food grains to poor for May & June",
            "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
            "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T04:23:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "'Inappropriate': PM Modi objects to 'protocol break' during meeting; Delhi CM expresses regret",
            "description": "India News: Delhi chief minister Arvind Kejriwal on Friday faced flak for sharing a live telecast of an \"in-house\" meeting with Prime Minister Narendra Modi where",
            "url": "http://timesofindia.indiatimes.com/india/delhi-cmo-expresses-regret-over-televised-address-during-meeting-with-pm-modi/articleshow/82213159.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82213159,width-1070,height-580,imgsize-134672,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T03:54:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Times Of India",
            "title": "Coronavirus in India live updates: Zydus' Virafin gets DCGI nod for Covid treatment",
            "description": "In yet another grim milestone, India recorded 3.3 lakh new Covid-19 cases, and 2,263 deaths in a day. Meanwhile, active cases crossed the 24-lakh mar",
            "url": "http://timesofindia.indiatimes.com/india/coronavirus-in-india-covid-19-vaccine-cases-lockdown-live-updates-23-april-2021/liveblog/82205841.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82205841,width-1070,height-580,imgsize-148788,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-22T16:20:06Z",
            "content": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment\r\nMake Covid-19 vaccination affordable, accessible through Jan Aushadi scheme: IMA\r\nThe IMA has demanded that the Covid-19 vaccine … [+4487 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "I'm fighting my own benchmarks - R Ashwin | ESPNcricinfo.com",
            "description": "India's No. 1 offspinner talks to Manjrekar on his form abroad, injuries and more | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102228/fighting-my-own-benchmarks-r-ashwin",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219773_1296x729.jpg",
            "publishedAt": "2020-04-25T03:00:09Z",
            "content": "R Ashwin has said that he is \"fighting my own benchmarks\" because his Test performances overseas are being measured against his heroics in India. Despite being the country's best long-form spinner in… [+3347 chars]"
        }
    ]


    constructor() {
        super();
        this.state = {
            article: this.article,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-4'>
                <div className="row">
                    {this.state.article.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0,30)} description={element.description.slice(0,100)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
