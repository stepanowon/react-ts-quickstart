import axios from "axios";
import React from "react";

const requestAPI = async () => {
  const url = "/api/todolist_long/gdhong";
  axios
    .get(url, { timeout: 900 })
    .then((response) => {
      console.log("# 응답객체 : ", response);
    })
    .catch((e) => {
      if (e instanceof Error) console.log(e.message);
      else console.log(e);
    });
};
requestAPI();
type Props = {};

const App6 = (props: Props) => {
  return <h2>Console Log를 확인합니다.</h2>;
};

export default App6;
