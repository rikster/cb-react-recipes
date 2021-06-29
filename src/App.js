import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactToggleButton from "./components/ToggleButton/ReactToggleButton";
import ReactToggleButtonV1 from "./components/ToggleButton/ReactToggleButtonV1";
import ReactToggleButtonV2 from "./components/ToggleButton/ReactToggleButtonV2";
import ReactToggleButtonV3 from "./components/ToggleButton/ReactToggleButtonV3";
import ReactToggleButtonV4 from "./components/ToggleButton/ReactToggleButtonV4";
import ReactToggleButtonV5 from "./components/ToggleButton/ReactToggleButtonV5";
import ReactToggleButtonV6 from "./components/ToggleButton/ReactToggleButtonHooksV6";
import ContextAPI from "./components/ContextAPI/ContextAPI";
import ContextAPIV1 from "./components/ContextAPI/ContextAPIV1";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="side-bar">
          <Link to="/">Home</Link>
          <br />
          <Link to="/reacttogglebutton">Toggle Button</Link>
          <br />
          <Link to="/reacttogglebuttonV1">Toggle Button V1</Link>
          <br />
          <Link to="/reacttogglebuttonV2">Toggle Button V2</Link>
          <br />
          <Link to="/reacttogglebuttonV3">Toggle Button V3</Link>
          <br />
          <Link to="/reacttogglebuttonV4">Toggle Button V4</Link>
          <br />
          <Link to="/reacttogglebuttonV5">Toggle Button V5</Link>
          <br />
          <Link to="/reacttogglebuttonV6">
            Toggle Button V6 (Best/Simplist)
          </Link>
          <br />
          <br />
          <Link to="/contextapi">ContextAPI</Link>
          <br />
          <Link to="/contextapiv1">ContextAPI V1</Link>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" />
            <Route
              exact
              path="/ReactToggleButton"
              component={ReactToggleButton}
            />
            <Route
              exact
              path="/ReactToggleButtonV1"
              component={ReactToggleButtonV1}
            />
            <Route
              exact
              path="/ReactToggleButtonV2"
              component={ReactToggleButtonV2}
            />
            <Route
              exact
              path="/ReactToggleButtonV3"
              component={ReactToggleButtonV3}
            />
            <Route
              exact
              path="/ReactToggleButtonV4"
              component={ReactToggleButtonV4}
            />
            <Route
              exact
              path="/ReactToggleButtonV5"
              component={ReactToggleButtonV5}
            />
            <Route
              exact
              path="/ReactToggleButtonV6"
              component={ReactToggleButtonV6}
            />
            <Route
                exact
                path="/ContextAPI"
                component={ContextAPI}
            />
            <Route
                exact
                path="/ContextAPIV1"
                component={ContextAPIV1}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
