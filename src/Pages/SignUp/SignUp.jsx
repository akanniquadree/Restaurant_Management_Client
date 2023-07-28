import React, { useState } from 'react'
import { Box, Button, Container,FormControl,Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { AppRegistration, Visibility, VisibilityOff } from '@mui/icons-material'
import "./signup.css"
import Topbar from '../../Topbar/Topbar';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword2 = (event) => {
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
        <Container sx={{display:"flex",alignItem:"center",justifyContent:"center",  height:"90vh"}}>
            <Paper elevation={0}  sx={{width:{xs:"90%",sm:"70%",md:"50%"},px:2,margin:"auto",backgroundColor:"rgb(255 250 242)"}}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="on"
                    >
                        <Typography align="center" variant="h4" sx={{color:"red", marginTop:"40px !important"}}>Register</Typography>
                        <Typography align="center" variant="body2" sx={{color:"black" ,marginBottom:"40px !important"}}>Already have an account? <a href="/" ><Typography className="optionTwo" component="a" variant="body2" sx={{color:"#c59d5f"}}> Sign In</Typography></a></Typography>
                        <div>
                            <TextField id="outlined-basic" label="First Name" variant="outlined" required sx={style} size="small" fullWidth/>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" required sx={style} size="small" fullWidth/>
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
                            <FormControl variant="outlined" sx={style} fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" sx={{top:"-7px"}}>Re:Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword2 ? 'text' : 'password'}
                                    size="small"
                                    required
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
                                    <Button variant="contained" sx={{ my: 1}} className="bot" endIcon={<AppRegistration />}>
                                       Register Now
                                    </Button>
                            </Stack>
                            
                        </div>
                    
                </Box>
            </Paper>
        </Container>
    </>
  )
}
