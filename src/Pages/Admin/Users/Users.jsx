import React, { useState } from 'react'
import "./user.scss"
import Navbar from '../Component/Navbar/Navbar'
import Basebar from '../Component/Basebar/Basebar'
import DataTable from '../Component/Datatable/DataTable'
import Menu from '../Component/Menu/Menu'
import { userRows } from '../Component/Data'
import Add from '../Component/Add/Add'


export default function Users() {
  const [open, setOpen] = useState(false)

  const columns =[
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
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
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];
  
  return (
    <div className="main">
        <Navbar/>
            <div className="container">
                <div className="menuContainer">
                    <Menu/>
                </div>
                <div className="contentContainer">
                  <div className="Users">
                    <div className="informationContainer">
                      <h1>Users</h1>
                      <button onClick={()=>{setOpen(true)}}>Add New User</button>
                    </div>
                    <DataTable columns={columns} title={"user"} rows={userRows}/>
                    {
                      open && <Add title="User" columns={columns} setOpen={setOpen}/>
                    }
                  </div>
                </div>

            </div>
        <Basebar/>
    </div>
  )
}
