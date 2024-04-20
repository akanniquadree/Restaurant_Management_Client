import { Close } from "@mui/icons-material";
import "./add.scss";

import React, { useReducer, useEffect, useState } from "react";

export default function Add({ Form, setOpen, title }) {
  useEffect(() => {}, []);

  return (
    <div className="add">
      <div className="modal">
        <Close
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: "10px",
            top: "10px",
            cursor: "pointer",
          }}
        />
        {title && <h1>Add New {title}</h1>}
        {Form}
      </div>
    </div>
  );
}
