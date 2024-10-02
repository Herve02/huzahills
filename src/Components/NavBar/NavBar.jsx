import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import { Navlinks } from "./NavLinks";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const NavBar = () => {
  const [showNav, SetShowNav] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const menus = useRef([]);

  // Toggle the menu for mobile view
  function ToggleMenu() {
    SetShowNav(!showNav);
  }

  // Handle opening and closing dropdowns
  function handleDropDown(index) {
    setOpenIndex(index === openIndex ? null : index);
  }

  // Handle the navigation logic
  function handleNavClick(event, link) {
    if (link.path === "/") {
      // Redirect to the homepage
      navigate("/");
    } else if (link.dropdownLinks || !link.path === "/") {
      // Prevent the redirection if the link has a dropdown
      event.preventDefault();
      handleDropDown(Navlinks.indexOf(link));
    }
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
            {Navlinks.map((link, index) =>
              link && !link.offer ? (
                <li key={index}>
                  <div className="dropdownHolder">
                    <Link
                      to={link.path}
                      onClick={(event) => handleNavClick(event, link)}
                    >
                      {link.text}
                      {link.dropDownIcon && (
                        <img
                          src={link.dropDownIcon}
                          alt="dropdown"
                          ref={(el) => (menus.current[index] = el)}
                        />
                      )}
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
              ) : null
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
        {!showNav ? (
          <FaBars style={{ color: "white" }} />
        ) : (
          <FaX style={{ color: "white" }} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
