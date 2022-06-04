import React from "react";
import { TodoListItemType } from "./App";

type Props = {
  todoListItem: TodoListItemType;
  deleteTodo: (id: number) => void;
};

const TodoListItem = (props: Props) => {
  console.log("## TodoListItem");
  return (
    <li>
      <span>{props.todoListItem.todo}</span>&nbsp;&nbsp;&nbsp;
      <span style={{ cursor: "pointer", color: "blue" }} onClick={() => props.deleteTodo(props.todoListItem.id)}>
        삭제
      </span>
    </li>
  );
};

export default React.memo(TodoListItem);
