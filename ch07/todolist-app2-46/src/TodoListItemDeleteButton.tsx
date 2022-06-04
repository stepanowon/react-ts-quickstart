import React from "react";

type Props = {
  id: number;
  deleteTodo: (id: number) => void;
};

const TodoListItemDeleteButton = (props: Props) => {
  console.log("## TodoListItemDeleteButton");
  return (
    <span style={{ cursor: "pointer", color: "blue" }} onClick={() => props.deleteTodo(props.id)}>
      삭제
    </span>
  );
};

export default React.memo(TodoListItemDeleteButton);
