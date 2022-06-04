import React from "react";
import { TodoListItemType } from "./App";

type Props = {
  todoListItem: TodoListItemType;
};

const TodoListItem = (props: Props) => {
  console.log("## TodoListItem");
  return <li>{props.todoListItem.todo}</li>;
};

export default React.memo(TodoListItem);
