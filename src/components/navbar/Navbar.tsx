import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import "./Navbar.css";

const Navbar = () => {
  let breakPoint = useMediaQuery('(max-width:425px)');
  console.log(breakPoint);
  if(breakPoint){
    return (
      <div className="navbar-container">
        <div className="navbar-text">Gus Vroustouris</div>
        <Link className="navbar-button-text" to="/portfolio">
          <button className="navbar-button">About</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div className="navbar-container">
        <div className="navbar-text">Gus Vroustouris</div>
        <Link className="navbar-button-text" to="/about">
          <button className="navbar-button">About</button>
        </Link>
        <Link className="navbar-button-text" to="/contact">
          <button className="navbar-button">
            <div>Contact</div>
          </button>
        </Link>
        <Link className="navbar-button-text" to="/portfolio">
          <button className="navbar-button">Portfolio</button>
        </Link>
      </div>
    )
  }
};

export default Navbar;
