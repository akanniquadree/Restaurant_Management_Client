import React from 'react'
import "./chart.scss"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BarCharts(props) {
  return (
    <>
        <div className="barChartBox">
            <h1>{props.title}</h1>
            <div className="barChart">
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart data={props.chartData}>
                    <Tooltip position={{x:10,y:60}} cursor={{fill:"none"}} contentStyle={{background:"#2a3447",borderRadius:"5px"}} labelStyle={{display:"none"}}/>
                    <Bar dataKey={props.dataKey} fill={props.color}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    </>
  )
}
