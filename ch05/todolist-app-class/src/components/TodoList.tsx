import React, { Component } from "react";
import { TodoListItemType } from "../AppContainer";
import TodoListItem from "./TodoListItem";

type Props = {
  todoList: Array<TodoListItemType>;
  toggleDone: Function;
  deleteTodo: Function;
};

export default class TodoList extends Component<Props> {
  render() {
    let items = this.props.todoList.map((item: TodoListItemType) => {
      return <TodoListItem key={item.no} todoItem={item} deleteTodo={this.props.deleteTodo} toggleDone={this.props.toggleDone} />;
    });

    return (
      <div className="row">
        {" "}
        <div className="col">
          <ul className="list-group">{items}</ul>
        </div>
      </div>
    );
  }
}
