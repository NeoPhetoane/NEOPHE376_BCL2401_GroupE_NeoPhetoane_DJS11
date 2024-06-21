import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Header from "./components/Header";
import Seasons from "./pages/Seasons";
import MediaPlayer from "./components/MediaPlayer";
import EpisodesList from "./pages/EpisodesList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MediaPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seasons/:id" element={<Seasons />} />
        <Route path="/episodes/:id" element={<EpisodesList />} />
        <Route path="/Search" element={<Search />} />
        {/* <Route path="/Favorites" element={<Favorites />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
