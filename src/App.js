import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactToggleButton from './components/ReactToggleButton';
import ReactToggleButtonV1 from './components/ReactToggleButtonV1';

import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className='side-bar'>
          <Link to='/'>Home</Link>
          <br/>
          <Link to='/reacttogglebutton'>React Toggle Button</Link>
          <br/>
          <Link to='/reacttogglebuttonV1'>React Toggle Button V1</Link>
        </div>
        <div className='container'>
          <Switch>
            <Route exact path='/' />
            <Route exact path='/ReactToggleButton' component={ReactToggleButton} />' />
            <Route exact path='/ReactToggleButtonV1' component={ReactToggleButtonV1} />' />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

 export default App;
