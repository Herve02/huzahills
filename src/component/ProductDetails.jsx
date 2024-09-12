import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import '../styles/productdetails/productdetails.css';

const ProductDetail = () => {
  const { state } = useLocation();
  const { product } = state;

  const [activeTab, setActiveTab] = useState("Details");
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Details":
        return <p>{product.description}</p>;
      case "Ingredients/Materials":
        return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, voluptate modi! Totam nam repellendus possimus officiis cum expedita voluptas, veniam harum odio rerum fugiat tempora consectetur modi quod impedit nesciunt?</p>;
      case "Shipping Policy":
        return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quasi adipisci eaque laboriosam iure deleniti necessitatibus perspiciatis dolor, quis provident consequuntur cum temporibus ullam minima, unde aspernatur error, architecto dicta.</p>;
      case "Return Policy":
        return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, est unde dignissimos aperiam aliquam nam doloribus quam ea cupiditate! Voluptate impedit numquam temporibus tempore adipisci non ullam dolor cum corporis.</p>;
      default:
        return null;
    }
  };
  return (
    <div className="product-detail">
      <div className="product-images">
        <img src={product.image} alt={product.title} className="main-image" />
        <div className="image-thumbnails">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <img key={index} src={product.image} alt={`Thumbnail ${index}`} className="thumbnail" />
          ))}
        </div>
      </div>
      
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="product-price">Price: <span>${product.price}</span></p>
        <p className="product-description">{product.description}</p>

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
            <button className="decrease" onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button className="increase" onClick={handleIncrease}>+</button>
          </div>
        </div>

        <div className="chart-section">
        <button className="chart-btn"> Chat with us</button>
        <button className="contact-btn"> <i className='bx bx-phone-call bx-tada'></i> Contact the seller</button>
        </div>
      </div>

        <div className="product-tabs">
        <div className="tabs">
          {["Details", "Ingredients/Materials", "Shipping Policy", "Return Policy"].map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>

      <div className="related-products">
        <h2>Your product may go along with</h2>
        <div className="related-product-list">
          {Array(5).fill(null).map((_, index) => (
            <div key={index} className="related-product-card">
              <img src={product.image} alt={`Related product ${index}`} className="related-image" />
              <h3>{product.title}</h3>
              <p className="related-product-price">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
