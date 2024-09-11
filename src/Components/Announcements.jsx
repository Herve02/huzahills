import React from 'react'
import Links from './Button/Links'
import { Link } from 'react-router-dom'
import './style.css'

const Announcements = (Props) => {
  return (
    <>
      <div className="container announcements">
        <div className="card">
            <div className="contents">
                <h4>{Props.header}</h4>
                <h2>{Props.discount}</h2>
                <Link to={Props.to} className={Props.cName}>
                    {Props.text}
                </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Announcements