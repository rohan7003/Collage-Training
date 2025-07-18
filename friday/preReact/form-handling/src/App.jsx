import { useState } from 'react';
import './App.css'
function App(){

  const [friends,setFriends]= useState('')

  const myData=(e)=>{
    e.preventDefault()
    console.log(friends);
    setFriends('')
  }
  return(
  <>
    <h1>I Am Learning Form Handling</h1>
    <form onSubmit={myData}>
      Name : <input
      type="text"
      placeholder="Enter Name" 
      value={friends}
      onChange={(e)=>setFriends(e.target.value)}
      required/>
      <button> Add</button>
    </form>
  </>
  )
}

export default App