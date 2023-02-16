import React from "react";
import "./topbar.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Avatar } from "@mui/material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="top-left">
        <img className="logo" src="logo.png" alt="logo" />
      </div>

      <div className="top-right">
        <div className="topbar__icon-container">
          <NotificationsActiveIcon />
          <span className="topbar__icon-badge ">10</span>
        </div>

        <Avatar alt="Remy Sharp" src="defultuserimg.png" />
      </div>
    </div>
  );
}
