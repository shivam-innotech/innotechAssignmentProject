import React from 'react'
import { useState } from 'react'
import moment from 'moment'

const Time = () => {
  const [input,setInput]=useState("")

  
  const on=()=>{
    let time=moment().format("DD-MM-YYYY")
    if(moment(time,"DD-MM-YYYY").isSame(input)){
      document.getElementById("a").style.backgroundColor="green"
    }else if(moment(time,"DD-MM-YYYY").is(input, 'date')){
      document.getElementById("a").style.backgroundColor="yellow"
    }else{
      document.getElementById("a").style.backgroundColor="red"
    }
  }
  return (
    <>
      <h1>moments</h1>
      <input type="date" onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={on}>check</button>
      <div id='a' className="container">

      </div>
    </>
  )
}

export default Time