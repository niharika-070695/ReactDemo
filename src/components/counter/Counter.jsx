import "./Counter.css";
import { useState } from "react";
function Counter() {
  console.log("re-rendering");
  var [state, setState] = useState(0);
  var [data, setData] = useState(10);
  const increaseCount = () => {
    // setState(state + 1);
    // setState(state + 2);
    setData(data - 1);
    setData(data - 2);
    setState((state) => {
      return state + 1;
    });
    setState((state) => {
      return state + 2;
    });
  };
  return (
    <div className="counter">
      <h2>Counter App</h2>
      <p>Count Value is: {state}</p>
      <p1>Count Value is:{data}</p1>
      <br />
      <button onClick={increaseCount}>
        Press to increase Red count and decrease Blue count
      </button>
    </div>
  );
}
export default Counter;
