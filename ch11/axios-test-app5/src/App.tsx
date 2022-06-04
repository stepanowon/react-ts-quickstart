import axios from "axios";

const requestAPI = () => {
  //const url = "http://localhost:8000/todolist/gdhong";
  const url = "/api/todolist/gdhong";
  axios.get(url).then((response) => {
    console.log("# 응답객체 : ", response);
  });
};
requestAPI();

type Props = {};

const App = (props: Props) => {
  return <h2>Console.log를 확인하세요</h2>;
};

export default App;
