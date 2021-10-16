import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header>
            <div className="container">
                <Banner></Banner>
            </div>
           <Navbar></Navbar>
        </header>
    );
};

export default Header;