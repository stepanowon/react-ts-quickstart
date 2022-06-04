import { useEffect, useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10000);

  useEffect(() => {
    console.log("## Re-render");
  }, [count1, count2]);

  const add = () => {
    setCount1((count) => count + 1);
    setCount2((count) => count + 1);
  };

  const addAfter1Sec = () => {
    setTimeout(() => {
      setCount1((count) => count + 1);
      setCount2((count) => count + 1);
    }, 1000);
  };

  return (
    <div>
      <h2>React v17</h2>
      <hr />
      <button onClick={add}>즉시 증가</button>
      <button onClick={addAfter1Sec}>1초후 증가</button>
      <hr />
      count1 : {count1}
      <br />
      count2 : {count2}
    </div>
  );
}

export default App;
