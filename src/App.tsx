import React, {useState} from 'react';
import Portfolio from './components/portfolio/Portfolio';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import "./App.css";

function App() {
  const [activeCard, setActiveCard] = useState("");
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route>
            <Redirect to="portfolio"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// <Navbar/>

// <Route exact path="/about">
//   <Home/>
// </Route>
// <Route exact path="/experience">
//   <Experience activeCard={activeCard} setActiveCard={setActiveCard}/>
// </Route>
// <Route path="/">
//   <Redirect to="/experience"/>
// </Route>

export default App;
