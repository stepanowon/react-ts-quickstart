import React, { useState } from "react";
import Calc from "./Calc";

const App = () => {
  const [x, setX] = useState<number>(100);
  const [y, setY] = useState<string>("ab");
  const [oper, setOper] = useState<string>("&");

  return (
    <div>
      <Calc x={x} y={y} oper={oper} />
    </div>
  );
};

export default App;
