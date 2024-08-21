import './NavBar.css'
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Navigate } from 'react-router-dom'; // Import Navigate for navigation



const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [navigateTo, setNavigateTo] = useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleNotification = () => {
        setNotificationOpen(!notificationOpen);
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
            <MenuItem onClick={() => handleNavigate('/')}>Profile</MenuItem>
            <MenuItem onClick={() => handleNavigate('/')}>Settings</MenuItem>
            <MenuItem onClick={() => handleNavigate('/login')}>Logout</MenuItem>
        </Menu>
    );

    const notificationList = (
        <div className="notification-list">
            <List>
                <ListItem>
                    <ListItemText primary="Notification 1" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Notification 2" />
                </ListItem>
            </List>
        </div>
    );
    
    

    return (
        <div className='navbarContainer'>
        {navigateTo && <Navigate to={navigateTo} replace={true} />} {/* Perform navigation */}
        <div className="navbarLeft">
            <span className="logo">SV Logo</span>
        </div>
        
        <div className="navbar-icons">
                        <IconButton
                            edge="end"
                            aria-label="show notifications"
                            color="inherit"
                            onClick={toggleNotification}
                        >
                            <Badge badgeContent={1} color="secondary">
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





    

    
            
            
                
                    
            
            
