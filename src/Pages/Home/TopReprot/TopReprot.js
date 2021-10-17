import React from 'react';
import { Link } from 'react-router-dom';

const TopReprot = ({article}) => {
    console.log(article)
    const {title,author, publishedAt, urlToImage} =article;

    return (
        <div className="report news-hover">
            <Link to={`/details/${title}`}>
            <figure>
                <img src={urlToImage} alt="img" />
            </figure>
            <h3 className="report-heading news-heading news-title">"{title}"</h3>
            <p className="news-author"><i>{author} - <time dateTime={publishedAt}>{publishedAt}</time> </i></p>
            
            </Link>
        </div>
    );
};

export default TopReprot;