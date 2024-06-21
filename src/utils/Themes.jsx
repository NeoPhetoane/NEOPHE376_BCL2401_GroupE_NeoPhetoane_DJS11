import React, { useState } from "react";
//  // Ensure the CSS file is imported

function Themes() {
  const [darkMode] = useState(false);

  return (
    <button className={`container ${darkMode ? "dark-theme" : "light-theme"}`}></button>
  );
}

export default Themes;