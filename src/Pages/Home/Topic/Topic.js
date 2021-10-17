import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ article }) => {
    const { title, author, publishedAt, urlToImage } = article;
    return (
        <div>

            <Link to={`/details/${title}`}>
                <div className="topic news-hover">
                    <div className="topic-details">
                        <h3 className="topic-heading news-heading news-title">
                            {title}
                        </h3>
                        <p className="news-author"><i>{author} - <time dateTime={publishedAt}>{publishedAt}</time> </i></p>
                    </div>
                    <div className=" topic-img">
                        <img className="br" src={urlToImage} alt="Imag" />
                    </div>
                </div>
            </Link>


        </div>
    );
};

export default Topic;