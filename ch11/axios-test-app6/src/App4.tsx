import axios from "axios";
import React from "react";

const requestAPI = async () => {
  const url = "/api/todolist/gdhong";
  const response = await axios.get(url);
  console.log("# 응답객체 : ", response);
};
requestAPI();
type Props = {};

const App4 = (props: Props) => {
  return <h2>Console Log를 확인합니다.</h2>;
};

export default App4;
