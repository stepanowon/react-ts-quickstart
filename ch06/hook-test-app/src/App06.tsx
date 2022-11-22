import React, { useRef } from "react";

const App = () => {
  const elName: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const goFirstInputElement = () => {
    if (elName.current) elName.current.focus();
  };

  return (
    <div className="boxStyle">
      이름 : <input ref={elName} type="text" defaultValue="홍길동" />
      <br />
      전화 : <input type="text" defaultValue="010-2222-3333" />
      <br />
      주소 : <input type="text" defaultValue="서울" />
      <br />
      <button onClick={goFirstInputElement}>첫 번째 필드로 포커스 이동</button>
    </div>
  );
};

export default App;
