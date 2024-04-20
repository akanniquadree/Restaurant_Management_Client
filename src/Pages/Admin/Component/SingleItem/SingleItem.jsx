import React, { useState } from "react";
import "./single.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button, Skeleton } from "@mui/material";
import Add from "../Add/Add";
import SingleProductForm from "../Add/FormInput/SingleProductForm";

export default function SingleItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {props.loading ? (
        <Skeleton
          sx={{ bgColor: "white" }}
          animation="wave"
          width={"100%"}
          height={"100%"}
        />
      ) : (
        <div className="singleItem">
          <div className="singleInfoCont">
            <div className="singleInfo">
              <div className="topInfo">
                {props.single.avatar && (
                  <img src={props.single.avatar} alt="" />
                )}

                <h1>{props.single.name}</h1>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Update
                </Button>
              </div>
              <div className="topDetail">
                <div className="detailCont">
                  <span className="detailTitle">Code:</span>
                  <span className="detailValue">{props.single.code}</span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Category:</span>
                  <span className="detailValue">
                    {props.single.categoryId.name}
                  </span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Price:</span>
                  <span className="detailValue">{props.single.price}</span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Discount:</span>
                  <span className="detailValue">{props.single.discount}</span>
                </div>

                <div className="detailCont">
                  <span className="detailTitle">Quantity:</span>
                  <span className="detailValue">{props.single.qty}</span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Preparation Time:</span>
                  <span className="detailValue">{props.single.time}</span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Ingredient:</span>
                  <span className="detailValue">{props.single.ingredient}</span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Detail:</span>
                  <span className="detailValue">{props.single.detail}</span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Others:</span>
                  <span className="detailValue">{props.single.other}</span>
                </div>
                <div className="detailCont">
                  {props.single.imgs.map((itm, index) => (
                    <img src={itm} alt="" key={index} />
                  ))}
                </div>
                {/* {
                  Object.entries(props.single).map((itm)=>(
                      <div className="detailCont" key={itm[0]}>
                        <span className="detailTitle">{itm[0]}:</span>
                        <span className="detailValue">{itm[1]}</span>
                      </div>
                    ))
                  } */}
              </div>
            </div>
            <hr className="line" />
            {props.singleProduct.chart && (
              <div className="singleInfoLog">
                <ResponsiveContainer width="99%" height="100%">
                  <LineChart
                    // width={500}
                    // height={500}
                    data={props.singleProduct.chart.data}
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
                    {props.singleProduct.chart.dataKeys.map((itm) => (
                      <Line
                        type="monotone"
                        dataKey={itm.name}
                        stroke={itm.color}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
          <div className="singleAct">
            <h2>Lastest Activities</h2>
            {props.singleProduct.activities && (
              <ul>
                {props.singleProduct.activities.map((act, index) => (
                  <li key={index}>
                    <div>
                      <p>{act.text}</p>
                      <time>{act.time}</time>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {open && (
            <Add
              title="Product"
              setOpen={setOpen}
              Form={<SingleProductForm {...props} />}
            />
          )}
        </div>
      )}
    </>
  );
}
