import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Apod from "./pages/Apod";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/apod" element={<Apod />} exact />
        <Route path="/earth" element={<Earth />} exact />
        <Route path="/mars" element={<Mars />} exact />
      </Routes>
    </Router>
  );
};

export default App;
