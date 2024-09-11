// import { useEffect, useState } from "react"
import { Products} from "../../Components/ProductsData"
import Links from "../Button/Links"
import './Products.css'
// import Button from "../Button/Button"
const ProductsCard = () => {
  return (
   <div className="ProductsCard container">
    {
      Products.map((product,index) => {
        return (
          <div className="product" key={product.id}>
            <img src={product.img} alt="product"/>
            {/* <Button/> */}
            {index === 1 || index === 3 ? <Links to="/" cName="btn bgGreen" text="New"/> : <Links to="/checkout" cName="btn bgyellow" text="Buy Now"/>}
            <p className="category">{product.category}</p>
            <p className="name">{product.name}</p>
            <p className="price">{product.price} Rwf</p>
          </div>
        )
      })
    }
   </div>
  )
}

export default ProductsCard