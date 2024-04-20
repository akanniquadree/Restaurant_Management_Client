import React, { useState } from "react";
import "./Form.scss";
import axios from "axios";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

export default function CatForm({ setOpen, setUserRows, rows }) {
  const [name, setName] = useState("");
  const [profPic, setProfPic] = useState("");
  const [message, setMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsFetching(true);
      setError("");
      const form = new FormData();
      form.append("name", name);
      form.append("profPic", profPic);
      const { data } = await axios.post(
        "https://restaurantmanagement-h0y1.onrender.com/api/category",
        form,
        {
          withCredentials: true,
        }
      );
      if (data) {
        setUserRows([...rows, data.savedCat]);
        setIsFetching(false);
        setState({ vertical: "top", horizontal: "right", open: true });
        setMessage(data.message);
        if (message) {
          setOpen(false);
        }
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
          <label htmlFor="first_name">
            Menu Item Name <b style={{ color: "red" }}>*</b>
          </label>
          <input
            required
            type="text"
            placeholder="Enter Menu Type Name"
            name="first_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="avatar">Menu Type Picture</label>
          {/* <label htmlFor="avatar">
            Profile Picture <b style={{ color: "red" }}>*</b>
          </label> */}
          <input
            // required
            type="file"
            name="profPic"
            onChange={(e) => setProfPic(e.target.files[0])}
          />
        </div>

        {/* {
                    props.columns.filter((item)=>item.field !== "id" && item.field !== "img")
                    .map((itm)=>(
                        <div className="modalItem">
                            <label>{itm.name}</label>
                            {
                                itm.type ==="select" ?
                                <>
                                    <select required name="" id="" value={props.value} onChange={onChangeHandler}>
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
                                                <input required type={itm.type} placeholder={itm.name}  />
                                                :
                                                <input required type={itm.type} placeholder={itm.name} value={props.value} onChange={onChangeHandler} />
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
            <CircularProgress size="12px" style={{ color: "red" }} />
          ) : (
            "Create Menu"
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
