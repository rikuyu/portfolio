import React from "react";
import "../assets/styles/home.scss";
import Footer from "../components/Footer";

const Top = () => {
  return (
    <div>
      <div className="home-body">
        <div className="area">
          <div className="titleHome">
            <p>Welcome to</p>
            <p>Yuki's Portfolio</p>
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Top;
