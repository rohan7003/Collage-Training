import "./App.css";
import { useState } from "react";
import Demo from "./Demo";

function App() {
  const [name, setName] = useState("");
  const [friends, setfriends] = useState([]);

  const data = (e) => {
    e.preventDefault();
    // console.log(name)
    setfriends(friends.concat(name));
    setName("");
  };
  return (
    <>
      <h1>Form Handling</h1>
      <form onSubmit={data}>
        <input
          type="text"
          placeholder="Enter Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button>Add</button>
      </form>

      <h3>My friends List</h3>
      <ul>
        {friends.map((ff,i) => (
          <li key={i}>{ff}
          <button>Update</button>
          <button>Delete</button>
          </li>
        ))}
      </ul>
      <Demo/>
    </>
  );
}

export default App;
