// import React, { useEffect } from "react";
import "../styles/Navbar.css";
import "../styles/Header.css";
import {NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <div className="NavBar" >
      <NavLink to="/" activeClassName="active">
        <strong style={{ fontSize: "24px" }}>Portfolio</strong>
      </NavLink>
      <NavLink to="/blogs" activeClassName="active">
        <strong style={{ fontSize: "24px" }}>Blog</strong>
      </NavLink>
    </div>
  );
}

export default MyNavbar;
