import React from "react"
import Menu from "../Component/Menu/Menu"
import Navbar from "../Component/Navbar/Navbar"
import "./singleProduct.scss"
import Basebar from "../Component/Basebar/Basebar"
import SingleItem from "../Component/SingleItem/SingleItem"
import { singleProduct } from "../Component/Data"


export default function AdminSingleProduct() {
  return (
    <div className="main">
        <Navbar/>
            <div className="container">
                <div className="menuContainer">
                    <Menu/>
                </div>
                <div className="contentContainer">
                    <div className="adminsingle">
                        <SingleItem {...singleProduct}/>
                    </div>
                </div>

            </div>
        <Basebar/>
    </div>
    
  )
}
