import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleCountChange = (newCount) => {
    setCount(newCount);
  };
  return (
    <>
      <section>
        <h3>Counter App</h3>
        <div>Count: {count}</div>
        <button onClick={() => handleCountChange(count + 1)}>Increment</button>
        <button onClick={() => handleCountChange(count - 1)}>Decrement</button>
      </section>
    </>
  );
}

export default App;
