import './NavBar.css';
import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { Navigate } from 'react-router-dom';



const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [navigateTo, setNavigateTo] = useState(null);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const notificationRef = useRef(null); // Ref to the notification list
    
    const toggleNotification = (event) => {
        setNotificationOpen((prev) => !prev);
    }; 
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (path) => {
        setNavigateTo(path);
        handleMenuClose();
    };

    const isMenuOpen = Boolean(anchorEl);
    

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => handleNavigate('/profile')}>Profile</MenuItem>
            <MenuItem onClick={() => handleNavigate('/setting')}>Settings</MenuItem>
            <MenuItem onClick={() => handleNavigate('/login')}>Logout</MenuItem>
        </Menu>
    );
    

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close notification if click is outside the notification list also
            if (
                notificationOpen &&
                notificationRef.current &&
                !notificationRef.current.contains(event.target) &&
                event.target.closest('.notification-icon') === null
            ) {
                setNotificationOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [notificationOpen]);

    

    const notificationList = (
        <div className="notification-list" ref={notificationRef}>
            <List>
                <ListItem>
                    <ListItemText primary="Notification 1" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Notification 2" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Notification 3" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className="navbarContainer">
            {navigateTo && <Navigate to={navigateTo} replace={true} />}
            <div className="navbarLeft">
                <span className="logo"> <a href='/'>SecureVision AI</a> </span>
            </div>
            <div className="navbar-icons">
                <IconButton
                    edge="end"
                    aria-label="show notifications"
                    color="inherit"
                    onClick={toggleNotification}
                    className="notification-icon"
                >
                    <Badge badgeContent={3} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        >
                    <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
                </IconButton>                
            </div>
            {notificationOpen && notificationList}
            {renderMenu}
            
        </div>
    );
};

export default NavBar;
