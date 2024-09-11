import React from "react";
import "./styles/style.css";
import HomePage from "./Components/Home/HomePage";
import NavBar from "../src/Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
