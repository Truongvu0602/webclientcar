import React from "react";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Models from "./page/Models";
import News from "./page/News";

import Contact from "./page/Contact";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
