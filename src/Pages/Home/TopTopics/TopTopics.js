import React from 'react';
import Topic from '../Topic/Topic';
import './TopTopics.css'

const TopTopics = ({articles}) => {

    return (
        <aside className="top-topics">
            <h3 className="topic-title">Top Headlins News</h3>
            {
                articles.slice(5, 10).map(article => <Topic key={article.title} article={article}></Topic>)
            }
            
        </aside>
    );
};

export default TopTopics;