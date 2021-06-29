import React from "react";
import ReactDOM from "react-dom";

class ToggleV4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "ON",
    };
  }

  //https://stackoverflow.com/questions/52979915/why-we-dont-need-to-bind-the-arrow-function-in-react
  handleClick = () => {
    this.setState((state) => ({
      status: state.status === "ON" ? "OFF" : "ON",
    }));
  };

  render() {
    return <button onClick={this.handleClick}>{this.state.status}</button>;
  }
}

export default ToggleV4;
