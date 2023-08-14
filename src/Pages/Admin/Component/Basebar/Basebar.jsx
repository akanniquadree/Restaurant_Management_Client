import React from 'react'
import "./Basebar.css"
import { Typography } from '@mui/material'


export default function Basebar() {
  return (
    <div className="footer">
      <Typography variant='h4' sx={{color:"black", fontSize:"14px"}}><b style={{color:"red", textDecoration:"underline"}}>Kendil</b> Home Kitchen</Typography>
      <span>CopyRight 2023</span>
    </div>
  )
}
