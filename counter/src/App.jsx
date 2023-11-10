import React from "react";
import { useState } from "react";



const App = () => {

  const [Count, setCount] = useState(() =>{
    return 4
  })
   
  const  incCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  
  return (
    <>
      <button onClick={incCount}>+</button>
      <span>{Count}</span>
      <button>-</button>
    </>
  )
}

export default App
