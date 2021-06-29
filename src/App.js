import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactToggleButton from './components/ReactToggleButton';

import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className='side-bar'>
          <Link to='/'>Home</Link>
          <br/>
          <Link to='/reacttogglebutton'>React Toggle Button</Link>
        </div>
        <div className='container'>
          <Switch>
            <Route exact path='/' />
            <Route exact path='/ReactToggleButton' component={ReactToggleButton} />' />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

 export default App;
