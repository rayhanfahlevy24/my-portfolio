import React from "react";
import "./index.css";
import Home from "./routes/Home"
import Project from "./routes/Project"
import About from "./routes/About"

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
   
    <div className="container">
      <BrowserRouter basename="/my-portfolio">
        <Routes>
          <Route exact path="/my-portfolio" element={<Home />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;
