import React, { useState } from 'react'

function State() {
    const[count,setCount]=useState(1)
    const addValue = ()=>{
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
        

        
    }
    const removeValue = () => {
        setCount(count - 1)
    }
    

  return (
    <>
    <div>{count}</div>
    <button onClick={addValue}>add</button>
    <br />
    <button onClick={removeValue}>remove</button>
    </>
    
  )
}

export default State