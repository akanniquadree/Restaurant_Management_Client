import React, { useContext, useState } from 'react'
import { Box, Button, Container,Divider,FormControl,Grid, Snackbar,IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { AppRegistration, Login, Visibility, VisibilityOff } from '@mui/icons-material'
import Topbar from '../../Topbar/Topbar';
import OptionBar from '../AddToCart/Component/OptionBar';
import axios from "axios"
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material'
import { AuthContext } from '../../Context/UserContext';
// import "./signup.css"

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("")
    const [state, setState] = useState({open: false, vertical: 'top', horizontal: 'right',});
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const redirect = window.location.search ? window.location.search.split("=")[1] : "/"
    const { vertical, horizontal, open } = state;
    const {user,isFetching, error, dispatch} = useContext(AuthContext)

      const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
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
      const handleSumbmit = async(e) =>{
        e.preventDefault()
        try {
            dispatch({type:"LOGIN_START"})
            const {data} = await axios.post("https://restaurantmanagement-h0y1.onrender.com/api/auth/signin", {email,password})
            if(data){
              console.log(data)
                  setMessage(data.message)
                  dispatch({type:"LOGIN_SUCCESS", payload:data.user})
              //  localStorage.setItem("user", JSON.stringify(data.user))
              //  localStorage.setItem("token", data.token)

            }
        } catch (error) {
          dispatch({type:"LOGIN_FAILURE", payload:error.message})
          dispatch({type:"LOGIN_FAILURE", payload:error.response.data.error})
        }
    }
    
  return (
    <>
        <Topbar/>
        <Toolbar/>
        <OptionBar name={"Sign In"} desc="login"/>
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
                        <Typography align="center" variant="h4" sx={{color:"red", margin:"40px  0 !important"}}>Sign In</Typography>
                        <div>
                            <TextField id="outlined-basic" value={email} onChange={(e)=>setEmail(e.target.value)} label="Email" variant="outlined" type="email" required sx={style} size="small" fullWidth/>
                            <FormControl variant="outlined" sx={style} fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" sx={{top:"-7px"}}>Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    size="small"
                                    required
                                    value={password} 
                                    onChange={(e)=>setPassword(e.target.value)}
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
                            <Stack direction="row" justifyContent="center">
                                    <Button variant="contained" disabled={isFetching} sx={{ my: 1,width:"250px"}} className="bot"  onClick={handleClick({ vertical: 'top', horizontal: 'right' })} type="submit"endIcon={<Login />}>
                                        {
                                            isFetching ?
                                            <CircularProgress size="23px" style={{color:"white"}}/>
                                            :
                                            " Sign In" 
                                        }
                                      
                                    </Button>
                                  
                            </Stack>
                            <Typography align="center" variant="body1" sx={{color:"red", marginTop:"10px !important"}}>{error}</Typography>
                            <Divider sx={{my:1}}/>
                            <Stack direction="row" justifyContent="space-between">
                                <Link to={redirect === "/" ? "/register" : "/register?redirect=" +redirect} ><Typography className="optionTwo" component="a" variant="body2" sx={{color:"black", my:1}}> Forget Password</Typography></Link>
                                <Typography align="center" variant="body2" sx={{color:"black" ,my:1}}>Dont have an account? <a href="/" ><Typography className="optionTwo" component="a" variant="body2" sx={{color:"#c59d5f"}}> Register</Typography></a></Typography>
                        
                            </Stack>
                        </div>
                </Box>
                {
                    message &&
                    <Snackbar
                    ContentProps={{
                        sx: {
                          background: "red"
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
            </Paper>
        </Container>
    </>
  )
}
