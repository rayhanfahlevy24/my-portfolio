import React from "react";
import "./index.css";
import Home from "./routes/Home"
import Project from "./routes/Project"
import About from "./routes/About"

import { Link, Route, Routes } from "react-router-dom";

function App() {
  
  return (
      <div className="App">
        <nav>
          <Link to="/"></Link>
          <Link to="/project"></Link>
          <Link to="/about"></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/project" element={<Project />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div> 
    
      
  );
}

export default App;
