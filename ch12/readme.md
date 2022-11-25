# 12장 예제

---

### 폴더명의 숫자는 절을 의미합니다.

- 예 : 마지막 숫자가 6이라면 6절을 뜻합니다.

### todolist-app-router-slice35-appdx 폴더

- 12.3.5에서 다루지 않았던 createSlice를 적용한 예제
  - createAction, createReducer 기능을 createSlice 하나로 제공

```
//TodoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoItemType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};

export type TodoStatesType = { todoList: Array<TodoItemType> };

const initialState: TodoStatesType = {
  todoList: [
    { id: 1, todo: "ES6 학습", desc: "설명1", done: false },
    { id: 2, todo: "React 학습", desc: "설명2", done: false },
    { id: 3, todo: "ContextAPI 학습", desc: "설명3", done: true },
    { id: 4, todo: "야구 경기 관람", desc: "설명4", done: false },
  ],
};

const TodoSlice = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    addTodo: (state: TodoStatesType, action: PayloadAction<{ todo: string; desc: string }>) => {
      state.todoList.push({
        id: new Date().getTime(),
        todo: action.payload.todo,
        desc: action.payload.desc,
        done: false,
      });
    },
    deleteTodo: (state: TodoStatesType, action: PayloadAction<{ id: number }>) => {
      let index = state.todoList.findIndex((item) => item.id === action.payload.id);
      state.todoList.splice(index, 1);
    },
    toggleDone: (state: TodoStatesType, action: PayloadAction<{ id: number }>) => {
      let index = state.todoList.findIndex((item) => item.id === action.payload.id);
      state.todoList[index].done = !state.todoList[index].done;
    },
    updateTodo: (state: TodoStatesType, action: PayloadAction<{ id: number; todo: string; desc: string; done: boolean }>) => {
      let index = state.todoList.findIndex((item) => item.id === action.payload.id);
      state.todoList[index] = { ...action.payload };
    },
  },
});
const TodoReducer = TodoSlice.reducer;
const TodoActionCreator = TodoSlice.actions;

export { TodoActionCreator, TodoReducer };
```
