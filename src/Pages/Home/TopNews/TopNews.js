import React from 'react';
import { Link } from 'react-router-dom';
import './topNews.css'

const TopNews = (props) => {
    console.log(props.article)

    const { title, author, description, publishedAt, urlToImage } = props?.topNews;

    return (
        <article className="top-news news-hover">
            <Link to={`/details/${title}`}>
                <h2 className="news-title">{title}</h2>
                <p className="news-author"><i>{author} - <time dateTime={publishedAt}>{publishedAt}</time> </i></p>
                <figure>
                    <img src={urlToImage} alt="" className="top-news-img" />
                    <figcaption>{description?.slice(0, 100)}</figcaption>
                </figure>
            </Link>


        </article>
    );
};

export default TopNews;