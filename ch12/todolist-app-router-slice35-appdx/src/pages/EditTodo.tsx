import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { TodoActionCreator, TodoItemType, TodoStatesType } from "../redux/TodoSlice";

type PropsType = {
  updateTodo: (id: number, todo: string, desc: string, done: boolean) => void;
  todoList: Array<TodoItemType>;
};

type TodoParam = { id?: string };

const EditTodo = ({ todoList, updateTodo }: PropsType) => {
  const navigate = useNavigate();
  let { id } = useParams<TodoParam>();
  let todoItem = todoList.find((item) => item.id === parseInt(id ? id : "0"));
  if (!todoItem) {
    navigate("/todos");
    return <></>;
  }
  const [todoOne, setTodoOne] = useState<TodoItemType>({ ...todoItem });

  const updateTodoHandler = () => {
    if (todoOne.todo.trim() === "" || todoOne.desc.trim() === "") {
      alert("반드시 할 일, 설명을 입력해야 합니다.");
      return;
    }
    let { id, todo, desc, done } = todoOne;
    updateTodo(id, todo, desc, done);
    navigate("/todos");
  };

  return (
    <>
      <div className="row">
        <div className="col p-3">
          <h2>할일 수정</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="todo">할일:</label>
            <input
              type="text"
              className="form-control"
              id="todo"
              value={todoOne.todo}
              onChange={(e) => setTodoOne({ ...todoOne, todo: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">설명:</label>
            <textarea
              className="form-control"
              rows={3}
              id="desc"
              value={todoOne.desc}
              onChange={(e) => setTodoOne({ ...todoOne, desc: e.target.value })}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="done">완료여부 : </label>{" "}
            <input type="checkbox" checked={todoOne.done} onChange={(e) => setTodoOne({ ...todoOne, done: e.target.checked })} />
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary m-1" onClick={updateTodoHandler}>
              수 정
            </button>
            <button type="button" className="btn btn-primary m-1" onClick={() => navigate("/todos")}>
              취 소
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: TodoStatesType) => ({
  todoList: state.todoList,
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  updateTodo: (id: number, todo: string, desc: string, done: boolean) => dispatch(TodoActionCreator.updateTodo({ id, todo, desc, done })),
});
const EditTodoContainer = connect(mapStateToProps, mapDispatchToProps)(EditTodo);

export default EditTodoContainer;
