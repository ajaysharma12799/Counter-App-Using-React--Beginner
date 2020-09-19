import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <header>
        <h1>Counter app Using State/Hooks</h1>
        <h1> Hooks is A Fancy Name </h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={ () => count >= 10 ? "Increasing Limit is Of 10" : setCount(count + 1) }>Incease Counter</button>
      <button onClick={ () => count <= 0 ? "Decreasing Limit is Of 0" : setCount(count - 1) }>Decrease Counter</button>
    </div>
  );
}

export default App;
