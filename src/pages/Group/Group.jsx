import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import { useParams } from "react-router-dom";
import "./Group.css"
import Groupcart from "../../Components/Groupcart/Groupcart";


export default function CreateGroup() {
  let params = useParams();
  console.log(params);
  return (
    <>
      <Topbar></Topbar>
      <div className="app-contener">
      <Groupcart></Groupcart>
      <Groupcart></Groupcart>




      </div>
    </>
  );
}
