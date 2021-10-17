import React from 'react';
import useNews from '../../../hooks/useNews';
import TopNews from '../TopNews/TopNews';
import TopReports from '../TopReprots/TopReports';
import TopTopics from '../TopTopics/TopTopics';

const Banner = () => {
    const { TopHeadlinesNews } = useNews();
    let topNews = {}
    const { articles } = TopHeadlinesNews();
    console.log(articles);
    if (articles) {
        topNews = articles[1];
    }


    return (
        <section id="home">
            <div className="container">
                {
                    articles ?
                        <div div className="news">
                            <TopNews
                                topNews={topNews}
                            ></TopNews>
                            <div className="home-right">
                                <TopReports articles={articles}></TopReports>
                                <TopTopics articles={articles} ></TopTopics>
                            </div>
                        </div>:
                        <h1>Loading...</h1>
                }


            </div>
        </section >
    );
};

export default Banner;