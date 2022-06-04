import React, { Component } from "react";
import Clock from "./Clock";

type State = {
  formatString: string;
};

export default class App extends Component<{}, State> {
  state = {
    //HH:mm:ss
    //H시 m분 s초
    formatString: "HH:mm:ss",
  };

  render() {
    return (
      <div className="boxStyle">
        <h2>간단한 디지털 시계</h2>
        <hr />
        <Clock formatString={this.state.formatString} />
      </div>
    );
  }
}
