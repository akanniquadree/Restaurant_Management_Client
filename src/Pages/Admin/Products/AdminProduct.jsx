import React from 'react'
import "./product.css"
import Navbar from '../Component/Navbar/Navbar'
import Basebar from '../Component/Basebar/Basebar'
export default function AdminProduct() {
  return (
    <div className="main">
    <Navbar/>
        <div className="container">
            <div className="menuContainer">
                <Menu/>
            </div>
            <div className="contentContainer"></div>
        </div>
    <Basebar/>
</div>
  )
}
