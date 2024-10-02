import React from "react";
import "./styles/style.css";
import HomePage from "./Components/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../src/Components/Footer/Footer";
import ProductDetails from "../src/component/ProductDetails";
import Subscription from "./component/Subscription";
import ReactGA from "react-ga";
import { useEffect } from "react";
const TrackingID = "G-T48L5QGKLE";
ReactGA.initialize(TrackingID);
const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  })
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="subscription" element={<Subscription />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
