import Basebar from "../Component/Basebar/Basebar"
import { singleUser } from "../Component/Data"
import Menu from "../Component/Menu/Menu"
import Navbar from "../Component/Navbar/Navbar"
import SingleItem from "../Component/SingleItem/SingleItem"
import "./singleUser.scss"
import React from 'react'

export default function AdminSingleUser() {
  return (
    <div className="main">
        <Navbar/>
            <div className="container">
                <div className="menuContainer">
                    <Menu/>
                </div>
                <div className="contentContainer">
                    <div className="adminsingle">
                        <SingleItem {...singleUser}/>
                    </div>
                </div>

            </div>
        <Basebar/>
    </div>
  )
}
