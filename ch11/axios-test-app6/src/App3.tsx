import axios from "axios";

type TodoType = { id: number; todo: string; done: boolean; desc: string };

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/";

//4건의 목록을 조회한 후 한건씩 순차적으로 순회하며 조회하기
const requestAPI = async () => {
  let todoList: Array<TodoType>;

  try {
    let response = await axios.get(listUrl);
    todoList = response.data;
    console.log("# TodoList : ", todoList);
    for (let i = 0; i < todoList.length; i++) {
      response = await axios.get(todoUrlPrefix + todoList[i].id);
      console.log(`# ${i + 1}번째 Todo : `, response.data);
    }
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
    else console.log(e);
  }
};

requestAPI();

type Props = {};

const App = (props: Props) => {
  return <h2>Console.log를 확인하세요</h2>;
};

export default App;
