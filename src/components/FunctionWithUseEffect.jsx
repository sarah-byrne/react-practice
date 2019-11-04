import React, { useState, useEffect } from "react";

function FunctionWithUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked button 2 ${count} times`;
  });

  return (
    <div>
      <p>You clicked button 2 {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me (button 2) </button>
    </div>
  );
}

export default FunctionWithUseEffect;
