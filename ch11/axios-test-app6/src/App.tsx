import axios from "axios";

type TodoType = { id: number; todo: string; done: boolean; desc: string };

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/";

//4건의 목록을 조회한 후 첫번째 할일만 한번 더 조회합니다.
const requestAPI = () => {
  let todoList: Array<TodoType> = [];
  axios
    .get(listUrl)
    .then((response) => {
      todoList = response.data;
      console.log("# TodoList : ", todoList);
      return todoList[0].id;
    })
    .then((id) => {
      return axios.get(todoUrlPrefix + id);
    })
    .then((response) => {
      console.log("## 첫번째 Todo : ", response.data);
      return todoList[1].id;
    })
    .then((id) => {
      axios.get(todoUrlPrefix + id).then((response) => {
        console.log("## 두번째 Todo : ", response.data);
      });
    });
};

requestAPI();

type Props = {};

const App = (props: Props) => {
  return <h2>Console.log를 확인하세요</h2>;
};

export default App;
