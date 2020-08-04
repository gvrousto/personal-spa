import React from 'react';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from './components/portfolio/Portfolio';
import Description from "./components/description/Description";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/description/:experience">
            <Description />
          </Route>
          <Route>
            <Redirect to="/portfolio"/>
          </Route>
        </Switch>
      </div>
  </Router>
  );
}

export default App;
