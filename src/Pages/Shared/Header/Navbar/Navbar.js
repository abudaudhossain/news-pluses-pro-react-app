import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink activeClassName="active" to="/home">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/details">Details</NavLink></li>
                <li><NavLink activeClassName="active"  to="/business">Business</NavLink></li>
                <li><NavLink activeClassName="active"  to="/magazine">Magazine</NavLink></li>
               
            </ul>
        </nav>
    );
};

export default Navbar;