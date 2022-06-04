import produce from "immer";
import { TodoActionType, TODO_ACTION } from "./TodoActionCreator";

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

const TodoReducer = (state: TodoStatesType = initialState, action: TodoActionType) => {
  let index: number;
  switch (action.type) {
    case TODO_ACTION.ADD_TODO:
      return produce(state, (draft) => {
        draft.todoList.push({
          id: new Date().getTime(),
          todo: action.payload.todo,
          desc: action.payload.desc,
          done: false,
        });
      });
    case TODO_ACTION.DELETE_TODO:
      index = state.todoList.findIndex((item) => item.id === action.payload.id);
      return produce(state, (draft) => {
        draft.todoList.splice(index, 1);
      });
    case TODO_ACTION.TOGGLE_DONE:
      index = state.todoList.findIndex((item) => item.id === action.payload.id);
      return produce(state, (draft) => {
        draft.todoList[index].done = !draft.todoList[index].done;
      });
    case TODO_ACTION.UPDATE_TODO:
      index = state.todoList.findIndex((item) => item.id === action.payload.id);
      return produce(state, (draft) => {
        draft.todoList[index] = { ...action.payload };
      });
    default:
      return state;
  }
};

export default TodoReducer;
