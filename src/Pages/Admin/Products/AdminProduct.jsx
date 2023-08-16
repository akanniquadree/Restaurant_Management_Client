import React, { useState } from 'react'
import "./product.scss"
import Navbar from '../Component/Navbar/Navbar'
import Basebar from '../Component/Basebar/Basebar'
import DataTable from '../Component/Datatable/DataTable'
import Menu from '../Component/Menu/Menu'
import { products } from '../Component/Data'
import Add from '../Component/Add/Add'




export default function AdminProduct() {
  const [open, setOpen] = useState(false)

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
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
                      <h1>Products</h1>
                      <button onClick={()=>{setOpen(true)}}>Add New Product</button>
                    </div>
                    <DataTable columns={columns} title="product" rows={products}/>
                    {
                      open && <Add title="Product" columns={columns} setOpen={setOpen}/>
                    }
                  </div>
                </div>

            </div>
        <Basebar/>
    </div>
  )
}
