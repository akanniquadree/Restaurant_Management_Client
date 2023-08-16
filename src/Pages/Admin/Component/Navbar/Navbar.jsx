import React from 'react'
import "./navbar.scss"
import { Badge, Typography } from '@mui/material'
import { GridView, Notifications, Search, Settings } from '@mui/icons-material'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Typography variant='h4' sx={{color:"black", fontSize:{ xs:"0.6rem",sm:"1rem", md:"1rem"}}}><b style={{color:"red", textDecoration:"underline"}}>Kendil</b> Home Kitchen</Typography>
      </div>
      <div className="icons">
        <Search className="icon"/>
        <GridView className="icon"/>
        <Badge badgeContent={4} color="error">
          <Notifications/>
        </Badge>
        <div className="user">
          <img src="/Images/food5.avif" alt="user" />
          <span>Jane</span>
        </div>
        <Settings/>
      </div>
    </div>
  )
}
