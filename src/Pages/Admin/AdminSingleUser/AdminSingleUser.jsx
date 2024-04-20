import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Basebar from "../Component/Basebar/Basebar"
import { singleUser } from "../Component/Data"
import Menu from "../Component/Menu/Menu"
import Navbar from "../Component/Navbar/Navbar"
import SingleUsers from "../Component/SingleItem/SingleUser"
import "./singleUser.scss"
import axios from 'axios'

export default function AdminSingleUser() {
    const [single, setSingleProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const {id} = useParams()

    useEffect(()=>{
        const FetchData = async() =>{
            try {
                const {data} = await axios.get(`https://restaurantmanagement-h0y1.onrender.com/api/user/${id}`,{withCredentials:true})
                if(data){
                    setLoading(false)
                    setSingleProduct(data)
                    console.log(data)
                }
            } catch (error) {
                setError(error.message)
            }
           
        }
        FetchData()
    },[])
    
  return (
    <div className="main">
        <Navbar/>
            <div className="container">
                <div className="menuContainer">
                    <Menu/>
                </div>
                <div className="contentContainer">
                    <div className="adminsingle">
                        <SingleUsers singleUser={singleUser}  single={single} loading={loading}/>
                    </div>
                </div>

            </div>
    </div>
  )
}
