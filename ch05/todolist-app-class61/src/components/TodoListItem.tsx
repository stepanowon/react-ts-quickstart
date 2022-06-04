import React, { Component } from "react";
import { TodoListItemType } from "../AppContainer";

type Props = {
  todoItem: TodoListItemType;
  deleteTodo: Function;
  toggleDone: Function;
};

export default class TodoListItem extends Component<Props> {
  shouldComponentUpdate(nextProps: Props, nextState: {}) {
    if (nextProps.todoItem !== this.props.todoItem) return true;
    return false;
  }

  render() {
    console.log("## TodoListItem 렌더");

    let itemClassName = "list-group-item";
    if (this.props.todoItem.done) itemClassName += " list-group-item-success";
    return (
      <li className={itemClassName}>
        <span
          className={this.props.todoItem.done ? "todo-done pointer" : "pointer"}
          onClick={() => this.props.toggleDone(this.props.todoItem.no)}
        >
          {this.props.todoItem.todo}
          {this.props.todoItem.done ? " (완료)" : ""}
        </span>
        <span
          className="float-end badge bg-secondary pointer"
          onClick={() => this.props.deleteTodo(this.props.todoItem.no)}
        >
          삭제
        </span>
      </li>
    );
  }
}
