import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useNews from '../../hooks/useNews';
import TopReprot from '../Home/TopReprot/TopReprot';

const Details = () => {
    const { TopHeadlinesNews } = useNews();

    const { articles } = TopHeadlinesNews();
    console.log(articles);

    const { title } = useParams();
    const getNews = articles?.find(article => article.title === title);
    console.log(getNews)

    //  const {author, description, publishedAt, urlToImage} = getNews;

    return (
        <div>
            {
                getNews ?
                    <div className="container">
                        <h1>{title}</h1>
                        <img className="img-thumbnail m-5" src={getNews.urlToImage} alt="img" />
                        <p style={{ color: "black" }}>{getNews.description}</p>
                        <a href={getNews.url} ><button>More</button></a>
                        <div className="mb-5"></div>

                        <Container>
                            <Row>
                                {
                                    articles.slice(0, 8).map(article =><Col lg="3" md={6} sm={6} xs={12} >
                                    <TopReprot key={article.title} article={article}></TopReprot>
                                    </Col>
                                    )
                                }
                                    
                                
                            </Row>
                        </Container>
                    </div> : <><Spinner animation="border" variant="primary" /></>
            }
        </div>
    );
};

export default Details;