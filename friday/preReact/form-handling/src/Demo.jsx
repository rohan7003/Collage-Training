import { useState,useEffect, use } from "react";

export default function Demo() {
  const [count, setCount] = useState(4);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };
  useEffect(()=>{
    console.log(`you clicked ${count} times`);
    
  })

  return (
    <div>
      <h1>The Value is {count}</h1>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  );
}
