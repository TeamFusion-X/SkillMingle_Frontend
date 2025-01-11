import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, MenuItem, Menu, Badge } from '@mui/material';
import { Menu as MenuIcon, AccountCircle, Notifications as NotificationsIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function NavbarDB() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/profile')
    setAnchorEl(null);
  }

  return (
    <Box sx={{ 
      width: '100%', 
      position: 'fixed', 
      top: 0, 
      left: 0,
      zIndex: 1000 
    }}>
      <AppBar position="static" sx={{ width: '100%' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Skill Mingle
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <IconButton
              size="large"
              aria-label="show notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
            '& .MuiMenuItem-root': {
              color: 'Black', // Change text color to purple
              '&:hover': {
                color: '', // Change text color on hover
              },
            },
        }}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    </Box>
  );
}