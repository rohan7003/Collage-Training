import { useState } from "react"

export default function Form() {
    const [Count,setCount] = useState(4)
    function add(){
        setCount(Count + 1)
    }
    function sub() {
      setCount(Count - 1);
    }
  return (
    <>
      <h1> Hooks n Forms</h1>
      <h2>The Counter value : {Count}</h2>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button> 
    </>
  );
}
