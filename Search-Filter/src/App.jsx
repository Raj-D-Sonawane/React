import { useState } from 'react'

import './App.css'

const userData = [
  "raj", "yesh", "naresh", "komal", "raja", "rahul"
]

function App() {
  const [serach, setSearch] = useState("")
  const FilterUSer = userData.filter(u => u.toLowerCase().includes(serach.toLowerCase()))


  return (
    <>
      <div>
        <input type="text" placeholder='Search user...' value={serach}
          onChange={e => setSearch(e.target.value)}
        />
        <ul>
          {FilterUSer.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>


    </>
  )
}

export default App
