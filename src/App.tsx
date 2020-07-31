import React, {useState} from 'react';
import Portfolio from './components/portfolio/Portfolio';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import "./App.css";

function App() {
  const [activeCard, setActiveCard] = useState("");
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Switch>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route>
            <Redirect to="portfolio"/>
          </Route>
        </Switch>
      </div>
  </Router>
  );
}

export default App;
