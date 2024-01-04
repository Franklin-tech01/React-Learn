// useState hook

import React, {useState} from "react";
import "./style.css";

const States = () => {
    const [count, setCount] = useState(4)

    function decrementCount() {
        setCount(prevCount => prevCount -1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

  return (
    <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
    </>
  );
};

export default States;