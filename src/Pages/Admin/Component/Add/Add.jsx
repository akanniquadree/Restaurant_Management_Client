import { Close } from "@mui/icons-material"
import "./add.scss"

import React from 'react'

export default function Add(props) {
    const handleSubmit = (e) =>{
        e.preventdefault()
    }
  return (
    <div className="add">
        <div className="modal">
            <Close onClick={()=>props.setOpen(false)} sx={{position:"absolute", right:"10px", top:"10px", cursor:"pointer"}}/>
            <h1>Add new {props.title}</h1>
            <form onSubmit={handleSubmit}>
                {
                    props.columns.filter((item)=>item.field !== "id" && item.field !== "img")
                    .map((itm)=>(
                        <div className="modalItem">
                            <label>{itm.headerName}</label>
                            <input type={itm.type} placeholder={itm.field} />
                        </div>
                    ))
                }
                <button type="submit">Create {props.title}</button>
            </form>
        </div>
    </div>
  )
}
