import React from "react";
import { Link } from "react-router-dom";
import { Categories } from "./Categories";
import Links from "../Components/Button/Links";

const Hero = () => {
  return (
    <>
      <div className="hero container">
        <ul className="categories">
          {Categories.map((category) => {
            return (
              <li key={category.id}>
                <Link to="/">{category.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className="middleDiv">
          <div className="cta">
            <div className="contents">
              <h1>BUY MORE SAVE MORE</h1>
              <h3>GET EXTRA 5 OFF</h3>
              <p>at check out when you buy 2 or more items</p>
              <Links to="/" cName="btn bgwhite" text="Buy Now" />
            </div>
            <div className="img">
              <img src="./Images/heroGrped.png" alt=""  />
            </div>
          </div>
          <div className="offers">
            <div className="btm-img">
              <p>Popular</p>
            </div>
            <div className="btm-img">
              <p>
                Special <br /> Offers
              </p>
            </div>
            <div className="btm-img">
              <p>
                Special <br /> Offers
              </p>
            </div>
            <div className="btm-img">
              <p>
                Special <br /> Offers
              </p>
            </div>
          </div>
        </div>

        <div className="rightDiv">
          <div className="manage">
            <h3>Manage your account</h3>
            <p>
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate
            </p>
            <Link to="/">Learn More</Link>
          </div>
          <div className="discount">
            <h2>
              -50 <br /> WNTER
            </h2>
            <h1>SALE</h1>
            <Link to="/">SHOP NOW</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
