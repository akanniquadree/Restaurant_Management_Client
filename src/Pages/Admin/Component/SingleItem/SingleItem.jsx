import React from 'react'
import "./single.scss"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from '@mui/material';


export default function SingleItem(props) {
  return (
    <div className="singleItem">
      <div className="singleInfoCont">
        <div className="singleInfo">
          <div className="topInfo">
            {
              props.img &&<img src={props.img} alt="" />
            }
            
            <h1>{props.title}</h1>
            <Button variant='contained' color="success">Update</Button>
          </div>
          <div className="topDetail">
            
              {
               Object.entries(props.info).map((itm)=>(
                  <div className="detailCont" key={itm[0]}>
                    <span className="detailTitle">{itm[0]}:</span>
                    <span className="detailValue">{itm[1]}</span>
                  </div>
                ))
              }
          </div>
        </div>
        <hr className="line" />
        {props.chart &&
        <div className="singleInfoLog">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart
              // width={500}
              // height={500}
              data={props.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {
                props.chart.dataKeys.map((itm)=>(
                  <Line type="monotone" dataKey={itm.name} stroke={itm.color} />
                ))
              }
            </LineChart>
        </ResponsiveContainer>
        </div>} 
      </div>
      <div className="singleAct">
        <h2>Lastest Activities</h2>
        {
          props.activities &&
              <ul>
                {
                  props.activities.map((act, index)=>(
                    <li key={index}>
                      <div>
                        <p>{act.text}</p>
                        <time>{act.time}</time>
                      </div>
                    </li>
                 
                  ))
                }
              </ul>
        }
      </div>
    </div>
  )
}
