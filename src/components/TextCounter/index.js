import { useState } from "react"

function TextCounter (){
  const [skt , setSkt ] = useState("")

  const change = (e) => {
    setSkt(e.target.value)
  }
  return (
    <div>
      <h2>Bài 1 : Bộ đếm ký tự</h2>
      <h3>Bộ đếm ký tự</h3>
      <input onChange={change} name="ktu" placeholder="Nhập ký tự ..."/>
      <p>Số ký tự : {skt.length > 100 ? 
      <>
        <span>{skt.length}</span>
        <div style={{color:"red"}}>bạn đã vượt quá 100 ký tự</div> 
      </>:
        skt.length }</p>
    </div>
  )
}

export default TextCounter 