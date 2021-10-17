import React from 'react';
import Connects from '../Connects/Connects';
import Podcast from '../Podcast/Podcast';
import Subscribe from '../Subscribe/Subscribe';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact">
            <Podcast></Podcast>
            <Subscribe></Subscribe>
            <Connects></Connects>
        </section>

    );
};

export default Contact;