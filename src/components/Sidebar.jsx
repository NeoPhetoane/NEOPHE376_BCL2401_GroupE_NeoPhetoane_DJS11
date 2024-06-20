import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="sidebar">
        <FaBars onClick={showSidebar} />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <MdOutlineClose />
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                {item.icon}
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
export default Sidebar;
