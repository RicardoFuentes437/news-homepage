import React, { useState, useEffect } from 'react';
import { SwipeableDrawer } from '@mui/material';
import { List, ListItem, ListItemText, Box } from '@mui/material';

import '../../styles/navbar/navbarStyles.css';

const Menu = () => {
    const [isMobile, setMobile] = useState(window.innerWidth <= 600 ? true : false);
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setOpen(open);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            if(window.innerWidth <= 600){
                setMobile(true);
            }

            if(window.innerWidth > 600){
                setMobile(false);
            }
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const buttonStyle = {
        width: 'auto',
        height: 'auto',
        border: 'none',
        cursor: 'pointer',
        float: 'right',
        padding: '10px',
        backgroundColor: 'white'
    }

    const Drawer = () => {
        return (
            <Box
            sx={{ width: '250px' }}
            role="presentation"
            >
                <List>
                <button onClick={toggleDrawer(false)} style={buttonStyle}><img src="images/icon-menu-close.svg" alt="icon-close-menu"></img></button>
                {["Home", "New", "Popular", "Trending", "Categories"].map((text, index) => (
                    <ListItem key={index} className="list-item">
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
                </List>
            </Box>
        )
    }

    return (
        <div>
            {isMobile ? 
                <div className='drawer'>
                    <button onClick={toggleDrawer(true)} className="icon-menu"><img src="images/icon-menu.svg" alt="icon-menu"></img></button>
                    <SwipeableDrawer
                    anchor='right'
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    >
                        <Drawer></Drawer>
                    </SwipeableDrawer>
                </div>
                :
                <ul id="navbar-links">
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            }
        </div>
    )
}

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src="images/logo.svg" alt='page-logo' id="page-logo"></img>
            <Menu></Menu>
        </nav>
    );
}

export default Navbar;
