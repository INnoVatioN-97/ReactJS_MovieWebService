import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/" className="nav__text">
                Home
            </Link>
            <Link to="/about" className="nav__text">
                About
            </Link>
        </div>
    );
}

export default Navigation;
