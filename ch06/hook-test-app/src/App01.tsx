import { ChangeEvent, useState } from "react";

const App = () => {
  const [msg, setMsg] = useState<string>("");

  return (
    <div>
      <input type="text" value={msg} onChange={(e: ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)} />
      <br />
      <span>입력 메시지 : {msg}</span>
    </div>
  );
};

export default App;
