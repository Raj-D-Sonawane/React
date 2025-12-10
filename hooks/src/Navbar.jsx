import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='p-2 bg-blue-400'>
      <ul className='flex list-none gap-5 underline text-black'>
        <li><Link to = "/">UseState</Link></li>
        <li><Link to = "/useRef">UseRef</Link></li>
        <li><Link to = "/useCallback">useCallback</Link></li>
        <li><Link to = "/useEffect">useEffect</Link></li>

      </ul>

    </nav>
  )
}

export default Navbar