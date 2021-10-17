import React from 'react';

const SideNews = ({article}) => {
    // console.log("SidebarNews: ", article)
    const { title, author, publishedAt, urlToImage } = article;
    return (
        <div className="topic news-hover">
            <div className="topic-details">
                <h3 className="topic-heading news-heading news-title">{title}
                </h3>
                <p className="news-author"><i>{author}- <time dateTime={publishedAt}>{publishedAt}</time> </i></p>

            </div>
            <div className=" topic-img">
                <img className="" src={urlToImage} alt="" />
            </div>
        </div>
    );
};

export default SideNews;