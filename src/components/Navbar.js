import React from "react";
import logo from "../images/React_logo.png";

function Navbar() {
  return (
    <nav className="nav">
        <div className="logo_container">
            <img src={logo} className="img" alt="logo" />
            <h3 className="logo_text">ReactFacts</h3>
        </div>
        <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
