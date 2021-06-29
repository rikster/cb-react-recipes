import React, { useState } from "react";
import ReactDOM from "react-dom";

class ToggleV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }

  handleClick(e) {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const { toggle } = this.state;
    return (
      <div className="challange">
        <button onClick={() => this.handleClick()}>{toggle ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

export default ToggleV2;
