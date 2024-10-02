import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/productdetails/productdetails.css";
import NavBar from "../Components/NavBar/NavBar";
import StoreNotice from "../Components/StoreNotice/StoreNotice";

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState("Details");
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Redirect if no product details are available
  useEffect(() => {
    if (!state || !state.product) {
      navigate("/");
    }
  }, [navigate, state]);

  // Fetch related products by category
  useEffect(() => {
    if (state && state.product) {
      const fetchRelatedProducts = async () => {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products?category=${state.product.category}`
          );
          const data = await response.json();
          setRelatedProducts(data);
        } catch (error) {
          console.error("Error fetching related products:", error);
        }
      };

      fetchRelatedProducts();
    }
  }, [state]);
  

  // Handle quantity increase and decrease
  const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrease = () => setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));

  // Render tab content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "Details":
        return <p>{state.product.description}</p>;
      case "Ingredients/Materials":
        return <p>Product-specific materials or ingredients go here.</p>;
      case "Shipping Policy":
        return <p>Shipping policy details for the product.</p>;
      case "Return Policy":
        return <p>Return policy information for the product.</p>;
      default:
        return null;
    }
  };

  if (!state || !state.product ) {
    return <p>Product not found.</p>; 
  }

  return (
    <>
      <StoreNotice />
      <NavBar />
      <div className="product-detail">
        <div className="product-images">
          <img src={state.product.image} alt={state.product.title} className="main-image" />
          <div className="image-thumbnails">
            {[1, 2, 3, 4, 5].map((_, index) => (
            <div className="imgs">
                <img
                key={index}
                src={state.product.image}
                alt={`Thumbnail ${index}`}
                className="thumbnail"
              />
            </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{state.product.title}</h1>
          <p className="product-price">
          <span>${state.product.price}</span><span className="striked"> <strike>7000</strike></span>
          </p>
          <p className="product-description">{state.product.description}</p>

          {/* Product options (Size, Color, Quantity) */}
          <div className="options">
            <label>Size:</label>
            <select>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="options">
            <label>Color:</label>
            <select>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </div>
          <div className="options">
            <label>Quantity:</label>
            <div className="quantity-buttons">
              <button className="decrease" onClick={handleDecrease}>
                -
              </button>
              <span>{quantity}</span>
              <button className="increase" onClick={handleIncrease}>
                +
              </button>
            </div>
          </div>

          {/* Contact options */}
          <div className="chart-section">
            <button className="chart-btn">Chat with us</button>
            <button className="contact-btn">
              <i className="bx bx-phone-call bx-tada"></i> Contact the seller
            </button>
          </div>
        </div>

        {/* Product tabs */}
        <div className="product-tabs">
          <div className="tabs">
            {["Details", "Ingredients/Materials", "Shipping Policy", "Return Policy"].map(
              (tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              )
            )}
          </div>
          <div className="tab-content">{renderTabContent()}</div>
        </div>

        {/* Related products */}
        <div className="related-products">
          <h2>Your product may go along with</h2>
          <div className="related-product-list">
            {relatedProducts.map((relatedProduct) => (
              relatedProduct.category === state.product.category ? (
                <div key={relatedProduct.id} className="related-product-card">
                <div className="productImg">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="related-image"
                  />
                </div>
                <h3>{relatedProduct.title.length > 31 ? relatedProduct.title.slice(0,30)+"...":relatedProduct.title}</h3>
                <p className="related-product-price">${relatedProduct.price}</p>
              </div>
              ): null
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
