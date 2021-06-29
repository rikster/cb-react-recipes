import React, { useState } from "react";
import ReactDOM from "react-dom";

class ToggleV3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let text = this.state.text === true ? false : true;
    this.setState({ text: text });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="challange">
        <button onClick={() => this.handleClick()}>
          {text ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default ToggleV3;
