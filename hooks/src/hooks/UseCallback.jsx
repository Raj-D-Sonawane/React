// import { useState } from "react";

// function UseCallback() {
//    const [count, setCount] = useState(0);

//      const expensiveCalculation = () => {
//     console.log("Running expensive calc...");
//     let total = 0;
//     for (let i = 0; i < 500000000; i++) {
//       total += i;
//     }
//     return total;
//      }
//   return (
//      <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <br />

//       <button onClick={expensiveCalculation}>Run Heavy Function</button>
//     </>
//   )
// }

// export default UseCallback
import { useState, useCallback } from "react";

function UseCallback() {
   const [count, setCount] = useState(0);

      const expensiveCalculation = useCallback(() => {
    console.log("Running expensive calc...");
    let total = 0;
    for (let i = 0; i < 500000000; i++) {
      total += i;
    }
    return total;
  }, [])
  return (
     <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <br />

      <button onClick={expensiveCalculation}>Run Heavy Function</button>
    </>
  )
}

export default UseCallback