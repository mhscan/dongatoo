import React from "react";
import "./Groupcart.css";


export default function Groupcart({ name, member, img }) {
  


  return (
    <>
      <div className="groupcart">
        <img  src={img} alt={name} />

        <div className="groupcart__info">
          <h1>{name}</h1>
          <h3>members : {member}</h3>
        </div>
      </div>
    </>
  );
}
