import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="pulsues">
                <h2 className="title">PULSES PRO</h2>
                <p>&copy; Abu Daud Hossain. All rights reserved.Pulses Pro <suq>©  is registered BD</suq></p>
                <div className="s_m_icon">
                    <a href="#s"><span className="icon"><i className="fab fa-facebook-f"></i></span></a>
                    <a href="#s"><span className="icon"><i className="fab fa-twitter"></i></span></a>
                    <a href="#s"><span className="icon"><i className="fab fa-youtube"></i></span></a>
                </div>
            </div>
            <div className="about-us">
                <h2 className="title">About Us</h2>
                <h4 className="heading">ADVERISE</h4>
                <h4 className="heading">ABOUT</h4>
                <h4 className="heading">EVENTS</h4>
                <h4 className="heading">WRITE FOR US</h4>
                <h4 className="heading">IN THE PRESS</h4>

            </div>
            <div className="popular-category">
                <h2 className="title">popular Category</h2>
                <h4 className="heading">CULTURE</h4>
                <h4 className="heading">POLITICS</h4>
                <h4 className="heading">TRAVEL</h4>
                <h4 className="heading">STYLE</h4>
                <h4 className="heading">ARTS</h4>
                <h4 className="heading">SPORT</h4>
            </div>
            <div className="editor-picks">
                <h2 className="title">Editor Picks</h2>
                <div className="topic">
                    <div className="topic-details">
                        <h3 className="topic-heading news-heading">Mark Steinberg Reads Donald Trump's Mean Tweets on Kimmel
                        </h3>
                        <p className="news-author"><i>Emoli Monis - <time dateTime="2021-07-13 13:00">2021-07-13</time> </i></p>

                    </div>
                    <div className=" topic-img">
                        <img className="" src="./img/img-6.jpeg" alt=""/>
                    </div>
                </div>
                <div className="topic">
                    <div className="topic-details">
                        <h3 className="topic-heading news-heading">Mark Steinberg Reads Donald Trump's Mean Tweets on Kimmel
                        </h3>
                        <p className="news-author"><i>Emoli Monis - <time dateTime="2021-07-13 13:00">2021-07-13</time> </i></p>

                    </div>
                    <div className=" topic-img">
                        <img className="" src="./img/img-6.jpeg" alt=""/>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;