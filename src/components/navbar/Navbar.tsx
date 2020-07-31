import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ReactComponent as NavMenu } from './NavMenu.svg';
import { ReactComponent as NavExit } from './NavExit.svg';
import "./Navbar.css";

// const buttonClassName = (activeButton: string, buttonName: string) => {
//   if() {
//
//   }
// };

const generateMobileNav = (expanded: boolean, setExpanded: (set: boolean)=>void) => {
  if(expanded){
    return (
      <div>
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
  } else {
    return null;
  }
};

const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  let breakPoint = useMediaQuery('(max-width:768px)');
  console.log(breakPoint);
  if(breakPoint){
    return (
      <div className="header-container">
        <div className="navbar-container">
          <div className="navbar-text">Gus Vroustouris</div>
          {expanded ? <NavExit onClick={()=>setExpanded(!expanded)} className="navbar-svg" /> : <NavMenu onClick={()=>setExpanded(!expanded)} className="navbar-svg" /> }
        </div>
        <div className="portfolio-text">I am a Full Stack Software Engineer, with a passion for automation.</div>
        {generateMobileNav(expanded, setExpanded)}
      </div>
    )
  } else {
    return (
      <div className="header-container">
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
        <div className="portfolio-text">
          I am a Full Stack Software Engineer, with a passion for automation.
        </div>
      </div>
    )
  }
};

export default Navbar;
