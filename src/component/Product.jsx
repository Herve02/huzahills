import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/product/product.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    console.log(product); 
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="product container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
          <div className="img">
          <img 
              src={product.image} 
              alt={product.title} 
              className="product-image" 
              loading="lazy" 
            />
          </div>
           <div className="Product-description">
           <h4 className="product-category">{product.category}</h4>
            <h2 className="product-name">{product.title}</h2>
            <p className="product-price">Price: ${product.price}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
