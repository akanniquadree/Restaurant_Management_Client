import React, { useEffect, useState } from "react";
import "./product.scss";
import Navbar from "../Component/Navbar/Navbar";
import Basebar from "../Component/Basebar/Basebar";
import DataTable from "../Component/Datatable/DataTable";
import Menu from "../Component/Menu/Menu";
import { products } from "../Component/Data";
import Add from "../Component/Add/Add";
import axios from "axios";
import ProductForm from "../Component/Add/FormInput/ProductForm";
import { Skeleton } from "@mui/material";
import { format } from "timeago.js";

export default function AdminProduct() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cate, setcate] = useState([]);
  const [loading, setLoading] = useState(true);
  const arrayForSort = [...products];
  const sortedData = arrayForSort?.sort(
    (a, b) => Number(a.createdAt) - Number(b.createdAt)
  );

  useEffect(() => {
    FetchProduct();
    FetchCat();
    return () => {};
  }, []);
  const FetchProduct = async () => {
    try {
      const { data } = await axios.get(
        "https://restaurantmanagement-h0y1.onrender.com/api/product",
        { withCredentials: true }
      );
      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {}
  };
  const FetchCat = async () => {
    try {
      const { data } = await axios.get(
        "https://restaurantmanagement-h0y1.onrender.com/api/category",
        { withCredentials: true }
      );
      setcate(data);
    } catch (error) {}
  };
  const columns = [
    // { field: "_id", headerName: "ID", width: 90 },
    { field: "code", headerName: "Code", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.avatar || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "name",
      type: "string",
      headerName: "Product Name",
      width: 250,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "discount",
      type: "string",
      headerName: "Discount Price",
      width: 150,
    },
    {
      field: "time",
      type: "string",
      headerName: "Prepare Time",
      width: 90,
    },

    {
      field: "detail",
      headerName: "Detail",
      type: "string",
      width: 200,
    },
    {
      field: "qty",
      headerName: "In Stock",
      width: 150,
      type: "String",
    },
    {
      field: "ingredient",
      headerName: "Ingredient",
      type: "string",
      width: 200,
    },
    {
      field: "other",
      headerName: "Other",
      type: "string",
      width: 200,
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
  ];
  // const inputs = [
  // {name:"Title",value:"name",type:"text"},
  // {name:"Price",value:"price",type:"number"},
  // {name:"Discount",value:"discount",type:"number"},
  // {name:"Quantity",value:"qty",type:"number"},
  // {name:"Prepare Time",value:"time",type:"text"},
  // {name:"Category",value:"cat",type:"select"},
  // {name:"Avatar",value:"avatar",type:"file"},
  // {name:"Extra Images",value:"imgs",type:"file"},
  // {name:"Ingredient",value:"ingredient",type:"text-area"},
  // {name:"Details",value:"detail",type:"text-area"},
  // {name:"Others",value:"others",type:"text-area"}
  // ]
  // const onChangeHandler  = (newState) => () =>{
  //   setValue(newState)
  //   console.log(value)
  // }

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
              <h1>Products</h1>
              <button
                onClick={() => {
                  setOpen(true);
                }}
              >
                Add New Product
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
                title="product"
                rows={products}
                setRows={setProducts}
              />
            )}

            {open && (
              <Add
                title="Product"
                setOpen={setOpen}
                Form={
                  <ProductForm
                    cate={cate}
                    setProducts={setProducts}
                    rows={products}
                  />
                }
              />
            )}
          </div>
        </div>
      </div>
      {/* <Basebar/> */}
    </div>
  );
}
