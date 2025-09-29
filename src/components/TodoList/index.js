import { useState } from "react"

function Todolist (){
  const [list , setList ] = useState([])
  const [todo , setTodo] = useState("")

  const change = (e) => {
    setTodo(e.target.value)
  }

  const addTodo = () => {
    if(todo){
      setList([...list,
        {
          id:Date.now(),
          todo:todo
        }
      ])
      setTodo("")
    }
  }

  const deleteTodo = (id) => {
    setList(list.filter(item => item.id != id))
  }

  return (
    <div>
      <h2>Bài 3 : Danh sách công việc</h2>
      <input value={todo} onChange={change} name="todo" placeholder="Nhập công việc ..."/>
      <button onClick={addTodo}>thêm</button>
      <ul>
        {list.map( (item,index) => {
          return (
            <li key={index}>
              <span>{item.todo}</span>
              <button onClick={()=>{deleteTodo(item.id)}}>xóa</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todolist 