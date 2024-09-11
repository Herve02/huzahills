import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  return (
    <>
      <nav className="container">
        <div className="search">
          <div className="logo">
            <img src="./Images/HuzaLogo.png" alt="Huza logo"  />
          </div>
          <form action="">
          <img src="./Images/search.svg" alt="" />
          <input type="text" placeholder="What are you looking for" />
          </form>
          <div className="selections">
            <select name="select" id="">
              <option value=""></option>
              <option value="">mens clothes</option>
            </select>
            <select name="select" id="">
              <option value=""></option>
              <option value="">mens clothes</option>
            </select>
            <div className="cart">
              <img src="./Images/cart2.svg" alt="" />
              <span>0</span>
            </div>
          </div>
        </div>

        <div className="nav-links-div">
          <ul>
            <li>
              <Link to="/">
                Fashion{" "}
                <img
                  src="./Images/Arrowdown.svg"
                  alt="no image found"
                  
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                Jewely <img src="./Images/Arrowdown.svg" alt=""  />
              </Link>
            </li>
            <li>
              <Link to="/">
                Made in Rwanda{" "}
                <img src="./Images/Arrowdown.svg" alt=""  />
              </Link>
            </li>
            <li>
              <Link to="/">
                Kids <img src="./Images/Arrowdown.svg" alt=""  />
              </Link>
            </li>
            <li>
              <Link to="/">
                Arts <img src="./Images/Arrowdown.svg" alt=""  />
              </Link>
            </li>
            <li>
              <Link to="/">
                Electronics{" "}
                <img src="./Images/Arrowdown.svg" alt=""  />
              </Link>
            </li>
            <div className="lists-grp">
              <li>
                <Link>
                  Offers <img src="./Images/Arrowdown.svg" alt=""  />
                </Link>
              </li>
              <li>
                <Link>
                  Offers <img src="./Images/Arrowdown.svg" alt=""  />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
