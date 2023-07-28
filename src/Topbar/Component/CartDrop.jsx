import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Close, Send, ShoppingCart } from '@mui/icons-material';
import { Avatar, Badge, ListItemAvatar, Stack, Typography } from '@mui/material';
import { Button } from '@material-ui/core';


export default function CartDrop() {
    const [state, setState] = useState(false);
    
      const toggleDrawer = ( open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState(open);
      };
      
  return (
       <div>
            <React.Fragment >
                <Badge badgeContent={4} color="primary">
                    <ShoppingCart color="action" onClick={toggleDrawer(true)}  className="optionTwo" sx={{fontSize:{ xs:"1.2rem",sm:"1.2rem", md:"1.5rem"}}}/>
                </Badge>
                <Drawer
                    anchor="right"
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 350 }}
                        role="presentation"
                        // onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <Stack direction="row" justifyContent="space-between" sx={{margin:"20px 15px"}}>
                            <a href="/" className="optionTwo">
                                <Typography 
                                    sx={{ color:"black" }}
                                    component="span"
                                    variant="h5"
                                >
                                        Shopping Cart
                                </Typography>
                                
                            </a>
                            <Close htmlColor="black" fontSize='medium'  onClick={toggleDrawer(false)}/>
                        </Stack>
                        <Divider  />
                        <List>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{borderRadius:"0%"}}/>
                                </ListItemAvatar>
                                <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"  sx={{borderRadius:"0%"}}/>
                                </ListItemAvatar>
                                <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                    <Stack direction="row" justifyContent="space-between" sx={{margin:"20px 15px"}}>
                            <a href="/" className="optionTwo">
                                <Typography 
                                    sx={{ color:"black" }}
                                    component="span"
                                    variant="h5"
                                >
                                        Sub Total
                                </Typography>
                                
                            </a>
                            <Typography 
                                    sx={{ color:"red" }}
                                    component="span"
                                    variant="body 1"
                                >
                                        89000
                                </Typography>
                        </Stack>
                        <Button variant="contained" className="btn" endIcon={<Send />}>
                            Proceed To Checkout
                        </Button>
                    </Box>
                </Drawer>
            </React.Fragment>
    </div>
  );

}
