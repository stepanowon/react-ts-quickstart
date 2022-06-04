import React, { useState } from "react";
import produce from "immer";

export type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

// Provider로 전달한 데이터(value)의 타입 정의
export type TodoListContextValueType = {
  state: { todoList: Array<TodoListItemType> };
  actions: {
    addTodo: (todo: string) => void;
    deleteTodo: (no: number) => void;
    toggleDone: (no: number) => void;
  };
};

// 앞에서 정의한 타입 또는 null 타입을 이용해 Context 객체 생성
const TodoContext = React.createContext<TodoListContextValueType | null>(null);

// TodoProvider 컴포넌트의 자식 컴포넌트 타입을 정의
// <TodoProvider>  자식 컴포넌트  </TodoProvider>
type PropsType = {
  children: JSX.Element | JSX.Element[];
};

// 상태와 상태 변경 함수를 가지는 컴포넌트.
// 상태와 상태 변경함수를 데이터 타입 형식으로 구성한 후 value 속성으로 전달함.
// <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
export const TodoProvider = (props: PropsType) => {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
    { no: 1, todo: "React학습1", done: false },
    { no: 2, todo: "React학습2", done: false },
    { no: 3, todo: "React학습3", done: true },
    { no: 4, todo: "React학습4", done: false },
  ]);

  const addTodo = (todo: string) => {
    const newTodoList = produce(todoList, (draft: Array<TodoListItemType>) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no: number) => {
    const index = todoList.findIndex((item) => item.no === no);
    const newTodoList = produce(todoList, (draft: Array<TodoListItemType>) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleDone = (no: number) => {
    const index = todoList.findIndex((item) => item.no === no);
    const newTodoList = produce(todoList, (draft: Array<TodoListItemType>) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  const values: TodoListContextValueType = {
    state: { todoList },
    actions: { addTodo, deleteTodo, toggleDone },
  };
  return <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>;
};

export default TodoContext;
