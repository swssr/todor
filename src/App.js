import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greet";
import TopNav from "./components/TopNav";

function App() {
  const [username, setUsername] = useState("Default User");
  const [password, setPassword] = useState("12345");

  const [user, setUser] = useState({ username: "", password: "" });

  console.log(user);
  return (
    <div>
      <TopNav username={username} />
      <Greeting />
      <input
        defaultValue={username}
        onChange={(event) => setUser({ ...user, username: event.target.value })}
        type="text"
        placeholder="username"
      />
      <input
        onChange={(event) => setUser({ ...user, password: event.target.value })}
        type="password"
        placeholder="password"
        defaultValue={password}
      />

      <button onClick={() => console.log(user)}>SUBMIT</button>
    </div>
  );
}

export default App;
