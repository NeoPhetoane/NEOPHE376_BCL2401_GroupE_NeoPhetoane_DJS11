import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdLogout, MdFavoriteBorder, MdLightMode } from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
    className: "nav-text",
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: <MdFavoriteBorder />,
    className: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <FaSearch />,
    className: "nav-text",
  },
  {
    title: "Light Mode",
    path: "/light-mode",
    icon: <MdLightMode />,
    className: "nav-text",
  },
  {
    title: "Log Out",
    path: "/log-out",
    icon: <MdLogout />,
    className: "nav-text",
  },
];