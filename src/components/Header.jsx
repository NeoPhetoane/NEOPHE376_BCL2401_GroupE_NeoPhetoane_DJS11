import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <header className="navbar">
      <Sidebar />
      <div className="navbar-content">
        <Link className="site-logo" to="/">
        <p>Orange Juice</p>
          <img
            src="/favicons/android-chrome-192x192.png"
            alt="Orange Juice"
            className="logo-img"
          />
      
        </Link>
      </div>
    </header>
  );
}

export default Header;
