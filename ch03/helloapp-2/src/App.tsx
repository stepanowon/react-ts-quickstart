import React from "react";

const App = () => {
  let msg = "World";
  const addResult = (x: number, y: number) => {
    return (
      <div>
        {x} + {y} = {x + y}
      </div>
    );
  };

  return (
    <div>
      <h2>Hello {msg}!</h2>
      <hr />
      {addResult(4, 3)}
    </div>
  );
};

export default App;
