import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/product/product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Initially loading is true

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data.slice(0, 10)); 
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        // Set loading to false once the request is done (success or error)
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    console.log(product);
    // Navigating to the product details page by product ID
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <>
      <div className="product container">
        <div className="product-list">
          {
            loading ? (
              <p>Loading products...</p> // Show loading message when loading is true
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleProductClick(product)}
                >
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
                    <h2 className="product-name">
                      {product.title.length > 31
                        ? product.title.slice(0, 30) + "..."
                        : product.title}
                    </h2>
                    <p className="product-price">Price: ${product.price}</p>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </>
  );
};

export default Product;
