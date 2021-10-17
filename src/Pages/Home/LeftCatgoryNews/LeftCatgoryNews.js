import React from 'react';
import { Spinner } from 'react-bootstrap';
import useNews from '../../../hooks/useNews';
import Magazine from '../Magazine/Magazine';

const LeftCatgoryNews = ({ category }) => {
    const { CategoryNews } = useNews();
    const { articles } = CategoryNews(category);
    console.log(articles);
    return (
        <div className="box-shadow">
            <h3 className="topic-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>

            {
                articles ?
                    articles.slice(0, 6).map(article => <Magazine key={article.title} article = {article}></Magazine>) :
                    <><Spinner animation="border" variant="primary" /></>
            }
           


        </div>
    );
};

export default LeftCatgoryNews;