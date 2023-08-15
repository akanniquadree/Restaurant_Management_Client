import React from 'react'
import "./dashboard.scss"
import "../Globalcss/global.scss"
import Navbar from '../Component/Navbar/Navbar'
import Basebar from '../Component/Basebar/Basebar'
import Menu from '../Component/Menu/Menu'
import { Topbox } from '../Component/Topbox/Topbox'
import Charts from '../Component/ChartBox/Charts'
import { ChartBoxUser, barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue } from './Data'
import BarCharts from '../Component/ChartBox/BarChart'
import PieChartBox from '../Component/ChartBox/PieChart'
import BigChart from '../Component/ChartBox/BigChart'
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
                    <div className="box box2"><Charts {...ChartBoxUser}/></div>
                    <div className="box box3"><Charts {...chartBoxProduct}/></div>
                    <div className="box box4"><PieChartBox/></div>
                    <div className="box box5"><Charts {...chartBoxRevenue}/></div>
                    <div className="box box6"><Charts {...chartBoxConversion}/></div>
                    <div className="box box7"><BigChart/></div>
                    <div className="box box8"><BarCharts {...barChartBoxVisit}/></div>
                    <div className="box box9"><BarCharts {...barChartBoxRevenue}/></div>
                  </div>
                  
                </div>
            </div>
        <Basebar/>
    </div>
  )
}
