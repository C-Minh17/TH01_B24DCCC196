import { useState } from "react"
import "./carts.css"
import ProductItem from "../ProductItem"

function Carts (){
  const [ product , setProduct] = useState([])

  const addProduct = (item) => {
    setProduct([...product,item])
  }

  const sumMonney = () => {
    return product.reduce((sum, item) => sum + item.price, 0);
  }

  return (
    <ProductItem sumMonney={sumMonney} addProduct={addProduct} product={product}/>
  )
}

export default Carts 