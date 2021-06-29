import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactToggleButton from './components/ReactToggleButton';
import ReactToggleButtonV1 from './components/ReactToggleButtonV1';
import ReactToggleButtonV2 from './components/ReactToggleButtonV2';

import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className='side-bar'>
          <Link to='/'>Home</Link>
          <br/>
          <Link to='/reacttogglebutton'>Toggle Button</Link>
          <br/>
          <Link to='/reacttogglebuttonV1'>Toggle Button V1</Link>
          <br/>
          <Link to='/reacttogglebuttonV2'>Toggle Button V2</Link>
        </div>
        <div className='container'>
          <Switch>
            <Route exact path='/' />
            <Route exact path='/ReactToggleButton' component={ReactToggleButton} />' />
            <Route exact path='/ReactToggleButtonV1' component={ReactToggleButtonV1} />' />
            <Route exact path='/ReactToggleButtonV2' component={ReactToggleButtonV2} />' />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

 export default App;
