import React, { useCallback, useState } from "react";
import TodoList from "./TodoList";

export type TodoListItemType = { id: number; todo: string };

const App = () => {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([]);
  const [todo, setTodo] = useState<string>("");

  const addTodo = useCallback(
    (todo: string) => {
      let newTodoList = [...todoList, { id: new Date().getTime(), todo: todo }];
      setTodoList(newTodoList);
      setTodo("");
    },
    [todoList]
  );

  const deleteTodo = useCallback(
    (id: number) => {
      let newTodoList = [...todoList];
      const index = todoList.findIndex((item) => item.id === id);
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  return (
    <div>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>Add Todo</button>
      <br />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      <div>todo 갯수 : {todoList.length}</div>
    </div>
  );
};

export default App;
