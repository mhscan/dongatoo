import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Groupcart from "./../../Components/Groupcart/Groupcart";
import { Link } from "react-router-dom";

import Topbar from "./../../Components/Topbar/Topbar";
import "./App.css";

export default function App() {
  const [userGroupData, setUserGroupData] = useState([]);
  console.log("App");

  useEffect(() => {
    console.log(" use effect");
    fetch(`https://dongato-server.bavand.top/api/team`, {
      method: "GET",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("user")).token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserGroupData(Object.entries(res.data));
        console.log("server");
      });
  }, []);


 
  const Grouphandler = (name1) => {
    console.log("group handler");
    fetch(`https://dongato-server.bavand.top/api/team`, {
      method: "POST",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("user")).token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name1 }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res");

      });
    
  };

  const Newgroup = () => {
    console.log("new group");
    swal("creat group :", {
      content: "input",
    }).then((value) => {
      Grouphandler(value);

      console.log(value);
    });
  };
  


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
        {console.log("re render ")}
      </div>

      <button className="addGroupBtn" onClick={Newgroup}>
        +
      </button>
    </div>
  );
}
