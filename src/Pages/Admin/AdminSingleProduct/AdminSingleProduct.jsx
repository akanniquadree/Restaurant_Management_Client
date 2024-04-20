import React, { useEffect, useMemo, useState } from "react";
import Menu from "../Component/Menu/Menu";
import Navbar from "../Component/Navbar/Navbar";
import "./singleProduct.scss";
import SingleItem from "../Component/SingleItem/SingleItem";
import { useParams } from "react-router-dom";
import axios from "axios";
import { singleProduct } from "../Component/Data";

export default function AdminSingleProduct() {
  const [single, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  // const product = useMemo(
  //   () => ({
  //     name: single.name,
  //     price: single.price,
  //     qty: single.qty,
  //     discount: single.discount,
  //     time: single.time,
  //     cat: single.cat,
  //     avatar: single.avatar,
  //     imgs: single.imgs,
  //     detail: single.detail,
  //     ingredient: single.ingredient,
  //   }),
  //   [
  //     single.avatar,
  //     single.cat,
  //     single.detail,
  //     single.discount,
  //     single.imgs,
  //     single.ingredient,
  //     single.name,
  //     single.price,
  //     single.qty,
  //     single.time,
  //   ]
  // );
  useEffect(() => {
    const FetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://restaurantmanagement-h0y1.onrender.com/api/product/${id}`,
          { withCredentials: true }
        );
        if (data) {
          setLoading(false);
          setSingleProduct(data);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    FetchData();
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <div className="adminsingle">
            <p style={{ color: "red", textAlign: "center", fontSize: "20px" }}>
              {error}
            </p>
            <SingleItem
              setProduct={setSingleProduct}
              singleProduct={singleProduct}
              single={single}
              loading={loading}
              id={id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
