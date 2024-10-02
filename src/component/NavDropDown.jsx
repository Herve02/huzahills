import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./DropDown.css";
import ListItem from "./ListItem";

const NavDropDown = (props) => {
  return (
    <div className={props.cName}>
      <ul>
        
        <ListItem text="clothes" to="/" />
        <ListItem text="decorations" to="/" />
        <ListItem text="shoes" to="/" />
        <ListItem text="bags" to="/" />
      </ul>
    </div>
  );
};

export default NavDropDown;
