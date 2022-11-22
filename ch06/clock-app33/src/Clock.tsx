import React, { Component } from "react";
import DateAndTime from "date-and-time";

type Props = {
  formatString: string;
};
type State = {
  currentTime: Date;
};

export default class Clock extends Component<Props, State> {
  state = {
    currentTime: new Date(),
  };
  handle: number = 0;

  componentDidMount = () => {
    this.handle = setInterval(() => {
      console.log("## tick!");
      this.setState({ currentTime: new Date() });
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.handle);
  };

  render() {
    return (
      <div className="boxStyle">
        <h3>{DateAndTime.format(this.state.currentTime, this.props.formatString)}</h3>
      </div>
    );
  }
}
