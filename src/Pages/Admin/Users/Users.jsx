import React, { useEffect, useState } from "react";
import "./user.scss";
import Navbar from "../Component/Navbar/Navbar";
import Basebar from "../Component/Basebar/Basebar";
import DataTable from "../Component/Datatable/DataTable";
import Menu from "../Component/Menu/Menu";
import { userRows } from "../Component/Data";
import Add from "../Component/Add/Add";
import axios from "axios";
import { Skeleton } from "@mui/material";
import UserForm from "../Component/Add/FormInput/UserForm";
import { format } from "timeago.js";

export default function Users() {
  const [open, setOpen] = useState(false);
  const [userRows, setUserRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const arrayForSort = [...userRows];
  const sortedData = arrayForSort?.sort(
    (a, b) => Number(a.createdAt) - Number(b.createdAt)
  );
  useEffect(() => {
    async function Fetch() {
      try {
        const { data } = await axios.get(
          "https://restaurantmanagement-h0y1.onrender.com/api/user",
          { withCredentials: true }
        );
        if (data) {
          setUserRows(data);
          setLoading(false);
        }
      } catch (error) {}
    }
    Fetch();
  }, [userRows.length]);
  const columns = [
    {
      field: "profPic",
      headerName: "Avatar",
      width: 70,
      renderCell: (params) => {
        return <img src={params.row.profPic || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "first_name",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "last_name",
      type: "string",
      headerName: "Last name",
      width: 120,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 120,
      type: "string",
      renderCell: (params) => {
        return <p>{format(params.row.createdAt)}</p>;
      },
    },
    {
      field: "verify",
      headerName: "Verified",
      width: 70,
      type: "boolean",
    },
    {
      field: "role",
      headerName: "User Type",
      width: 100,
      type: "String",
      renderCell: (params) => {
        return params.row.role === "0A10" ? <p>Admin</p> : <p>User</p>;
      },
    },
  ];

  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <div className="Users">
            <div className="informationContainer">
              <h1>Users</h1>
              <button
                onClick={() => {
                  setOpen(true);
                }}
              >
                Add New User
              </button>
            </div>
            {loading ? (
              <Skeleton
                sx={{ bgcolor: "grey.700" }}
                animation="wave"
                variant="rectangular"
                width={"100%"}
                height={"500px"}
              />
            ) : (
              <DataTable
                columns={columns}
                title={"user"}
                rows={userRows}
                setRows={setUserRows}
              />
            )}

            {open && (
              <Add
                title="User"
                columns={columns}
                setOpen={setOpen}
                Form={
                  <UserForm
                    setOpen={setOpen}
                    setUserRows={setUserRows}
                    rows={userRows}
                  />
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
