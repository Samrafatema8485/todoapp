import React, { useState } from "react";

export const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <button onClick={() => setNum(num - 5)}>-</button>
      <b>{num}</b>
      <button onClick={() => setNum(num + 5)}>+</button>
    </div>
  );
};
