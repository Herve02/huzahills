import React from "react";
import ProductsCard from "../Components/ProductCard/ProductsCard";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <>
      <div className="wrapper">
        <Hero />
        <ProductsCard />
      </div>
    </>
  );
};

export default HomePage;
