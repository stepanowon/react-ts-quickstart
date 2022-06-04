import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ margin: "5px" }}>
      <h3>이벤트 기초</h3>
      <div>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
      </div>
      <div>
        카운트 : <input type="text" value={count} />
      </div>
    </div>
  );
};

export default App;
