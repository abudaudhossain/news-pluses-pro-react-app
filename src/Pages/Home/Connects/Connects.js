import React from 'react';
import "./Connects.css"

const Connects = () => {
    return (
        <div className="flex-item connects">
            <h3 className="topic-title">Stay Connected </h3>
            <ul>
                <li className="facebook" >
                    <span className="icon"><i className="fab fa-facebook-f"></i></span>
                    <h5>16,985</h5>
                    <p>Fans</p>
                </li>
                <li className="twitter" >
                    <span className="icon"><i className="fab fa-twitter"></i></span>
                    <h5>16,985</h5>
                    <p>Followers</p>
                </li>
                <li className="youtube" >
                    <span className="icon"><i className="fab fa-youtube"></i></span>
                    <h5>16,985</h5>
                    <p>Subcribers</p>
                </li>

            </ul>
        </div>
    );
};

export default Connects;