import React from "react";
import ProductsCard from "../ProductCard/ProductsCard";
import Hero from "./Hero";
import Footer from "../Footer/Footer";
import Announcements from "../Announcements";
import AppStore from "../Button/AppStore";

const HomePage = () => {
  return (
    <>
      <div className="wrapper">
        <Hero />
        <ProductsCard />
        <div className="announcementsWrapper container">
          <Announcements
            header="Hot Appliances"
            discount="Sell Up To 50% Off"
            to="/"
            text="Shop now"
            cName="btn bgwhite"
          />
          <Announcements
            header="Office furnitures"
            discount="Sell Up To 40% Off"
            to="/"
            text="Shop now"
            cName="btn bgwhite"
          />
        </div>
        <ProductsCard />
        <div className="container">
          <div className="features">
            <div className="feature">
              <div className="img">
                <img src="./Images/chat.svg" alt="" />
              </div>
              <p>direct integration with customer</p>
            </div>

            <div className="feature">
              <div className="img">
                <img src="./Images/fee.svg" alt="" />
              </div>
              <p>effortless product discovery</p>
            </div>
            <div className="feature">
              <div className="img">
                <img src="./Images/bag.svg" alt="" />
              </div>
              <p>transparent fee structure</p>
            </div>
            <div className="feature">
              <div className="img">
                <img src="./Images/bag.svg" alt="" />
              </div>
              <p>enhancing buyer experience</p>
            </div>
            <div className="feature">
              <div className="img">
                <img src="./Images/profile.svg" alt="" />
              </div>
              <p>empowering vendors</p>
            </div>
          </div>
        </div>

        {/* download section */}
        <div className="container">
          <div className="downloadApp">
            <div className="contents">
            <h2>Download Our App for a Better Shopping Experience!</h2>
            <h3>Why Download Our App?</h3>
            <ul>
              <li><img src="./Images/profile.svg" alt="" />Exclusive app-only discounts</li>
              <li><img src="./Images/profile.svg" alt="" />Personalized recommendations</li>
              <li><img src="./Images/profile.svg" alt="" />Easy access to customer service</li>
              <li><img src="./Images/fee.svg" alt="" />Faster checkout process</li>
              <li><img src="./Images/realtime.svg" alt="" />Real-time order tracking</li>
            </ul>
            <div className="appStore">
              <AppStore
                to="/"
                cName="btn bgBlack"
                logo="./Images/googlePlay.svg"
                text="Get it on"
                span="Google Play"
              />
              <AppStore
                to="/"
                cName="btn bgBlack"
                logo="./Images/Apple.svg"
                text="Download on the"
                span="Apple Store"
              />
            </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
