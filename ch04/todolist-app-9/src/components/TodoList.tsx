import React, { useState } from "react";
import { TodoListItemType } from "../AppContainer";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  todoList: Array<TodoListItemType>;
  toggleDone: (no: number) => void;
  deleteTodo: (no: number) => void;
};

const TodoList = (props: TodoListProps) => {
  let items = props.todoList.map((item) => {
    return <TodoListItem key={item.no} todoItem={item} deleteTodo={props.deleteTodo} toggleDone={props.toggleDone} />;
  });

  return (
    <div className="row">
      {" "}
      <div className="col">
        <ul className="list-group">{items}</ul>
      </div>
    </div>
  );
};

export default TodoList;
