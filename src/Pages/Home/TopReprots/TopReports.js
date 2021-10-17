import React from 'react';
import TopReprot from '../TopReprot/TopReprot';

const TopReports = ({articles}) => {
    console.log(articles);

    return (
        <article className="top-reprots">
            {
                articles.slice(3, 5).map(article =><TopReprot key={article.title} article={article}></TopReprot>)
            }
          
        </article>
    );
};

export default TopReports;