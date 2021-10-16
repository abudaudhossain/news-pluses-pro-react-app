import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <div className="banner">
            <div className="wather">36.25<sup>c</sup> Dhaka</div>
            <div className="paper-titlie">
                <h1 className="name">PULSES PRO</h1>
                <p className="date">tuesda, july 13,2021</p>
            </div>
            <div className="s_m_icon">
                <a href="e"><span className="icon"><i className="fab fa-facebook-f"></i></span></a>
                <a href="3"><span className="icon"><i className="fab fa-twitter"></i></span></a>
                <a href="3"><span className="icon"><i className="fab fa-youtube"></i></span></a>
            </div>

        </div>
    );
};

export default Banner;