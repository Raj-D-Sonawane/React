import { useRef } from "react";

function UseRef() {
     const countRef = useRef(0)
const handleClick = () => {
   countRef.current = countRef.current + 1
   console.log("clicked", countRef.current);
   
  };
  return (
     <>
    <h1>{countRef.current}</h1>
     <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default UseRef

// import { useState } from "react";

// function UseRef() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//      setCount(count + 1);
     
//   };

//   return (
//      <>
//      <h1>{count}</h1>
//        <button onClick={handleClick}>Click me</button>
//      </>
//   )
// }

// export default UseRef;
