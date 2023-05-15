import React from 'react';

import '../../styles/navbar/navbarStyles.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src="images/logo.svg" alt='page-logo' id="page-logo"></img>
            <ul id="navbar-links">
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
    );
}

export default Navbar;
