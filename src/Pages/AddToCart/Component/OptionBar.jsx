import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import "./option.css"
import { Link } from 'react-router-dom'

export default function OptionBar() {
  return (
    <>
        <Box className="toolbar">
            <Stack direction="column" spacing={1} sx={{height:"300px",backgroundColor:" black",opacity: 0.7}} justifyContent="center" alignItems={"center"}>
                <Typography sx={{color:"white",}} align="center" variant="h3" component="h4">Add To Cart </Typography>
                <Stack direction="row" spacing={1}  justifyContent="center">
                    <Link to="/"><Typography sx={{color:"white"}} className='optionTwo' variant="body1" component="p">Home </Typography></Link>
                    <Typography  sx={{color:"white"}}  variant="body1" component="h4">&gt;</Typography>
                    <Typography sx={{color:"white"}}  variant="body1" component="p">Cart </Typography>
                </Stack>
            </Stack>
        </Box>
    </>
  )
}
