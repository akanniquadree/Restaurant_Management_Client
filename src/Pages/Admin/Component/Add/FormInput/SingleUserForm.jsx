import React, { useState } from "react";
import "./Form.scss";
import axios from "axios";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

export default function UserForm(props) {
  const [first_name, setFirst_name] = useState(props.single.first_name);
  const [newData, setNewData] = useState([]);
  const [last_name, setLast_name] = useState(props.single.last_name);
  const [email, setEmail] = useState(props.single.email);
  const [add, setAdd] = useState(props.single.add);
  const [phone, setPhone] = useState(props.single.add);
  const [role, setRole] = useState(props.single.role);
  const [verify, setVerify] = useState(props.single.verify);
  const [password, setPassword] = useState(props.single.password);
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setIsFetching(true);
  //     setError("");
  //     const form = new FormData();
  //     form.append("first_name", first_name);
  //     form.append("last_name", last_name);
  //     form.append("add", add);
  //     form.append("email", email);
  //     form.append("profPic", profPic);
  //     form.append("role", role);
  //     form.append("verify", verify);
  //     form.append("password", password);
  //     form.append("phone", phone);
  //     const { data } = await axios.post(
  //       "https://restaurantmanagement-h0y1.onrender.com/api/user/admin",
  //       form,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     if (data) {
  //       setUserRows([...rows, data.savedUser]);
  //       setIsFetching(false);
  //       setState({ vertical: "top", horizontal: "right", open: true });
  //       setMessage(data.message);
  //       if (message) {
  //         setOpen(false);
  //       }
  //     }
  //   } catch (error) {
  //     setIsFetching(false);
  //     console.log(error);
  //     if (error.response.data.error) {
  //       return setError(error.response.data.error);
  //     }
  //     setError(error.message);
  //   }
  // };
  return (
    <>
      <form encType="multipart/form-data">
        {/* <form onSubmit={handleSubmit} encType="multipart/form-data"> */}
        <div className="modalItem">
          <label htmlFor="first_name">
            First Name <b style={{ color: "red" }}>*</b>
          </label>
          <input
            required
            type="text"
            placeholder="Enter user First name"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="last_name">
            Last Name <b style={{ color: "red" }}>*</b>
          </label>
          <input
            required
            type="text"
            placeholder="Enter user last name"
            name="last_name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="email">
            Email <b style={{ color: "red" }}>*</b>
          </label>
          <input
            required
            type="email"
            placeholder="Enter the user email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="phone">
            Phone Number <b style={{ color: "red" }}>*</b>
          </label>
          <input
            required
            type="text"
            placeholder="Enter the user phone number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="password">
            Password <b style={{ color: "red" }}>*</b>
          </label>
          <input
            required
            type="text"
            placeholder="Enter user password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="time">
            Verify <b style={{ color: "red" }}>*</b>
          </label>
          <select
            required
            name="verify"
            id="verify"
            value={verify}
            onChange={(e) => setVerify(e.target.value)}
          >
            <option disabled value="">
              Select an option
            </option>
            <option value={false}>Not Verified</option>
            <option value={true}>Verified</option>
          </select>
        </div>
        <div className="modalItem">
          <label htmlFor="role">
            Role <b style={{ color: "red" }}>*</b>
          </label>
          <select
            required
            name="role"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option disabled value="">
              Select a User Role
            </option>
            <option value="000U0">User</option>
            <option value="0A10">Admin</option>
          </select>
        </div>
        <div className="modalItem">
          <label htmlFor="avatar">
            Profile Picture <b style={{ color: "red" }}>*</b>
          </label>
          <input
            // required
            type="file"
            name="profPic"
            onChange={(e) => setProfPic(e.target.files[0])}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="add">
            Address <b style={{ color: "red" }}>*</b>
          </label>
          <textarea
            required
            name="add"
            id="add"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
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
            "Create User"
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
