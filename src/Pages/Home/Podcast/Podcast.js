import React from 'react';
import './Podcast.css'

const Podcast = () => {
    return (
        <div className="flex-item podcast">
            <div>
                <h3 className="topic-title">New Podcast</h3>
                <div className="topic">
                    <div className="topic-details">
                        <h3 className="topic-heading news-heading">Mark Steinberg Reads Donald Trump's Mean Tweets on Kimmel
                        </h3>
                        <p className="news-author"><i>Emoli Monis - <time dateTime="2021-07-13 13:00">2021-07-13</time> </i></p>
                        <audio src="#" controls></audio>
                    </div>
                    <div className=" topic-img">
                        <img className="br" src="./img/img-6.jpeg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Podcast;