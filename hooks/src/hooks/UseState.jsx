import React,{useState} from 'react'


function UseState() {
  const [count ,setCount] = useState(6)
  const addValue = ()=>{
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
   
  }
  const removeValue = () =>{
    setCount(count => count - 1)
  }
  return (
    <>
    <h1>{count}</h1>
    <button 
    onClick={addValue}
    >Add +</button>
    <br />
    <button
    onClick={removeValue}
    >Remove -</button>

    </>
  )
}

export default UseState