import { useState, useEffect } from "react";

function UseEffect() {
   const [count, setCount] = useState(0);
     // useEffect runs every time count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);
  return (
      <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  )
}

export default UseEffect