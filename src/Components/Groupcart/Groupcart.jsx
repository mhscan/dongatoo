import React from "react";
import "./Groupcart.css";
import { Avatar } from "@mui/material";


export default function Groupcart({ name, img }) {
  


  return (
    <>
      <div className="groupcart">
        
        <Avatar className="avatar" src={img} alt={name} sx={{ width: 40, height: 40 }}></Avatar>

        <div className="groupcart__info">
          <p>{name}</p>
          
        </div>
      </div>
    </>
  );
}
