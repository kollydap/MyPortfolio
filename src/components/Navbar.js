import React, { useEffect } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <div className="NavBar">
      <Link to="/">
        <strong style={{ fontSize: "24px" }}>Portfolio</strong>
      </Link>
      <Link to="/blogs">
        <strong style={{ fontSize: "24px" }}>Blog</strong>
      </Link>
    </div>
  );
}

export default MyNavbar;
