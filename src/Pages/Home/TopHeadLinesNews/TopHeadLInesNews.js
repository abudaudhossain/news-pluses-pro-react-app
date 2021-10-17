import React from 'react';
import { Link } from 'react-router-dom';

const TopHeadLInesNews = ({ article }) => {
    console.log("topNesw:", article)
    const { title, author, publishedAt, urlToImage, description } = article;
    return (
        <Link to={`/details/${title}`}>
            <div className="blog news-hover">
                <div className="blog-img">
                    <img src={urlToImage} alt="" />
                </div>
                <div className="blog-info">
                    <h3 className="topic-heading news-heading news-title">{title}
                    </h3>
                    <p className="news-author"><i>{author} - <time dateTime={publishedAt}>{publishedAt}</time> </i></p>
                    <p>{description}</p>
                </div>
            </div>
        </Link>

    );
};

export default TopHeadLInesNews;