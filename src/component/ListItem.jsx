import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = (props) => {
  return (
    <li><Link to={props.to}>{props.text}</Link></li>
  )
}

export default ListItem