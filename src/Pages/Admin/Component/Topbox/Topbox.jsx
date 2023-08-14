import React from 'react'
import "./Topbox.scss"


const UpbarUser = [
    {
        img:"/Images/food3.avif",
        name:" Rof boss grit",
        email:"akanniquadry7@gmail.com",
        amount:"5.99"
    },
    {
        img:"/Images/food5.avif",
        name:" Rof boss grit",
        email:"akanniquadry7@gmail.com",
        amount:"5.99"
    },
    {
        img:"/Images/food6.avif",
        name:" Rof boss grit",
        email:"akanniquadry7@gmail.com",
        amount:"5.99"
    },
    {
        img:"/Images/food8.avif",
        name:" Rof boss grit",
        email:"akanniquadry7@gmail.com",
        amount:"5.99"
    },
    {
        img:"/Images/food4.avif",
        name:" Rof boss grit",
        email:"akanniquadry7@gmail.com",
        amount:"5.99"
    },
    {
        img:"/Images/food10.avif",
        name:" Rof boss grit",
        email:"akanniquadry7@gmail.com",
        amount:"5.99"
    },
    {
        img:"/Images/food11.avif",
        name:" Rof boss grit",
        email:"akanniquadry7@gmail.com",
        amount:"5.99"
    },
    {
        img:"/Images/food8.avif",
        name:" Rof boss grit",
        email:"akanniquadry7@gmail.com",
        amount:"5.99"
    },
    {
        img:"/Images/food6.avif",
        name:" Rof boss grit",
        email:"akanniquadry7@gmail.com",
        amount:"5.99"
    },
]

export function Topbox() {
  return (
    <div className="topBox">
        <h1>Top Deals</h1>
        <div className="list">
            {
                UpbarUser.map((item, index)=>(
                    <div className="upbatItem" key={index}>
                        <div className="itemsec">
                            <img src={item.img} alt="user" />
                            <div className="userText">
                                <span className="name">{item.name}</span>
                                <span className="email">{item.email}</span>
                            </div>
                        </div>
                        <span className="amount">${item.amount}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

