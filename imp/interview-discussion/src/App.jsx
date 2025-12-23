import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [value, setValue] = useState(1)
  // const [multiValue, setMultiValue] = useState("")

  const multibyFive = () => {
  //  setMultiValue(value * 5)
   setValue(value+1)
  }

   let multiValue = value * 5;

  return (
    <>
      <h1>Main value:{value}</h1>
      <button
        onClick={multibyFive}
      >Click to multiplied by 5</button>

      <h2>Multiplied value:{multiValue}</h2>
    </>
  )
}

export default App
