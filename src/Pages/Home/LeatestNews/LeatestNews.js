import React from 'react';
import LeftCatgoryNews from '../LeftCatgoryNews/LeftCatgoryNews';
import RightCotegoryNews from '../RightCotegoryNews/RightCotegoryNews';
import './LeatestNews.css'

const LeatestNews = () => {
    return (
        <section id="latest-news">
            <div className="container">
                <div className="latest-news">
                    <article className="magazine">
                        <LeftCatgoryNews></LeftCatgoryNews>
                        <LeftCatgoryNews></LeftCatgoryNews>                       
                    </article>
                    <article className="politics">
                        <h3 className="topic-title">Politics</h3>
                        <div className="blog">
                            <div className="blog-img">
                                <img src="./img/img-4.jpg" alt="" />
                            </div>
                            <div className="blog-info">
                                <h3 className="topic-heading news-heading">Mark Steinberg Reads Donald Trump's Mean Tweets on Kimmel
                                </h3>
                                <p className="news-author"><i>Emoli Monis - <time datetime="2021-07-13 13:00">2021-07-13</time> </i></p>
                                <p>The main thing that you thave to remember on this journey is just be nice to everyone and always what was...</p>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-img">
                                <img src="./img/img-4.jpg" alt="" />
                            </div>
                            <div className="blog-info">
                                <h3 className="topic-heading news-heading">Mark Steinberg Reads Donald Trump's Mean Tweets on Kimmel
                                </h3>
                                <p className="news-author"><i>Emoli Monis - <time datetime="2021-07-13 13:00">2021-07-13</time> </i></p>
                                <p>The main thing that you thave to remember on this journey is just be nice to everyone and always what was...</p>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-img">
                                <img src="./img/img-4.jpg" alt="" />
                            </div>
                            <div className="blog-info">
                                <h3 className="topic-heading news-heading">Mark Steinberg Reads Donald Trump's Mean Tweets on Kimmel
                                </h3>
                                <p className="news-author"><i>Emoli Monis - <time datetime="2021-07-13 13:00">2021-07-13</time> </i></p>
                                <p>The main thing that you thave to remember on this journey is just be nice to everyone and always what was...</p>
                            </div>
                        </div>
                        <div className="blog">
                            <div className="blog-img">
                                <img src="./img/img-4.jpg" alt="" />
                            </div>
                            <div className="blog-info">
                                <h3 className="topic-heading news-heading">Mark Steinberg Reads Donald Trump's Mean Tweets on Kimmel
                                </h3>
                                <p className="news-author"><i>Emoli Monis - <time datetime="2021-07-13 13:00">2021-07-13</time> </i></p>
                                <p>The main thing that you thave to remember on this journey is just be nice to everyone and always what was...</p>
                            </div>
                        </div>

                    </article>
                    <article className="">
                       <RightCotegoryNews></RightCotegoryNews>
                       <RightCotegoryNews></RightCotegoryNews>
                        

                    </article>
                </div>
            </div>
        </section>
    );
};

export default LeatestNews;