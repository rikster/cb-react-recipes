import React from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }

  //mouse event (e) not necesssary
  handleClick(e) {
    e.preventDefault();
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        {this.state.toggle ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
