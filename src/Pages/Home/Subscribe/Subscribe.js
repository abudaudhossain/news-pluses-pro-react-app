import React from 'react';
import './subscribe.css'

const Subscribe = () => {
    return (
        <div className="flex-item subscribe">
            <h3 className="topic-title">
                Subscribe to our newsletter
            </h3>
            <p className="news-author"  style={{color: 'black'}}><i>To be updte all the latest news, offers and spacial announcements.</i></p>
            <div className="input-area">
                <input type="email" name="email" id="" placeholder="Your email address" />
                <button type="submit">SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default Subscribe;