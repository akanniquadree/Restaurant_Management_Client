import React from 'react'
import "./menu.scss"
import {Link} from "react-router-dom"
import { Dashboard, Person } from '@mui/icons-material'
import { MenuData } from './MenuData'

export default function Menu() {
  return (
    <div className="Menu">
      {
          MenuData.map((itm, index)=>(
            <div className="item" key={index}>
              <span className="title">{itm.title}</span>
              {
                itm.listItem.map((list, index)=>(
                  <Link to="/admin" className='listItem' key={index}>
                    {list.icon}
                    <span className="listItemTitle">{list.name}</span>
                  </Link>
                ))
              }
              
            </div>

            ))
      }
     
    </div>
  )
}
