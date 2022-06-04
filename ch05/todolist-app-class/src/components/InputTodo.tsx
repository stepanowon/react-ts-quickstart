import React, { Component } from "react";

type Props = {
  addTodo: Function;
};

type State = {
  todo: string;
};

export default class InputTodo extends Component<Props, State> {
  state = {
    todo: "",
  };

  addHandler = () => {
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };

  enterInput = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      this.addHandler();
    }
  };

  changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ todo: e.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="input-group">
            <input
              id="msg"
              type="text"
              className="form-control"
              name="msg"
              placeholder="할일을 여기에 입력!"
              value={this.state.todo}
              onChange={this.changeTodo}
              onKeyUp={this.enterInput}
            />
            <span className="btn btn-primary input-group-addon" onClick={this.addHandler}>
              추가
            </span>
          </div>
        </div>
      </div>
    );
  }
}
