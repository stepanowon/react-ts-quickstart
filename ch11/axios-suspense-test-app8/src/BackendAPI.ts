import axios from "axios";

export type TodoItem = { id: number; todo: string; desc: string; done: boolean };
export type UserItem = { id: number; userid: string; username: string };

function asyncReaderFromPromise(promise: Promise<object>) {
  let status = "pending";
  let response: object;

  const suspender = promise
    .then((res: object) => {
      status = "success";
      response = res;
    })
    .catch((err: Error) => {
      status = "error";
      response = err;
    });

  const read = (): object | Error => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
}

const fetchTodoList = () => {
  const promise = axios.get("/api/todolist_long/gdhong").then((response) => response.data);
  return asyncReaderFromPromise(promise);
};

const fetchUser = () => {
  const promise = axios.get("/api/users/1").then((response) => response.data);
  return asyncReaderFromPromise(promise);
};

export { fetchTodoList, fetchUser };
