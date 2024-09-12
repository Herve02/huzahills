import React from "react";
import "./footer.css";
import AppStore from "../Button/AppStore";
import { Link } from "react-router-dom";
import { Categories } from "../Home/Categories";
// import { useContext } from "react";
// import { HuzaAppContext } from "../../Components/Context/ContextProvider";
const Footer = () => {
  // const { open,ShowMore,show } = useContext(HuzaAppContext);
  return (
    <>
      <footer className="container">
        <div className="topbar">
          <div className="about">
            <img src="./Images/logoGreen.svg" alt="" />
            <p>
              Ornare quis nec congue in ut mi risus aliquam vulputate. Massa non
              praesent sit ut phasellus nisl cras.
            </p>
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
          <div className="importantLinks">
            <div className="linksDiv">
              <h2>About HUZA </h2>
              <ul>
                <li>
                  <Link to="/">About HUZA Hills</Link>
                </li>
                <li>
                  <Link to="/">Products overview</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Link for more info</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="linksDiv">
              <h2>Account</h2>
              <ul>
                <li>
                  <Link to="/">Sign up</Link>
                </li>
                <li>
                  <Link to="/">My Cart</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="subscription">Subscribe</Link>
                </li>
              </ul>
            </div>
            <div className="linksDiv">
              <h2>Categories </h2>
              <ul>
                {                
                Categories.slice(0, 4).map((category) => {
                  return (
                    <li key={category.id}>
                      <Link to="/">{category.name}</Link>
                    </li>
                  );
                })                
              }
              </ul>
            </div>
          </div>

          <div className="contacts">
            <h2>Contact</h2>
            <p>
              Ornare quis nec congue in ut mi risus aliquam vulputate. Massa non
              praesent sit ut phasellus nisl cras.
            </p>
            <div className="socialIcons">
              <img src="./Images/fbIcon.svg" alt=""  />
              <img src="./Images/linkedin.svg" alt=""  />
              <img src="./Images/instagrambgied.svg" alt=""  />
            </div>
          </div>
        </div>

        <div className="bottombar">
          <div className="icons-policies">
            <div className="socialIcons">
              <img src="./Images/twitter.svg" alt=""  />
              <img src="./Images/ig.svg" alt=""  />
              <img src="./Images/fbV.svg" alt=""  />
            </div>
            <ul>
              <li>
                <Link>Terms of use</Link>
              </li>
              <li>
                <Link>Privacy & Policy</Link>
              </li>
              <li>
                <Link>Link for more info</Link>
              </li>
            </ul>
          </div>
          <p>All rights reserved | Design by CSR</p>

          <div className="paymentMethods">
            <p>our payment methods</p>
            <div className="icons">
              <img src="./Images/airtel.svg" alt=""  />
              <img src="./Images/mastercard.svg" alt=""  />
              <img src="./Images/paypal_logo.svg" alt=""  />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
