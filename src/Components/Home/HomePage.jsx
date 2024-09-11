import React from "react";
import ProductsCard from "../ProductCard/ProductsCard";
import Hero from "./Hero";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <div className="wrapper">
        <Hero />
        <ProductsCard />
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
