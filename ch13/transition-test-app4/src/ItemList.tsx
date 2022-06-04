import { useDeferredValue } from "react";
import { ItemType } from "./App2";
import logo from "./logo.svg";

type Props = { results: Array<ItemType> };

const ItemList = (props: Props) => {
  const deferredResults = useDeferredValue(props.results);
  const divRows = deferredResults.map((item) => (
    <div key={item.id}>
      id: {item.id}
      <br />
      keyword: {item.keyword}
      <br />
      <img src={logo} style={{ width: 100, height: 100 }} />
      <hr />
    </div>
  ));
  return <div>{divRows}</div>;
};

export default ItemList;
