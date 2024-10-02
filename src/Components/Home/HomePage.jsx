import React from "react";
import Hero from "./Hero";
import Announcements from "../Announcements";
import AppStore from "../Button/AppStore";
import Product from "../../component/Product";
import BlackFriday from "../StoreNotice/BlackFriday";
import NavBar from "../NavBar/NavBar";
import Links from "../Button/Links";

const HomePage = () => {
  return (
    <>
      <div className="wrapper">
        <BlackFriday />
        <NavBar />
        <Hero />
        <div className="heading container">
          <div className="line"></div>
          <h3>Hot sales</h3>
        </div>
        <Product />
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
        <div className="heading container">
          <h3>Popular products</h3>
          <div className="buttons">
          <Links to="/" text="Popular" cName="btn bgGreen PopularBtn" />
          <Links to="/" text="Recents" cName="btn btnBgNone PopularBtn" />
          <Links to="/" text="Best sellers" cName="btn btnBgNone PopularBtn" />
          </div>
        </div>
        <Product />
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

        <div className="container">
          <div className="downloadApp">
            <div className="contents">
              <h2>Download Our App for a Better Shopping Experience!</h2>
              <h3>Why Download Our App?</h3>
              <ul>
                <li>
                  <img src="./Images/profile.svg" alt="" />
                  Exclusive app-only discounts
                </li>
                <li>
                  <img src="./Images/profile.svg" alt="" />
                  Personalized recommendations
                </li>
                <li>
                  <img src="./Images/profile.svg" alt="" />
                  Easy access to customer service
                </li>
                <li>
                  <img src="./Images/fee.svg" alt="" />
                  Faster checkout process
                </li>
                <li>
                  <img src="./Images/realtime.svg" alt="" />
                  Real-time order tracking
                </li>
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
      </div>
    </>
  );
};

export default HomePage;
