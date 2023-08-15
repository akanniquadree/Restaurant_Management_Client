import React from 'react'
import "./chart.scss"
import { Group, NoEncryption } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Charts(props) {
  return (
    <div className="chartbox">
        <div className="boxInfo">
            <div className="boxTitle">
                {props.icon}
                <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to="#" style={{color:props.color}}>
                View All
            </Link>
        </div>
        <div className="chartInfo">
            <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
                <LineChart data={props.chartData}>
                    <Tooltip position={{x:10,y:60}} contentStyle={{background:"transparent",border:"none"}} labelStyle={{display:"none"}}/>
                    <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            <div className="chartText">
                <div className="percentage"style={{color:props.percentage < 0 ? "tomato":"limegreen"}}>{props.percentage}</div>
                <div className="duration">this month</div>
            </div>
        </div>
    </div>
     )
}
