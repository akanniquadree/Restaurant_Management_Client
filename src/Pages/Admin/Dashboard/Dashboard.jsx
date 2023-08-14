import React from 'react'
import "./dashboard.scss"
import "../Globalcss/global.scss"
import Navbar from '../Component/Navbar/Navbar'
import Basebar from '../Component/Basebar/Basebar'
import Menu from '../Component/Menu/Menu'
import { Topbox } from '../Component/Topbox/Topbox'
export default function Dashboard() {
  return (
    <div className="main">
        <Navbar/>
            <div className="container">
                <div className="menuContainer">
                    <Menu/>
                </div>
                <div className="contentContainer">
                  <div className="home">
                    <div className="box box1"><Topbox/></div>
                    <div className="box box2">2</div>
                    <div className="box box3">3</div>
                    <div className="box box4">4</div>
                    <div className="box box5">5</div>
                    <div className="box box6">6</div>
                    <div className="box box7">7</div>
                    <div className="box box8">8</div>
                    <div className="box box9">9</div>
                  </div>
                  
                </div>
            </div>
        <Basebar/>
    </div>
  )
}
