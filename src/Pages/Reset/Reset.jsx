import React, { useState } from 'react'
import { Box, Button, Container,Divider,FormControl,Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { AppRegistration, Login, Visibility, VisibilityOff } from '@mui/icons-material'
import Topbar from '../../Topbar/Topbar';
// import "./signup.css"

export default function Reset() {
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
                        <Typography align="center" variant="h4" sx={{color:"red", marginTop:"40px !important"}}>Reset Your Password</Typography>
                        <Typography align="center" variant="body2" sx={{color:"black" , marginBottom:"40px !important"}}>We will send you a email to change your password</Typography>
                            <div>
                                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required sx={{ my: 1}} size="small" fullWidth/>
                                <Stack direction="row" justifyContent="center">
                                        <Button variant="contained" sx={style} className="bot" endIcon={<Login />}>
                                        Submit
                                        </Button>
                                </Stack>
                            </div>
                </Box>
            </Paper>
        </Container>
    </>
  )
}
