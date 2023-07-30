import { ArrowForward } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Offer() {
  return (
    <Box sx={{backgroundColor:"#041527",height:"500px", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Box sx={{width:"50%"}}>
          <Stack direction="column"  alignItems="center" justifyContent="center" spacing={3} >
            <Typography variant='body1' component="p" color="error">Up to 50% Discount off</Typography>
            <Typography variant='h4' component="p" color="white">On Italian, Mexican, and Indian cuisine</Typography>
            <Typography variant='body2'align='center' component="p" color="white">Augue mauris augue neque gravida in fermentum et sollicitudin ac. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. </Typography>
            <Button variant="contained"  className="bot" endIcon={<ArrowForward/>}>
                                       Order Now
            </Button>
          </Stack>
        </Box>
    </Box>
  )
}

