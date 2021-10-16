import React from 'react';
import './Topic.css'

const Topic = () => {
    return (
        <div>
            <h3 className="topic-title">
                Editor Picks
            </h3>
            <div className="topic">
                <div className="topic-details">
                    <h3 className="topic-heading news-heading">
                        Jen Kendall Kicked off americana Airlines Firs Fligh
                    </h3>
                    <p className="news-author"><i>Emoli Monis - <time dateTime="2021-07-13 13:00">2021-07-13</time> </i></p>
                </div>
                <div className=" topic-img">
                    <img className="br" src="./img/img-6.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Topic;