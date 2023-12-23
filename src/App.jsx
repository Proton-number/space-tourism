import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "./Components/Destination";
import Crew from "./Components/Crew";
import Technology from "./Components/Technology";
import Nav from "./Components/Nav";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Destination" element={<Destination />} />
        <Route exact path="/Crew" element={<Crew />} />
        <Route exact path="/Technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
