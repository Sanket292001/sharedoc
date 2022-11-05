import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DescriptionIcon from '@mui/icons-material/Description';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import profileImg from  '../../assets/images/profile.jpg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../universal-components.css';

function AppBar({title}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToHome = () => {
      //navigate to home screen.
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-around', margin: '0 2%'}}>
        <ArrowBackIosIcon sx={{width:75}} onClick={navigateToHome}/>
        <h1 sx={{ 'text-align': 'center'}}>{title}</h1>
        <Tooltip  sx={{width:75}}title="Account Options">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 50, height: 50, boxShadow:'5px 5px #ccc' }}><img src={profileImg} alt="Profile" height={50} width={50}></img></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <MenuItem>
          <ListItemIcon>
            <DescriptionIcon fontSize="small" />
          </ListItemIcon>
          My Documents
        </MenuItem>
        <Divider/>
        <MenuItem>
          <ListItemIcon>
            <HistoryIcon fontSize="small" />
          </ListItemIcon>
          History
        </MenuItem>
        <Divider/>
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>);
}

export default AppBar;