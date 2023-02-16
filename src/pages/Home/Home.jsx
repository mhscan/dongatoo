import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
    <div className="home-contener"></div>
      <h3>
        ما امده ایم تا هزینه های شما زا مدیریت کنیم <br />و دونگ هایتان را
        محاسبه کنیم
      </h3>

      <Link to={"/login"}>login page</Link>

      <Link to={"/register"}> register page</Link>
    </>
  );
}
