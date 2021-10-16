import React from 'react';
import TopNews from '../TopNews/TopNews';
import TopReports from '../TopReprots/TopReports';
import TopTopics from '../TopTopics/TopTopics';
import "./Home.css"

const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="news">
                    <TopNews></TopNews>
                    <div className="home-right">
                        <TopReports></TopReports>
                        <TopTopics></TopTopics>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;