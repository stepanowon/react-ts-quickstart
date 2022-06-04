import { createAction } from "@reduxjs/toolkit";

const TodoActionCreator = {
  addTodo: createAction<{ todo: string; desc: string }>("addTodo"),
  deleteTodo: createAction<{ id: number }>("deleteTodo"),
  toggleDone: createAction<{ id: number }>("toggleDone"),
  updateTodo: createAction<{ id: number; todo: string; desc: string; done: boolean }>("updateTodo"),
};

export default TodoActionCreator;
