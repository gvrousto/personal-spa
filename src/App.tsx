import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Experience from './components/experience/Experience';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar/>
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
