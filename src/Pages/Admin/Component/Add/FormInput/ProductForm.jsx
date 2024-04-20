import React, { useState } from "react";
import "./Form.scss";
import axios from "axios";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

export default function ProductForm({ cate, setProducts, rows, setOpen }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [discount, setDiscount] = useState("");
  const [time, setTime] = useState("");
  const [cat, setCat] = useState("");
  const [avatar, setAvatar] = useState("");
  const [imgs, setImgs] = useState([]);
  const [detail, setdetail] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [other, setOthers] = useState("");
  const [message, setMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;

  // const handleClick = (newState) => () => {
  //     setState({ ...newState, open: true });
  //   };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const SubmitImg = (e) => {
    let images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
    }
    setImgs(images);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsFetching(true);
      setError("");
      setProgress(0);
      const form = new FormData();
      form.append("name", name);
      form.append("price", price);
      form.append("discount", discount);
      form.append("avatar", avatar);
      // form.append("imgs", imgs)
      imgs.forEach((imgs) => {
        form.append("imgs", imgs);
      });
      form.append("other", other);
      form.append("detail", detail);
      form.append("ingredient", ingredient);
      form.append("cat", cat);
      form.append("time", time);
      form.append("qty", qty);
      const { data } = await axios.post(
        "https://restaurantmanagement-h0y1.onrender.com/api/product",
        form,
        {
          withCredentials: true,
          onUploadProgress: (progressEvent) => {
            setProgress(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
          },
        }
      );
      if (data) {
        return (
          setProducts([...rows, data.saveProduct]),
          setIsFetching(false),
          setState({ vertical: "top", horizontal: "right", open: true }),
          setMessage(data.message),
          setOpen(false)
        );
      }
    } catch (error) {
      setIsFetching(false);
      console.log(error);
      if (error.response.data.error) {
        return setError(error.response.data.error);
      }
      setError(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="modalItem">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            placeholder="Enter the product title"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="Enter the product price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            placeholder="Enter the product discount price"
            name="discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="qty">Quantity</label>
          <input
            type="number"
            placeholder="Enter the product quantity"
            name="qty"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="time">Preparation Time</label>
          <input
            type="text"
            placeholder="Enter the Preparation Time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="time">Category</label>
          <select
            name="cat"
            id=""
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          >
            <option disabled value="">
              Select a Category
            </option>
            {cate?.map((itm, index) => (
              <option key={index} value={itm.name}>
                {itm.name}
              </option>
            ))}
          </select>
        </div>
        <div className="modalItem">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="file"
            name="avatar"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="imgs">Other Images</label>
          <input type="file" multiple name="imgs" onChange={SubmitImg} />
        </div>
        <div className="modalItem">
          <label htmlFor="ingredient">Ingredient</label>
          <textarea
            name="ingredient"
            id=""
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          ></textarea>
        </div>
        <div className="modalItem">
          <label htmlFor="detail">Details</label>
          <textarea
            name="detail"
            id=""
            value={detail}
            onChange={(e) => setdetail(e.target.value)}
          ></textarea>
        </div>
        <div className="modalItem">
          <label htmlFor="other">Other Details</label>
          <textarea
            id=""
            value={other}
            name="other"
            onChange={(e) => setOthers(e.target.value)}
          ></textarea>
        </div>
        {/* {
                    props.columns.filter((item)=>item.field !== "id" && item.field !== "img")
                    .map((itm)=>(
                        <div className="modalItem">
                            <label>{itm.name}</label>
                            {
                                itm.type ==="select" ?
                                <>
                                    <select name="" id="" value={props.value} onChange={onChangeHandler}>
                                    <option disabled>Select a Category</option>
                                        {props.cate?.map((itm,index)=>(
                               
                                            <option  key={index} value={itm.name} >{itm.name}</option>
                                         
                                        ))  
                                        } 
                                    </select> 
                                </> 
                                    :
                                <>
                                     {
                                        itm.type === "text-area" ?
                                        <textarea  id="" value={props.value} onChange={onChangeHandler}>
                                        </textarea>
                                        :
                                        <>
                                            {
                                                itm.type === "file" ?
                                                <input type={itm.type} placeholder={itm.name}  />
                                                :
                                                <input type={itm.type} placeholder={itm.name} value={props.value} onChange={onChangeHandler} />
                                            }
                                       </>
                                    }
                                </>
                               
                            }  
                            
                        </div>
                    ))
                } */}
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <p align="center" style={{ color: "red", textAlign: "center" }}>
            {error}
          </p>
        </div>
        <button className="disabled" type="submit">
          {isFetching ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{ color: "red", marginRight: "10px", fontSize: "12px" }}
              >
                {progress}%
              </p>
              <CircularProgress size="12px" style={{ color: "red" }} />
            </div>
          ) : (
            "Create Product"
          )}
        </button>
      </form>
      {/* {autoHideDuration={6000} 
                    message && */}
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        sx={{ top: "75px !important" }}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>

      {/* } */}
    </>
  );
}
