import React, { Component } from "react";
import Chatting from "./Chatting";

export default class App extends Component<{}, {}> {
  state = {};

  render() {
    return (
      <div>
        <Chatting />
      </div>
    );
  }
}
