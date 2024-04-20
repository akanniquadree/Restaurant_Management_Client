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
import { format } from "timeago.js";
import Add from "../Add/Add";
import SingleUserForm from "../Add/FormInput/SingleUserForm";

export default function SingleUsers(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {props.loading ? (
        <Skeleton
          sx={{ bgcolor: "grey.700" }}
          animation="wave"
          width={"100%"}
          height={"500px"}
        />
      ) : (
        <div className="singleItem">
          <div className="singleInfoCont">
            <div className="singleInfo">
              <div className="topInfo">
                {props.single.profPic && (
                  <img src={props.single.profPic} alt="" />
                )}

                <h1>{props.single.last_name}</h1>
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
                  <span className="detailTitle">First Name:</span>
                  <span className="detailValue">{props.single.first_name}</span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Last Name:</span>
                  <span className="detailValue">{props.single.last_name}</span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Email:</span>
                  <span className="detailValue">{props.single.email}</span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Phone Number:</span>
                  <span className="detailValue">{props.single.phone}</span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">User Type:</span>
                  {props.single.role === "0A10" ? (
                    <span className="detailValue">Admin</span>
                  ) : (
                    <span className="detailValue">User</span>
                  )}
                </div>

                <div className="detailCont">
                  <span className="detailTitle">Address:</span>
                  <span className="detailValue">{props.single.add}</span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Verified:</span>
                  {props.single.verify === true ? (
                    <span className="detailValue">Yes</span>
                  ) : (
                    <span className="detailValue">No</span>
                  )}
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Created At:</span>
                  <span className="detailValue">
                    {format(props.single.createdAt)}
                  </span>
                </div>
                <div className="detailCont">
                  <span className="detailTitle">Updated At:</span>
                  <span className="detailValue">
                    {format(props.single.updatedAt)}
                  </span>
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
            {props.singleUser.chart && (
              <div className="singleInfoLog">
                <ResponsiveContainer width="99%" height="100%">
                  <LineChart
                    // width={500}
                    // height={500}
                    data={props.singleUser.chart.data}
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
                    {props.singleUser.chart.dataKeys.map((itm) => (
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
            {props.singleUser.activities && (
              <ul>
                {props.singleUser.activities.map((act, index) => (
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
              Form={<SingleUserForm {...props} />}
            />
          )}
        </div>
      )}
    </>
  );
}
