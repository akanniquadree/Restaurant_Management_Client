import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reset from "./Pages/Reset/Reset";
import ChangePass from "./Pages/ChangePass.jsx/ChangePass";
import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import AddToCart from "./Pages/AddToCart/AddToCart";
import { Verify } from "./Pages/Verify/Verify";
import ResetPass from "./Pages/ResetPass/ResetPass";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import Users from "./Pages/Admin/Users/Users";
import AdminProduct from "./Pages/Admin/Products/AdminProduct";
import AdminSingleProduct from "./Pages/Admin/AdminSingleProduct/AdminSingleProduct";
import AdminSingleUser from "./Pages/Admin/AdminSingleUser/AdminSingleUser";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./Context/UserContext";
import AdminCat from "./Pages/Admin/Category/AdminCat";

function App() {
  const { user, dispatch } = useContext(AuthContext);
  const UpdateExpireTime = () => {
    const expiredTime = Date.now() + 5000;
    localStorage.setItem("expireTime", expiredTime);
  };
  const checkUserInactivity = async () => {
    const expiredTime = localStorage.getItem("expireTime");
    if (expiredTime < Date.now()) {
      try {
        const { data } = await axios.get(
          "https://restaurantmanagement-h0y1.onrender.com/api/auth/logout",
          { withCredentials: true }
        );
        if (data) {
          dispatch({ type: "LOGOUT" });
          localStorage.clear();
          window.location.replace("/signin");
          console.log("You re Logged Out");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    UpdateExpireTime();
    window.addEventListener("click", UpdateExpireTime);
    window.addEventListener("scroll", UpdateExpireTime);
    window.addEventListener("mousemove", UpdateExpireTime);
    window.addEventListener("keypress", UpdateExpireTime);
    return () => {
      window.removeEventListener("click", UpdateExpireTime);
      window.removeEventListener("scroll", UpdateExpireTime);
      window.removeEventListener("mousemove", UpdateExpireTime);
      window.removeEventListener("keypress", UpdateExpireTime);
    };
  }, []);
  useEffect(() => {
    if (user) {
      const Interval = setInterval(() => {
        checkUserInactivity();
      }, 43200000);
      return () => {
        clearInterval(Interval);
      };
    }
  }, []);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/newpassword" element={<ChangePass />} />
            <Route path="/products/:name" element={<ProductPage />} />
            <Route path="/product/:id/:name" element={<SingleProduct />} />
            <Route path="/cart" element={<AddToCart />} />
            <Route path="/user/:id/verify/:token" element={<Verify />} />
            <Route
              path="/user/:id/resetpassword/:token"
              element={<ResetPass />}
            />
            <Route element={<div>Not Found</div>} />

            <Route path="/admin" exact element={<Dashboard />} />
            <Route path="/admin/category" exact element={<AdminCat />} />
            <Route path="/admin/users" exact element={<Users />} />
            <Route path="/admin/products" exact element={<AdminProduct />} />
            <Route
              path="/admin/product/:id"
              exact
              element={<AdminSingleProduct />}
            />
            <Route path="/admin/user/:id" exact element={<AdminSingleUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
