import React, { useState } from 'react'
import { Search } from '@mui/icons-material'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Divider, FormControl, IconButton, Input, InputAdornment, InputBase, InputLabel, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:{ xs:"70%", sm:"50%"},
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p:{ xs:1, sm:2,md:4},
  };
  
export default function SearchModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
        <Search color="action" onClick={handleOpen} className="optionTwo"/>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
                keepMounted 
            >
                <Fade in={open}>
                <Box sx={style} >
                <FormControl sx={{ m: 1, width:{ xs:"90%",sm:"85%",md:'70%'} }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Search For Food Name</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type="search"
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                <Search/>
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    </FormControl>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
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
                </Box>
                </Fade>
            </Modal>
    </>
  )
}
