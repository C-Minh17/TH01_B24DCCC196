import { useState } from "react"

function FormSignUp (){
  const [info , setInfo ] = useState(null)

  const signUp = (e) => {
    e.preventDefault();
    if (e.target.elements.name.value && e.target.elements.email.value && e.target.elements.pass.value) {
      const data = {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        pass: e.target.elements.pass.value
      }
      setInfo(data)
      e.target.reset()
    }else{
      alert("Vui lòng nhập đủ thông tin")
    }
  }


  return (
    <div>
      <h2>Bài 5 : Form đăng ký</h2>
      <form onSubmit={signUp}>
        <input name="name" placeholder="tên ..."/><br/>
        <input name="email" placeholder="email ..."/><br/>
        <input name="pass" placeholder="password ..."/><br/>
        <button>Đăng ký</button><br/>
      </form>

      {info ?
        <div>
          <h3>Thông tin đăng nhập</h3>
          <p>Tên : {info?.name}</p>
          <p>Email : {info?.email}</p>
          <p>Mật khẩu : {info?.pass}</p>
        </div>
        : <div></div>
      }
    </div>
  )
}

export default FormSignUp 