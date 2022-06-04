import { createReducer } from "@reduxjs/toolkit";
import TodoActionCreator from "./TodoActionCreator";

export type TodoItemType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};

export type TodoStatesType = { todoList: Array<TodoItemType> };

const initialState: TodoStatesType = {
  todoList: [
    { id: 1, todo: "ES6학습", desc: "설명1", done: false },
    { id: 2, todo: "React학습", desc: "설명2", done: false },
    { id: 3, todo: "ContextAPI 학습", desc: "설명3", done: true },
    { id: 4, todo: "야구경기 관람", desc: "설명4", done: false },
  ],
};

const TodoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TodoActionCreator.addTodo, (state, action) => {
      state.todoList.push({
        id: new Date().getTime(),
        todo: action.payload.todo,
        desc: action.payload.desc,
        done: false,
      });
    })
    .addCase(TodoActionCreator.deleteTodo, (state, action) => {
      let index = state.todoList.findIndex((item) => item.id === action.payload.id);
      state.todoList.splice(index, 1);
    })
    .addCase(TodoActionCreator.toggleDone, (state, action) => {
      let index = state.todoList.findIndex((item) => item.id === action.payload.id);
      state.todoList[index].done = !state.todoList[index].done;
    })
    .addCase(TodoActionCreator.updateTodo, (state, action) => {
      let index = state.todoList.findIndex((item) => item.id === action.payload.id);
      state.todoList[index] = { ...action.payload };
    })
    .addDefaultCase((state, action) => state);
});

export default TodoReducer;
