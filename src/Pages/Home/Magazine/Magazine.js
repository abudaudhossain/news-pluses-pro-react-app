import React from 'react';

const Magazine = ({article}) => {
    const { title, author, publishedAt } = article;

    return (
        <div className="topic news-hover">
            <div className="topic-details">
                <h3 className="topic-heading news-heading news-title">{title}
                </h3>
                <p className="news-author" style={{color: "black"}}><i>{author} - <time dateTime={publishedAt}>{publishedAt}</time> </i></p>
            </div>

        </div>
    );
};

export default Magazine;