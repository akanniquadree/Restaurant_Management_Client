import React, { useState } from 'react'
import { Box, Button, Container,Divider,FormControl,Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { AppRegistration, Login, Visibility, VisibilityOff } from '@mui/icons-material'
import Topbar from '../../Topbar/Topbar';
// import "./signup.css"

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

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
  return (
    <>
        <Topbar/>
        <Toolbar/>
        <Container sx={{display:"flex",alignItem:"center",justifyContent:"center", height:"80vh" }}>
            <Paper elevation={0}  sx={{width:{xs:"90%",sm:"70%",md:"50%"},px:2,margin:"auto",backgroundColor:"rgb(255 250 242)"}}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="on"
                    >
                        <Typography align="center" variant="h4" sx={{color:"red", margin:"40px  0 !important"}}>Sign In</Typography>
                        <div>
                            <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required sx={style} size="small" fullWidth/>
                            <FormControl variant="outlined" sx={style} fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" sx={{top:"-7px"}}>Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    size="small"
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
                            <Stack direction="row" justifyContent="center">
                                    <Button variant="contained" sx={{ my: 1}} className="bot" endIcon={<Login />}>
                                       Sign In
                                    </Button>
                            </Stack>
                            <Divider sx={{my:1}}/>
                            <Stack direction="row" justifyContent="space-between">
                                <a href="/" ><Typography className="optionTwo" component="a" variant="body2" sx={{color:"black", my:1}}> Forget Password</Typography></a>
                                <Typography align="center" variant="body2" sx={{color:"black" ,my:1}}>Dont have an account? <a href="/" ><Typography className="optionTwo" component="a" variant="body2" sx={{color:"#c59d5f"}}> Register</Typography></a></Typography>
                        
                            </Stack>
                        </div>
                </Box>
            </Paper>
        </Container>
    </>
  )
}
