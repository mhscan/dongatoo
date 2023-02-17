import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home__contener">
        

          <h1>wellcome to dongatoo</h1>
          <h3>we ready to manege your cost and calculete your dongs</h3>

          <Link className="home__link" to={"/login"}>
            login page
          </Link>

          <Link className="home__link" to={"/register"}>
            {" "}
            register page
          </Link>
        </div>
      </div>
    </>
  );
}
