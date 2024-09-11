import React from 'react'
import { Link } from 'react-router-dom'
import "./tyle.css";

const AppStore = (Props) => {
  return (
    <>
    <Link to={Props.to} className={Props.cName}>
      {Props.logo && <img src={Props.logo} alt=""/>} <p>{Props.text}<span> {Props.span}</span></p>
    </Link>
  </>
  )
}

export default AppStore