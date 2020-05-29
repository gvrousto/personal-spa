import React from 'react';
import Navblock from './components/navblock/Navblock';
import Home from './components/home/Home';
import Experience from './components/experience/Experience';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navblock/>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/experience">
            <Experience/>
          </Route>
          <Route path="/">
            <Redirect to="/home"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
