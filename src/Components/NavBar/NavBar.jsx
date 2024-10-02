import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { Navlinks } from "./NavLinks";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const NavBar = () => {
  const [showNav, SetShowNav] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const menus = useRef([]);

  function ToggleMenu() {
    SetShowNav(!showNav);
    console.log(showNav);
  }
  function handleDropDown(index) {
    setOpenIndex(index === openIndex ? null : index);
  }

  return (
    <nav className="container">
      <div className="logoMobile">
        <img src="../Images/HuzaLogo.png" alt="Huza logo" />
      </div>
      <div className={showNav ? "NavWrapper ShowMenu" : "NavWrapper"}>
        <div className="search">
          <div className="logo">
            <img src="../Images/HuzaLogo.png" alt="Huza logo" />
          </div>
          <form action="">
            <img src="../Images/search.svg" alt="" />
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
              <img src="../Images/cart2.svg" alt="" />
              <span>0</span>
            </div>
          </div>
        </div>

        <div className="nav-links-div">
          <ul>
            {Navlinks.map(
              (link, index) =>
                link &&
                !link.offer && (
                  <li key={index} className="">
                    <div
                      className="dropdownHolder"
                      onClick={() =>
                        link.dropdownLinks && handleDropDown(index)
                      }
                    >
                      <Link to={link.path}>
                        {link.text}
                        <img
                          src={link.offer ? null : link.dropDownIcon}
                          alt=""
                          ref={(el) => (menus.current[index] = el)}
                        />
                      </Link>
                      {openIndex === index && link.dropdownLinks && (
                        <ul className="submenu">
                          {link.dropdownLinks.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link to={item.to}>{item.text}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                )
            )}
          </ul>
          <ul className="right-menus">
            {Navlinks.slice(6, 8).map((LinkItem, index) => (
              <li key={index}>
                <Link>
                  {LinkItem.offer && LinkItem.offer}
                  <img
                    src={LinkItem.offer ? LinkItem.dropDownIcon : ""}
                    alt="offer"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="menuBars" onClick={ToggleMenu}>
        {
          !showNav ? <FaBars style={{color: "white"}}/>: <FaX style={{color: "white"}}/>
          
        }
      </div>
    </nav>
  );
};

export default NavBar;
