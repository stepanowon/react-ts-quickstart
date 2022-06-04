import React, { Component } from "react";
import { TodoListItemType } from "../AppContainer";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

type Props = {
  todoList: Array<TodoListItemType>;
  addTodo: Function;
  deleteTodo: Function;
  toggleDone: Function;
};

export default class App extends Component<Props> {
  render() {
    return (
      <div className="container">
        <div className="card card-body bg-light">
          <div className="title">:: Todolist App</div>
        </div>
        <div className="card card-default card-borderless">
          <div className="card-body">
            <InputTodo addTodo={this.props.addTodo} />
            <TodoList todoList={this.props.todoList} toggleDone={this.props.toggleDone} deleteTodo={this.props.deleteTodo} />
          </div>
        </div>
      </div>
    );
  }
}
