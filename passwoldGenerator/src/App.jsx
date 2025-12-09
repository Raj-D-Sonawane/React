import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const PasswordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqpwoeiruytfjdkslaghzmxnbcv";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}";

    for (let i = 0; i < lenght; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [lenght, numAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [lenght, numAllowed, charAllowed, passwordGenerator]);

  const Copy = useCallback(()=> {
    PasswordRef.current?.select();
    
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-center text-amber-50'>Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mt-2.5 mb-2.5">
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 bg-amber-50'
            placeholder='Password'
            readOnly
            ref={PasswordRef}
          />
          <button
          onClick={Copy}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={lenght}
              className='cursor-pointer'
              onChange={(e) => setLenght(e.target.value)}
            />
            <label>Length : {lenght}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => setNumAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
