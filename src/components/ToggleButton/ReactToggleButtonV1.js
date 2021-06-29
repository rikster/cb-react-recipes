import React, { useState } from "react";
import ReactDOM from "react-dom";

class ToggleV1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleButton: true,
    };

    //this.handleClick = this.handleClick.bind(this);
  }

  /* handleClick(e) {
    e.preventDefault();
    this.setState({ toggleButton: !this.state.toggleButton });
  }
  */

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ toggleButton: !this.state.toggleButton });
  };

  render() {
    return (
      <div className="challange">
        <button onClick={this.handleClick}>
          {this.state.toggleButton ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default ToggleV1;
