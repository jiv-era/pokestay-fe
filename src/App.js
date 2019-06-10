import React from 'react';  
import './App.css';

import Home from './static/Home.js'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginForm from './user/LoginForm.js'
import SignUpForm from './user/SignUpForm.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
          {/* <LoginForm /> */}
          {/* <SignUpForm /> */}
          {/* <Home /> */}
    </div>
  );
}

export default App;
