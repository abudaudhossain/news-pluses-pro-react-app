import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a className="active" href="#f">Home</a></li>
                <li><a href="#f">News</a></li>
                <li><a  href="#3">Business</a></li>
                <li><a  href="#3">Magazine</a></li>
                <li><a  href="#3">Sport</a></li>
                <li><a  href="#3">Arts</a></li>
                <li><a  href="#3">Cultre</a></li>
                <li><a  href="#3">POlitics</a></li>
                <li><a  href="#3">Style</a></li>
                <li><a  href="#3">Travel</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;