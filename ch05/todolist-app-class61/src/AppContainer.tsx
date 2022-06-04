import React, { Component } from "react";
import produce from "immer";
import App from "./components/App";

export type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

type State = {
  todoList: Array<TodoListItemType>;
};

export default class AppContainer extends Component<{}, State> {
  state = {
    todoList: [
      { no: 1, todo: "React학습1", done: false },
      { no: 2, todo: "React학습2", done: false },
      { no: 3, todo: "React학습3", done: true },
      { no: 4, todo: "React학습4", done: false },
    ],
  };

  addTodo = (todo: string) => {
    let newTodoList = produce(this.state.todoList, (draft) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    this.setState({ todoList: newTodoList });
  };

  deleteTodo = (no: number) => {
    let index = this.state.todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(this.state.todoList, (draft) => {
      draft.splice(index, 1);
    });
    this.setState({ todoList: newTodoList });
  };
  toggleDone = (no: number) => {
    let index = this.state.todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(this.state.todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    this.setState({ todoList: newTodoList });
  };

  render() {
    return <App todoList={this.state.todoList} addTodo={this.addTodo} deleteTodo={this.deleteTodo} toggleDone={this.toggleDone} />;
  }
}
