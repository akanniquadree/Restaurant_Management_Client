import React, { useState } from 'react'
import { Box, Button, CircularProgress, Container,FormControl,Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Snackbar, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { AppRegistration, Visibility, VisibilityOff } from '@mui/icons-material'
import "./signup.css"
import Topbar from '../../Topbar/Topbar';
import OptionBar from '../AddToCart/Component/OptionBar';
import axios from "axios"

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [first_name, setFirst_Name] = useState("")
    const [last_name, setLast_Name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isFetching, setIsFetching] = useState(false)
    const [state, setState] = useState({open: false, vertical: 'top', horizontal: 'right',});
    const { vertical, horizontal, open } = state;
    const redirect = window.location.search ? window.location.search.split("=")[1] : "/"
    
      const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
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
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };
    
    const handleSumbmit = async(e) =>{
        e.preventDefault()
        setError("")
        try {
            setIsFetching(true)
            const {data} = await axios.post("https://restaurantmanagement-h0y1.onrender.com/api/auth/register", {first_name,last_name,email,password,conPassword})
            if(data){
                setIsFetching(false)
                setError("")
                setMessage(data.message)
                window.location.replace(redirect)

            }
        } catch (error) {
            setIsFetching(false)
            setMessage("")
                setError(error.message)
                setError(error.response.data.error)
        }
    }
    

  return (
    <>
        <Topbar/>
        <Toolbar/>
        <OptionBar name={"Register"} desc="signup"/>
        <Container sx={{display:"flex",alignItem:"center",justifyContent:"center",  height:"90vh"}}>
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
                        <Typography align="center" variant="h4" sx={{color:"red", marginTop:"40px !important"}}>Register</Typography>
                        <Typography align="center" variant="body2" sx={{color:"black" ,marginBottom:"40px !important"}}>Already have an account? <a href="/signin" ><Typography className="optionTwo" component="a" variant="body2" sx={{color:"#c59d5f"}}> Sign In</Typography></a></Typography>
                        <div>
                            <TextField id="outlined-basic" label="First Name" value={first_name} onChange={(e)=>setFirst_Name(e.target.value)} variant="outlined" required sx={style} size="small" fullWidth/>
                            <TextField id="outlined-basic" label="Last Name" value={last_name} onChange={(e)=>setLast_Name(e.target.value)} variant="outlined" required sx={style} size="small" fullWidth/>
                            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required sx={style} size="small" fullWidth/>
                            <FormControl variant="outlined" sx={style} fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" sx={{top:"-7px"}}>Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    size="small"
                                    value={password} 
                                    onChange={(e)=>setPassword(e.target.value)} 
                                    required
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <FormControl variant="outlined" sx={style} fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" sx={{top:"-7px"}}>Re:Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword2 ? 'text' : 'password'}
                                    size="small"
                                    required
                                     value={conPassword} 
                                    onChange={(e)=>setConPassword(e.target.value)} 
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword2}
                                        onMouseDown={handleMouseDownPassword2}
                                        edge="end"
                                        >
                                        {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Re:Password"
                                />
                            </FormControl>
                            <Stack direction="row" justifyContent="center">
                                    <Button variant="contained" disabled={isFetching} sx={{ my: 1, width:"250px"}} onClick={handleClick({ vertical: 'top', horizontal: 'right' })} className="bot" type="submit" endIcon={<AppRegistration />}>
                                        {
                                            isFetching ?
                                            <CircularProgress size="23px" style={{color:"white"}}/>
                                            :
                                            "Register Now" 
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
