import React from "react";
import Groupcart from "../../Components/Groupcart/Groupcart";
import { Link } from "react-router-dom";
import Topbar from "./../../Components/Topbar/Topbar";
import "./App.css"

export default function App() {
  let groupdata = [
    { Id: "1", name: "group1", img: "defultgroupimg.png", member: "8" },
    { Id: "2", name: "sgroup2s", img: "defultgroupimg.png", member: "82" },
    { Id: "3", name: "group3", img: "defultgroupimg.png", member: "83" },
    { Id: "4", name: "group4", img: "defultgroupimg.png", member: "84" },
  ];

  return (
    <div>
      <Topbar></Topbar>
      <div className="app-contener">
        {groupdata.map((data) => (
        <Link to={`/group/${data.Id}`}>
          <Groupcart
            name={data.name}
            member={data.member}
            img={data.img}></Groupcart>
        </Link>
      ))}
      </div>
      
    </div>
  );
}
