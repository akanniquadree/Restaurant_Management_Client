import React, { useState } from 'react'
import { Box, Button, CircularProgress, Container,Divider,FormControl,Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Snackbar, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { AppRegistration, Login, Visibility, VisibilityOff } from '@mui/icons-material'
import Topbar from '../../Topbar/Topbar';
import axios from "axios"
import OptionBar from '../AddToCart/Component/OptionBar';
// import "./signup.css"

export default function Reset() {
    const [email, setEmail] = useState("")
    const [isFetching, setIsfetching] = useState(false)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [state, setState] = useState({open: false, vertical: 'top', horizontal: 'right',});
    const { vertical, horizontal, open } = state;


    const style = {
      my:1,
      "& label.Mui-focused": {
          color: "#1b1b1b "
        },
      "& .MuiOutlinedInput-root": {
         
        "&.Mui-focused fieldset": {
          borderColor: "#1b1b1b ",
          opacity:0.5
        }
      }
    } 
    const handleClick = (newState) => () => {
      setState({ ...newState, open: true });
    };
  
    const handleClose = () => {
      setState({ ...state, open: false });
    };

    
      const handleSumbmit = async(e) =>{
        e.preventDefault()
        try {
          setError("")
           setIsfetching(true)
            const {data} = await axios.post("https://restaurantmanagement-h0y1.onrender.com/api/auth/resetpassword", {email})
            if(data){
                  // window.location.replace("/signin")
                  setMessage(data.message)
                  setError("")
                  setIsfetching(false)
            }
        } catch (error) {
            setError(error.message)
            setError(error.response.data.error)
            setIsfetching(false)
        }
    }
  return (
    <>
        <Topbar/>
        <Toolbar/>
        <OptionBar name={"Reset Password"} desc="reset"/>
        <Container sx={{display:"flex",alignItem:"center",justifyContent:"center", height:"80vh" }}>
            <Paper elevation={0}  sx={{width:{xs:"90%",sm:"70%",md:"50%"},px:2,margin:"auto",backgroundColor:"rgb(255 250 242)"}}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="on"
                    onSubmit={handleSumbmit}
                    >
                        <Typography align="center" variant="h4" sx={{color:"red", marginTop:"40px !important"}}>Reset Your Password</Typography>
                        <Typography align="center" variant="body2" sx={{color:"black" , marginBottom:"40px !important"}}>We will send you a email to change your password</Typography>
                            <div>
                                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" value={email} sx={style} onChange={(e)=>setEmail(e.target.value)} required size="small" fullWidth/>
                                <Stack direction="row" justifyContent="center">
                                        <Button variant="contained" disabled={isFetching} sx={{ my: 1,width:"250px"}} onClick={handleClick({ vertical: 'top', horizontal: 'right' })} type="submit" className="bot" endIcon={<AppRegistration />}>
                                        {
                                            isFetching ?
                                            <CircularProgress size="23px" style={{color:"white"}}/>
                                            :
                                            " Submit" 
                                        }
                                        </Button>
                                </Stack>
                                <Typography align="center" variant="body1" sx={{color:"red", marginTop:"10px !important"}}>{error}</Typography>
                            </div>
                </Box>
            </Paper>
            {
                    message &&
                    <Snackbar
                    ContentProps={{
                        sx: {
                          background: "green"
                        }
                      }}
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        message={message}
                        key={vertical + horizontal}
                        autoHideDuration={6000}
                    />
                }
        </Container>
    </>
  )
}
