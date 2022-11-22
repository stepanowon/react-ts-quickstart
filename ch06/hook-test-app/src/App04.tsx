import React, { useReducer, useState } from "react";
import { TodoActionCreator, TodoItemType, TodoReducer } from "./TodoReducer";

let idNow = new Date().getTime();
const initialTodoList: Array<TodoItemType> = [
  { id: idNow, todo: "운동" },
  { id: idNow + 1, todo: "독서" },
  { id: idNow + 2, todo: "음악감상" },
];

const App = () => {
  const [todoList, dispatchTodoList] = useReducer(TodoReducer, initialTodoList);
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    dispatchTodoList(TodoActionCreator.addTodo(todo));
    setTodo("");
  };
  const deleteTodo = (id: number) => {
    dispatchTodoList(TodoActionCreator.deleteTodo(id));
  };
  return (
    <div style={{ padding: "20px" }}>
      <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button onClick={addTodo}>할일 추가</button>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item.todo} &nbsp;&nbsp;
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
