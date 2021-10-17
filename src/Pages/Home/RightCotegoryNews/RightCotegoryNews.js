import React from 'react';
import { Spinner } from 'react-bootstrap';
import useNews from '../../../hooks/useNews';
import SideNews from '../SideNew/SideNews';

const RightCotegoryNews = ({ category }) => {
    const { CategoryNews } = useNews();
    const {articles} = CategoryNews(category);
    console.log(articles);

    return (
        <div className="box-shadow">
            <h3 className="topic-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>

            {
                articles ?
                    articles.slice(0, 6).map(article => <SideNews key={article.title} article = {article}></SideNews>) :
                    <><Spinner animation="border" variant="primary" /></>
            }

            <a href="#2">More news</a>

        </div>
    );
};

export default RightCotegoryNews;