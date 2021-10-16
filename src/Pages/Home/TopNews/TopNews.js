import React from 'react';
import './topNews.css'

const TopNews = () => {
    return (
        <article className="top-news">
            <h2 className="news-title">Costomer Enganement Marketing: A New Startegy for the Economy</h2>
            <p className="news-author"><i>Emoli Monis - <time dateTime="2021-07-13 13:00">2021-07-13</time> </i></p>
            <figure>
                <img src="./img/img-1.jpg" alt="" className="top-news-img" />
                <figcaption>The main thinks that you have to remaber on this journey is just be nice to every you and alwayssnil.</figcaption>
            </figure>

        </article>
    );
};

export default TopNews;