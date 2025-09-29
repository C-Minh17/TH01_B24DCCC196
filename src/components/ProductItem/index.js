function ProductItem (props){
  const {addProduct , sumMonney , product} =props
  return (
    <div>
      <h2>Bài 4 : Giỏ hàng</h2>
      <p><b>Giỏ hàng : {product.length} sản phẩm, tổng tiền: {sumMonney()}</b></p>
      <div>
        <div className="product">
          <p>Sản phẩm A</p>
          <p>Giá : 100đ</p>
          <button onClick={()=> addProduct({
            id:1,
            name:"SP A",
            price:100
          })}>Thêm vào giỏ</button>
        </div>
        <div className="product">
          <p>Sản phẩm B</p>
          <p>Giá : 200đ</p>
          <button onClick={()=> addProduct({
            id:1,
            name:"SP B",
            price:200
          })}>Thêm vào giỏ</button>
        </div>
        <div className="product">
          <p>Sản phẩm C</p>
          <p>Giá : 300đ</p>
          <button onClick={()=> addProduct({
            id:1,
            name:"SP C",
            price:300
          })}>Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  )
} 

export default ProductItem