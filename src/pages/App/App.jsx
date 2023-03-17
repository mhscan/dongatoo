import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Groupcart from "./../../Components/Groupcart/Groupcart";
import { Link } from "react-router-dom";

import Topbar from "./../../Components/Topbar/Topbar";
import "./App.css";

export default function App() {
  const [userGroupData, setUserGroupData] = useState([]);

  useEffect(() => {
    fetch(`https://dongato-server.bavand.top/api/team`, {
      method: "GET",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("user")).token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserGroupData(Object.entries(res.data));
      });
  }, []);

  const grouphandler = (name1) => {
    
    fetch(`https://dongato-server.bavand.top/api/team`, {
      method: "POST",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("user")).token,
        "Content-Type": "application/json",
      },
      body: {"name":name1},
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      
  };

  const newgroup = () => {
    swal("Write something here:", {
      content: "input",
    }).then((value) => {
      grouphandler(value);

      console.log(value);
    });
  };
  console.log(JSON.parse(localStorage.getItem("user")).token);

  return (
    <div>
      <Topbar></Topbar>
      <div className="app-contener">
        {userGroupData.map((groups) => (
          <Link to={`/app/group/:${groups[1]._id}`}>
            <Groupcart
              name={groups[1].name}
              img={groups[1].profile}></Groupcart>
          </Link>
        ))}
      </div>

      <button className="addGroupBtn" onClick={newgroup}>
        +
      </button>
    </div>
  );
}
