import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Count } from "./components/Count";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Count count={count} setCount={setCount} />
          count is {count % 2 === 0 ? "even" : "odd"}
        </p>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(input);
          }}
        >
          <input type="text" value={input} onChange={e => setInput(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
