import React from 'react';
import { Spinner } from 'react-bootstrap';
import useNews from '../../../hooks/useNews';
import LeftCatgoryNews from '../LeftCatgoryNews/LeftCatgoryNews';
import RightCotegoryNews from '../RightCotegoryNews/RightCotegoryNews';
import TopHeadLInesNews from '../TopHeadLinesNews/TopHeadLInesNews';
import './LeatestNews.css'

const LeatestNews = () => {
    const { TopHeadlinesNews } = useNews();
    const { articles } = TopHeadlinesNews();


    // business entertainment general health science sports technology

    return (
        <section id="latest-news">
            <div className="container">
                <div className="latest-news">
                    <article className="magazine">
                        <LeftCatgoryNews category = "health"></LeftCatgoryNews>
                        <LeftCatgoryNews category ="entertainment"></LeftCatgoryNews>
                    </article>
                    <article className="politics">
                        <h3 className="topic-title sticky-top bg-white py-3" style={{ top:"-20px"}}>Worl Top Headlines News</h3>

                        {
                            articles ?
                            articles.map(article =><TopHeadLInesNews key={article.title} article= {article}></TopHeadLInesNews>) :
                            <Spinner animation="border" variant="primary" />
                        }
                    </article>
                    <article className="">
                        <RightCotegoryNews category="sports"></RightCotegoryNews>
                        <RightCotegoryNews category ="general"></RightCotegoryNews>


                    </article>
                </div>
            </div>
        </section>
    );
};

export default LeatestNews;