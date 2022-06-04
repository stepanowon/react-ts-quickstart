import React, { useState, useEffect, ChangeEvent, useTransition } from "react";
import logo from "./logo.svg";

type ItemType = {
  id: number;
  keyword: string;
};

const App = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [results, setResults] = useState<Array<ItemType>>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (keyword.trim() === "") {
      setResults([]);
    } else {
      const items = Array.from(Array(5000), (item, index) => {
        return { id: index, keyword: keyword };
      });
      //전환 작업으로 업데이트하도록 지정
      startTransition(() => {
        setResults(items);
      });
    }
  }, [keyword]);

  const divRows = results.map((item) => (
    <div key={item.id}>
      id: {item.id}
      <br />
      keyword: {item.keyword}
      <br />
      <img src={logo} style={{ width: 100, height: 100 }} />
      <hr />
    </div>
  ));

  return (
    <div style={{ margin: 10 }}>
      <div className="SearchInput">
        Keyword : <input type="text" value={keyword} onChange={handleChange} />
      </div>
      <hr />
      <div>
        {
          //isPending인 동안 true이면 fallback UI를 렌더링
          isPending ? <h2>로딩중입니다~~</h2> : divRows
        }
      </div>
    </div>
  );
};

export default App;
