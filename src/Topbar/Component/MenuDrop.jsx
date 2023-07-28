import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import {  ArrowDropDown} from '@mui/icons-material';
import { Stack } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    popOverRoot: {
      pointerEvents: "none"
    }
  });
function MenuDrop() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    let currentlyHovering = false
    const styles = useStyles();

    //Large Screen Menu Dropdown
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    //Large Screen Menu Dropdown
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleHover() {
    currentlyHovering = true;
  }
  function handleCloseHover() {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose();
      }
    }, 30);}
  return (
    <React.Fragment>
        <a to="#"  className="option" style={{display:"flex", alignItems:"center"}} 
            onMouseOver={handleClick} onMouseLeave={handleCloseHover}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
        >
            <Typography variant='body1' component="a" sx={{color:"black"}}>Menu</Typography>
            <ArrowDropDown size="tiny" htmlColor="black" ml={2}/>
        </a> 
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onMouseLeave = {handleClose}
        MenuListProps={{
            onMouseEnter: handleHover,
            onMouseLeave: handleCloseHover,
            style: { pointerEvents: "auto" }
        }}
        PopoverClasses={{
            root: styles.popOverRoot
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            flexWrap:"wrap",
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
              left: "130px",
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
        <Stack direction="row" spacing={3}>
            <Box>
                <MenuItem >
                <a href="/" style={{textAlign:"center"}}><Typography variant='h6' component="a" sx={{marginBottom:"15px", textAlign:"center",color:"black", fontWeight:"800"}}>African Food</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Garlic Sauce Mushroom Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Pasta With Sour Tomato Sauce</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Tangy Basil Sauce Baked Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Whole Wheat Gnocchi With Sauce</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Spicy Chili Flakes Chicken Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Spicy Aromatic Butter Chicken Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Rich Flavour Broccoli Garlic Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>See All</Typography></a>
                </MenuItem>
            </Box>
            <Box>
                <MenuItem >
                    <a href="/"><Typography variant='h6' component="a" sx={{marginBottom:"15px", textAlign:"center",color:"black", fontWeight:"800"}}>Chinese Food</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Garlic Sauce Mushroom Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Pasta With Sour Tomato Sauce</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Tangy Basil Sauce Baked Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Whole Wheat Gnocchi With Sauce</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Spicy Chili Flakes Chicken Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Spicy Aromatic Butter Chicken Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Rich Flavour Broccoli Garlic Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>See All</Typography></a>
                </MenuItem>
            </Box>
            <Box>
                <MenuItem >
                    <a href="/"><Typography variant='h6' component="a" sx={{marginBottom:"15px", textAlign:"center",color:"black", fontWeight:"800"}}>Italian Food</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Garlic Sauce Mushroom Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Pasta With Sour Tomato Sauce</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Tangy Basil Sauce Baked Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Whole Wheat Gnocchi With Sauce</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Spicy Chili Flakes Chicken Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Spicy Aromatic Butter Chicken Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Rich Flavour Broccoli Garlic Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>See All</Typography></a>
                </MenuItem>
            </Box>
            <Box>
                <MenuItem >
                    <a href="/"><Typography variant='h6' component="a" sx={{marginBottom:"15px", textAlign:"center",color:"black", fontWeight:"800"}}>Italian Food</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Garlic Sauce Mushroom Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Pasta With Sour Tomato Sauce</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Tangy Basil Sauce Baked Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Whole Wheat Gnocchi With Sauce</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Spicy Chili Flakes Chicken Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Spicy Aromatic Butter Chicken Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>Rich Flavour Broccoli Garlic Pasta</Typography></a>
                </MenuItem>
                <MenuItem >
                    <a href="/"><Typography variant='body1' component="a" sx={{color:"black"}}>See All</Typography></a>
                </MenuItem>
            </Box>
            
        </Stack>
        {/* 
          <Avatar /> Profile
        </MenuItem>
        <MenuItem >
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem> */}
      </Menu>
    </React.Fragment>
  )
}

export default MenuDrop