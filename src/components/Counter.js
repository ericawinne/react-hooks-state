import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 2)
  }

  return <div onClick={increment}>{count}</div>
}

export default Counter