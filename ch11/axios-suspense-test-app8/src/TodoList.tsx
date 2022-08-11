import { fetchTodoList, TodoItem } from "./BackendAPI";

const reader = fetchTodoList();

const TodoList = () => {
  const todoList = reader.read() as Array<TodoItem>;
  return (
    <div>
      <h2>TodoList 정보</h2>
      <ul className="todos">
        {todoList.map((todoItem) => (
          <li key={todoItem.id}>
            {todoItem.todo}, {todoItem.desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
