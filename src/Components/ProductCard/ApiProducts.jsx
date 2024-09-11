import { useEffect, useState } from "react"
import { Products} from "../../Components/ProductsData"
import './Products.css'
// import Button from "../Button/Button"
const ApiProducts = () => {
  const [Product, setProduts] = useState([])
  const url = 'https://fakestoreapi.com/products'
  useEffect(() => {
    // Fetching data from the API
    fetch(url)
      .then(res => {
        if (!res.ok) { 
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setProduts(data.slice(0, 10)))
      // Setting the data to state
      .catch(err => console.log(err)); // Handling errors
  }, []); //
  return (
   <div className="ProductsCard container">
    {
      Product.map((product) => {
        return (
          <div className="product" key={product.id}>
            <img src={product.image} alt="product"/>
            {/* <Button/> */}
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

export default ApiProducts