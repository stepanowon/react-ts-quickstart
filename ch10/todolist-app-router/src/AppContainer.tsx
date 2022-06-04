import { useState } from "react";
import App from "./App";
import produce from "immer";

export type TodoItemType = { id: number; todo: string; desc: string; done: boolean };
export type StatesType = { todoList: Array<TodoItemType> };
export type CallbacksType = {
  addTodo: (todo: string, desc: string) => void;
  deleteTodo: (id: number) => void;
  toggleDone: (id: number) => void;
  updateTodo: (id: number, todo: string, desc: string, done: boolean) => void;
};

const AppContainer = () => {
  const [todoList, setTodoList] = useState<Array<TodoItemType>>([
    { id: 1, todo: "ES6학습", desc: "설명1", done: false },
    { id: 2, todo: "React학습", desc: "설명2", done: false },
    { id: 3, todo: "ContextAPI 학습", desc: "설명3", done: true },
    { id: 4, todo: "야구경기 관람", desc: "설명4", done: false },
  ]);

  const addTodo = (todo: string, desc: string) => {
    let newTodoList = produce(todoList, (draft) => {
      draft.push({ id: new Date().getTime(), todo, desc, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (id: number) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleDone = (id: number) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  const updateTodo = (id: number, todo: string, desc: string, done: boolean) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft[index] = { ...draft[index], todo, desc, done };
    });
    setTodoList(newTodoList);
  };

  const callbacks: CallbacksType = { addTodo, deleteTodo, updateTodo, toggleDone };
  const states: StatesType = { todoList };

  return <App callbacks={callbacks} states={states} />;
};

export default AppContainer;
