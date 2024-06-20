import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
