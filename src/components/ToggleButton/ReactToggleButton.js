import React, { useState } from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    // todo
  }

  render() {
    return (
      <div className="challange">
        React Button Toggle <br />
        <p>
          Here is a simple React template code. Your goal is to modify the
          component so that you can properly toggle the button to switch between
          an ON state and an OFF state. When the button is on and it is clicked,
          it turns off and the text within it changes from ON to OFF and vice
          versa. Make use of component state for this challenge. You are free to
          add classes and styles, but make sure you leave the element ID's as
          they are. Submit your code once it is complete and our system will
          validate your output.
        </p>
        <button>ON</button>
      </div>
    );
  }
}

export default Toggle;
