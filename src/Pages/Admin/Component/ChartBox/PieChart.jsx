import React from 'react'
import "./chart.scss"
import { ResponsiveContainer,PieChart, Pie, Sector, Cell, Tooltip } from 'recharts'

const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];

export default function PieChartBox() {
  return (
    <div className="pieChartBox">
        <h1>Leads by Source</h1>
        <div className="piechart">
            <ResponsiveContainer width={"99%"} height={300}>
                <PieChart>
                    <Tooltip
                        contentStyle={{backgroundColor:"white", borderRadius:"5px"}}
                    />
                    <Pie
                        data={data}
                        innerRadius={"70%"}
                        outerRadius={"90%"}
                        paddingAngle={5}
                        dataKey="value"
                    >
                    {data.map((item) => (
                        <Cell key={item.nane} fill={item.color} />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="optionContainer">
            {
                data.map((itm)=>(
                    <div className="optionWrap" key={itm.name}>
                        <div className="titleContainer">
                            <div className="dot" style={{backgroundColor:itm.color}}></div> 
                            <span>{itm.name}</span>
                        </div>
                        <span>{itm.value}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
