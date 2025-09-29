import { useState } from "react"
import "./carts.css"

function Carts (){
  const [ product , setProduct] = useState([])

  const addProduct = (item) => {
    setProduct([...product,item])
  }

  const sumMonney = () => {
    return product.reduce((sum, item) => sum + item, 0);
  }

  return (
    <div>
      <h2>Bài 4 : Giỏ hàng</h2>
      <p><b>Giỏ hàng : {product.length} sản phẩm, tổng tiền: {sumMonney()}</b></p>
      <div>
        <div className="product">
          <p>Sản phẩm A</p>
          <p>Giá : 100đ</p>
          <button onClick={()=> addProduct(100)}>Thêm vào giỏ</button>
        </div>
        <div className="product">
          <p>Sản phẩm B</p>
          <p>Giá : 1000đ</p>
          <button onClick={()=> addProduct(1000)}>Thêm vào giỏ</button>
        </div>
        <div className="product">
          <p>Sản phẩm C</p>
          <p>Giá : 1000đ</p>
          <button onClick={()=> addProduct(10000)}>Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  )
}

export default Carts 