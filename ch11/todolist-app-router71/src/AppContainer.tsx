import { useEffect, useState } from "react";
import App from "./App";
import produce from "immer";
import axios from "axios";

export type TodoItemType = { id: number; todo: string; desc: string; done: boolean };
export type StatesType = { todoList: Array<TodoItemType> };
export type CallbacksType = {
  addTodo: (todo: string, desc: string, callback: () => void) => void;
  deleteTodo: (id: number) => void;
  toggleDone: (id: number) => void;
  updateTodo: (id: number, todo: string, desc: string, done: boolean, callback: () => void) => void;
};

//다른 사용자명을 사용하려면 다음 경로로 요청하여 사용자 데이터를 만드세요
// -->   http://localhost:8000/todolist/[user명]/create
const USER = "gdhong";
const BASEURI = "/api/todolist/" + USER;

const AppContainer = () => {
  let [todoList, setTodoList] = useState<Array<TodoItemType>>([]);

  useEffect(() => {
    fetchTodoList();
  }, []);

  //할일 목록 조회 기능을 제공하는 함수
  const fetchTodoList = async () => {
    setTodoList([]);
    try {
      const response = await axios.get(BASEURI);
      setTodoList(response.data);
    } catch (e) {
      if (e instanceof Error) alert("조회 실패 :" + e.message);
      else alert("조회 실패 :" + e);
    }
  };

  //할일 추가 기능을 제공하는 함수
  //할일을 추가가 성공하면 마지막 인자로 전달된 callback을 호출합니다.
  const addTodo = async (todo: string, desc: string, callback: () => void) => {
    try {
      const response = await axios.post(BASEURI, { todo, desc });
      if (response.data.status === "success") {
        //한건의 할일 추가가 성공이라면 전체 할일 목록을 다시 조회하는 것이 아니라
        //추가된 한건의 정보만 state에 추가합니다.
        let newTodoList = produce(todoList, (draft) => {
          draft.push({ ...response.data.item, done: false });
        });
        setTodoList(newTodoList);
        callback();
      } else {
        alert("할일 추가실패:" + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) alert("할일 추가실패:" + e.message);
      else alert("할일 추가실패:" + e);
    }
  };

  //할일 한건을 삭제하는 기능을 제공하는 함수
  const deleteTodo = async (id: number) => {
    try {
      const response = await axios.delete(`${BASEURI}/${id}`);
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft.splice(index, 1);
        });
        setTodoList(newTodoList);
      } else {
        alert("할일 삭제 실패:" + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) alert("할일 삭제 실패:" + e.message);
      else alert("할일 삭제 실패:" + e);
    }
  };

  //할일의 완료 여부를 토글하는 기능을 제공하는 함수
  const toggleDone = async (id: number) => {
    try {
      let todoItem = todoList.find((todo) => todo.id === id);
      const response = await axios.put(`${BASEURI}/${id}`, { ...todoItem, done: !todoItem?.done });
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft[index].done = !draft[index].done;
        });
        setTodoList(newTodoList);
      } else {
        alert("완료 토글 실패 : " + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) alert("완료 토글 실패:" + e.message);
      else alert("완료 토글 실패:" + e);
    }
  };

  //할일 수정 기능을 제공하는 함수
  //할일을 수정이 성공하면 마지막 인자로 전달된 callback을 호출합니다.
  const updateTodo = async (id: number, todo: string, desc: string, done: boolean, callback: () => void) => {
    try {
      const response = await axios.put(`${BASEURI}/${id}`, { todo, desc, done });
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft[index] = { ...draft[index], todo, desc, done };
        });
        setTodoList(newTodoList);
        callback();
      } else {
        alert("할일 수정 실패 : " + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) alert("할일 수정 실패 :" + e.message);
      else alert("할일 수정 실패 :" + e);
    }
  };

  const callbacks: CallbacksType = { addTodo, deleteTodo, updateTodo, toggleDone };
  const states: StatesType = { todoList };
  return <App callbacks={callbacks} states={states} />;
};

export default AppContainer;
