import React from 'react'
import { FaInfo } from 'react-icons/fa'
import './popup.css'

const StoreNotice = () => {
  return (
    <div className="popup">
     <FaInfo style={{color: "#146454", backgroundColor: "white", padding: "2px", borderRadius: "50%"}} size={14}/> <p>Store Notice: We connect sellers and buyers... facilitating seamless transactions.</p>
    </div>
  )
}

export default StoreNotice