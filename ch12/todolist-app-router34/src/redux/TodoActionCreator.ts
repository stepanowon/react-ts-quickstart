export const TODO_ACTION = {
  ADD_TODO: "addTodo" as const,
  DELETE_TODO: "deleteTodo" as const,
  TOGGLE_DONE: "toggleDone" as const,
  UPDATE_TODO: "updateTodo" as const,
};

const TodoActionCreator = {
  addTodo: (todoItem: { todo: string; desc: string }) => {
    return { type: TODO_ACTION.ADD_TODO, payload: todoItem };
  },
  deleteTodo: (todoItem: { id: number }) => {
    return { type: TODO_ACTION.DELETE_TODO, payload: todoItem };
  },
  toggleDone: (todoItem: { id: number }) => {
    return { type: TODO_ACTION.TOGGLE_DONE, payload: todoItem };
  },
  updateTodo: (todoItem: { id: number; todo: string; desc: string; done: boolean }) => {
    return { type: TODO_ACTION.UPDATE_TODO, payload: todoItem };
  },
};

export type TodoActionType =
  | ReturnType<typeof TodoActionCreator.addTodo>
  | ReturnType<typeof TodoActionCreator.deleteTodo>
  | ReturnType<typeof TodoActionCreator.toggleDone>
  | ReturnType<typeof TodoActionCreator.updateTodo>;

export default TodoActionCreator;
