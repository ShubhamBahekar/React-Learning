import { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState(100);
  const [isInitialRender, setIsInitialRender] = useState(true);
  
  function updateState() {
    setCount((c) => c + 1);
  }
  function reduceState() {
    if (count > 0) {
      setCount((c) => c - 1);
    }
  }

  function message() {
    if(!isInitialRender)
    {
    setMsg((c) => c + 1);
    }else
    {
      setIsInitialRender(false);
    }
  }
  useEffect(() => {
    message();
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <h1>Message:{msg}</h1>
      <button onClick={updateState}>UpdateNumber</button>
      <button onClick={reduceState}>ReduceNumber</button>
    </div>
  );
}

// import { useEffect, useRef, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const noOfRender = useRef(0);

//   useEffect(() => {
//     noOfRender.current = noOfRender.current + 1;
//   });

//   return (
//     <>
//       <h1>{count}</h1>
//       <h2>Total number of render: {noOfRender.current}</h2>
//       <button
//         onClick={() => {
//           setCount((prevCount) => prevCount + 1);
//         }}
//       >
//         +1
//       </button>
//       <button onClick={() => setCount((prevCount) => prevCount - 1)}>-1</button>
//     </>
//   );
// }

// export default App;