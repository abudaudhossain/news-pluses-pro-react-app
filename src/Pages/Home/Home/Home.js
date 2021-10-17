import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import LeatestNews from '../LeatestNews/LeatestNews';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Contact></Contact>
            <LeatestNews></LeatestNews>
        </div>
    );
};

export default Home;