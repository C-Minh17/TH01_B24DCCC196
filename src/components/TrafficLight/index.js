import { useState } from "react"
import "./tf.css"

function TrafficLight (){
  const [stt , setStt ] = useState(3)

  const change = () => {
    setStt(stt + 1)
  }

  return (
    <div>
      <h2>Bài 2 : Đèn giao thông</h2>
      <div style={stt%3 == 0 ? {backgroundColor:"red"} : {}} className="trafficLight"></div>
      <div style={stt%3 == 2 ? {backgroundColor:"yellow"} : {}} className="trafficLight"></div>
      <div style={stt%3 == 1 ? {backgroundColor:"green"} : {}} className="trafficLight"></div>
      <button onClick={change}>chuyển màu</button>
    </div>
  )
}

export default TrafficLight 