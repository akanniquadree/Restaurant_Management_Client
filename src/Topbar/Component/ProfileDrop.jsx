import React, { useContext, useState } from 'react'
import { AppRegistration, Close, Login, Logout, Settings } from '@mui/icons-material';
import { Avatar, Menu, MenuItem, Typography,Box, Stack } from '@mui/material';
import { AuthContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function ProfileDrop() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const {user, dispatch} = useContext(AuthContext)
    // console.log(getSetCookie())
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogoutHandle =async (e) =>{
    //const {data} = await axios.get("http://localhost:8000/api/auth/logout", {withCredentials:true})
    
    try {
      e.preventDefault()
      const {data} = await axios.get("https://restaurantmanagement-h0y1.onrender.com/api/auth/logout", {withCredentials:true})
      if(data){
        dispatch({type:"LOGOUT"})
        localStorage.clear()
        window.location.replace("/signin")
      }
    } catch (error) {
      console.log(error)
    }
    
  }


  return (
    <>
     <Avatar alt="Remy Sharp" src="" onClick={handleClick} sx={{cursor:"pointer", height:{ xs:"30px !important", md:"40px !important"},width:{ xs:"30px !important", md:"40px !important"}}}/>
       <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
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
              right: "10px",
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
            <Box>
                <Stack direction="row" justifyContent="flex-end" sx={{width:"100%"}} spacing={5}>
                    <Close htmlColor="black" size="medium" onClick={handleClose}/>
                </Stack>
                {
                  user ? 
                    <>
                        <Link to="/">
                          <MenuItem >
                              <Settings htmlColor="black" sx={{marginRight:"10px"}}/>
                              <Typography variant='body1' component="a" sx={{color:"black"}}>Profile</Typography>
                          </MenuItem>
                        </Link>
                        <Link to="#">
                          <MenuItem onClick={LogoutHandle}>
                              <Logout htmlColor="black"  sx={{marginRight:"10px"}}/>
                              <Typography variant='body1' component="a" sx={{color:"black",marginRight:"10px"}}>Log Out</Typography>
                          </MenuItem>
                        </Link>
                    </>
                    :
                    <>
                        <Link to="/signin">
                          <MenuItem >
                              <Login htmlColor="black"  sx={{marginRight:"10px"}}/>
                              <Typography variant='body1' component="a" sx={{color:"black",marginRight:"10px"}} >Sign in</Typography>
                          </MenuItem>
                      </Link>
                      <Link to="/register">
                          <MenuItem >
                              <AppRegistration htmlColor="black"  sx={{marginRight:"10px"}}/>
                              <Typography variant='body1' component="a" sx={{color:"black",marginRight:"10px"}}>Sign up</Typography>
                          </MenuItem>
                      </Link>
                    </>
                }
                
                
            </Box>
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
    </>
  )
}
