import { useState } from 'react'

import './App.css'

function App() {
 const [counter, setCounter]= useState(15)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
   
   
  }

  const removeValue = () => {
    if (counter > 0 ) {
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      
        <button 
        onClick={addValue}
        className="logo" >Add Value </button>
        <br/>
        <button 
        onClick={removeValue}
        className="logo react">Remove value</button>
    
      <h1>Count value : {counter}</h1>
      <div className="card">
        <button >
          Counter Value : {counter}
        </button>
      
      </div>
     
    </>
  )
}

export default App
