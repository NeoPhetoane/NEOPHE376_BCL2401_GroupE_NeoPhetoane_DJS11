import React from "react";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <header className="navbar">
      <Sidebar />
      <div className="navbar-content">
        
          <p>Orange Juice</p>
          <img
            src="/favicons/android-chrome-192x192.png"
            alt="Orange Juice"
            className="logo-img"
          />
        
      </div>
    </header>
  );
}

export default Header;
