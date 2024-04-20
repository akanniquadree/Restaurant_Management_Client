import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteForever, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import DeleteUser from "../Add/Delete/DeleteUser";
import Add from "../Add/Add";
import axios from "axios";

export default function DataTable({ rows, setRows, title, columns }) {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const handleDelete = async () => {
    try {
      setError("");
      setLoading(true);
      const { data } = await axios.delete(
        `https://restaurantmanagement-h0y1.onrender.com/api/${title}/${id}`,
        { withCredentials: true }
      );
      if (data) {
        setLoading(false);
        setError("");
        setMessage(data.message);
        setRows(
          rows.filter((item) => {
            return item._id !== data.user._id;
          })
        );
        if (message) {
          setOpen(false);
        }
      }
    } catch (error) {
      setLoading(false);
      if (error.response.data.error) {
        return setError(error.response.data.error);
      }
      setError(error.message);
    }
  };

  const action = {
    field: "action",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/admin/${title}/${params.row._id}`}>
            <IconButton aria-label="edit" color="success">
              <Edit />
            </IconButton>
          </Link>

          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => {
              setOpen(true);
              setId(params.row._id);
              setError("");
              setMessage("");
            }}
          >
            <DeleteForever />
          </IconButton>
        </div>
      );
    },
  };

  return (
    <div className="datatable">
      {/* // <IconButton aria-label="delete" color="error" onClick={()=>{handleDelete(params.row._id)}}></IconButton> */}
      <DataGrid
        getRowId={(row) => row._id}
        className="dataGrid"
        rows={rows}
        columns={[...columns, action]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        disableColumnFilter
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnSelector
      />
      {open && (
        <Add
          setOpen={setOpen}
          Form={
            title === "category" ? (
              <DeleteUser
                cat="category"
                setOpen={setOpen}
                handleDelete={handleDelete}
                error={error}
                loading={loading}
                message={message}
              />
            ) : (
              <DeleteUser
                setOpen={setOpen}
                handleDelete={handleDelete}
                error={error}
                loading={loading}
                message={message}
              />
            )
          }
        />
      )}
    </div>
  );
}
