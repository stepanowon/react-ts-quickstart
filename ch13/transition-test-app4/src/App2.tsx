import React, { useState, useEffect, ChangeEvent, useTransition } from "react";
import ItemList from "./ItemList";

export type ItemType = {
  id: number;
  keyword: string;
};

const App = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [results, setResults] = useState<Array<ItemType>>([]);

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
      setResults(items);
    }
  }, [keyword]);

  return (
    <div style={{ margin: 10 }}>
      <div className="SearchInput">
        Keyword : <input type="text" value={keyword} onChange={handleChange} />
      </div>
      <hr />
      <ItemList results={results} />
    </div>
  );
};

export default App;
