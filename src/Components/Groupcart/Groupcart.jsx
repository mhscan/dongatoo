import React from "react";
import "./Groupcart.css";
import { Avatar } from "@mui/material";


export default function Groupcart({ name, member, img }) {
  


  return (
    <>
      <div className="groupcart">
        
        <Avatar className="avatar" src={img} alt={name}></Avatar>

        <div className="groupcart__info">
          <h1>{name}</h1>
          
        </div>
      </div>
    </>
  );
}
