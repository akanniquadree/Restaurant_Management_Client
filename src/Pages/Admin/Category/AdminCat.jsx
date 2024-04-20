import React, { useEffect, useState } from "react";
import "../Users/user.scss";
import Navbar from "../Component/Navbar/Navbar";
import Basebar from "../Component/Basebar/Basebar";
import DataTable from "../Component/Datatable/DataTable";
import Menu from "../Component/Menu/Menu";
import { userRows } from "../Component/Data";
import Add from "../Component/Add/Add";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { format } from "timeago.js";
import CatForm from "../Component/Add/FormInput/CatForm";

export default function AdminCat() {
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
          "https://restaurantmanagement-h0y1.onrender.com/api/category",
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
      width: 150,
      renderCell: (params) => {
        return <img src={params.row.profPic || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "name",
      type: "string",
      headerName: "Menu name",
      width: 250,
    },
    {
      field: "productId",
      type: "string",
      headerName: "Products Count",
      width: 220,
      renderCell: (params) => {
        return <p>{params.row.productId.length}</p>;
      },
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
      renderCell: (params) => {
        return <p>{format(params.row.createdAt)}</p>;
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
              <h1>Menu Type</h1>
              <button
                onClick={() => {
                  setOpen(true);
                }}
              >
                Add Menu Type
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
                title={"category"}
                rows={userRows}
                setRows={setUserRows}
              />
            )}

            {open && (
              <Add
                title="Menu Type"
                columns={columns}
                setOpen={setOpen}
                Form={
                  <CatForm
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
