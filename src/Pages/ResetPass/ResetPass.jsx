import React, { useState, useEffect } from 'react'
import { Box, Button, CircularProgress, Container,FormControl,Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Snackbar, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { AppRegistration, Visibility, VisibilityOff } from '@mui/icons-material'
import Topbar from '../../Topbar/Topbar';
import OptionBar from '../AddToCart/Component/OptionBar';
import axios from "axios"
import { useParams } from 'react-router-dom';

export default function ResetPass() {
    const params = useParams()
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isFetching, setIsFetching] = useState(false)
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [state, setState] = useState({open: false, vertical: 'top', horizontal: 'right',});
    const { vertical, horizontal, open } = state;
    
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
    
    useEffect(()=>{
        check()
    },[])
    const check = async(e) =>{
        try {
            setLoading(true)
            setError("")
            const {data} = await axios.get(`https://restaurantmanagement-h0y1.onrender.com/api/auth/user/${params.id}/resetpassword/${params.token}`)
            if(data){
                console.log(data)
                setError("")
                setNotFound(true)
                setLoading(false)
                

            }
        } catch (error) {
            setLoading(false)
            setError(error.message)
            setError(error.response.data.error)
            
        }
    }

    const handleSumbmit = async(e) =>{
        try {
            e.preventDefault()
            setError("")
            setIsFetching(true)
            const {data} = await axios.post(`https://restaurantmanagement-h0y1.onrender.com/api/auth/user/${params.id}/resetpassword/${params.token}`, {password,conPassword})
            if(data){
                setIsFetching(false)
                setError("")
                setMessage(data.message)
                // window.location.replace("/")

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
        {
            loading ?
            <Stack direction="column" sx={{height:"90vh"}} spacing={1} justifyContent={"center"} alignItems={"center"}>
                    <img src="/Images/progress.gif" alt="verify" sx={{width:"200px", height:"200px"}}/>
            </Stack>
            :
            <>
                {
                    notFound ?
                    <>
                        <Topbar/>
                        <Toolbar/>
                        <OptionBar name={"Reset Password"} desc="reset"/>
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
                                        <Typography align="center" variant="h4" sx={{color:"red", marginTop:"40px !important"}}>Reset Password</Typography>
                                        <div>
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
                                                            "Reset Now" 
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
                    :
                    <p>Not found</p>
                }
                {
                                    error &&
                                    <Snackbar
                                    ContentProps={{
                                        sx: {
                                        background: "red"
                                        }
                                    }}
                                        anchorOrigin={{ vertical, horizontal }}
                                        open={open}
                                        onClose={handleClose}
                                        message={error}
                                        key={vertical + horizontal}
                                        autoHideDuration={6000}
                                    />
                                }
            </>
        }
        
    </>
  )
}
