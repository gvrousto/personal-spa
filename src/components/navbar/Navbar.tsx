import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from "react-router-dom";
import { ReactComponent as NavMenu } from './NavMenu.svg';
import { ReactComponent as NavExit } from './NavExit.svg';
import "./Navbar.css";

const getButtonClassName = (activePath: string, thisPath: string): string => {
  if(activePath === thisPath){
    return "navbar-button-active";
  } else {
    return "navbar-button";
  }
};

const generateMobileNav = (expanded: boolean, activePath: string) => {
  if(expanded){
    return (
      <div className="mobile-buttons">
        <Link className="navbar-button-text" to="/about">
          <button className={getButtonClassName("/about", activePath)}>About</button>
        </Link>
        <Link className="navbar-button-text" to="/contact">
          <button className={getButtonClassName("/contact", activePath)}>
            <div>Contact</div>
          </button>
        </Link>
        <Link className="navbar-button-text" to="/portfolio">
          <button className={getButtonClassName("/portfolio" ,activePath)}>Portfolio</button>
        </Link>
      </div>
    )
  } else {
    return null;
  }
};

const Navbar = () => {
  const [activePath, setActivePath] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false);
  let breakPoint = useMediaQuery('(max-width:768px)');
  if(breakPoint){
    return (
      <div className="header-container">
        <div className="navbar-container">
          <Link className="navbar-text" to="/portfolio">Gus Vroustouris</Link>
          {expanded ? <NavExit onClick={()=>setExpanded(!expanded)} className="navbar-svg" /> : <NavMenu onClick={()=>setExpanded(!expanded)} className="navbar-svg" /> }
        </div>
        <div className="portfolio-text">I am a Full Stack Software Engineer, with a passion for automation.</div>
        {generateMobileNav(expanded, activePath)}
      </div>
    )
  } else {
    return (
      <div className="header-container">
        <div className="navbar-container">
          <Link className="navbar-text" to="/portfolio">Gus Vroustouris</Link>
            <Link className="navbar-button-text" to="/about">
              <button className={getButtonClassName("/about", activePath)}>About</button>
            </Link>
            <Link className="navbar-button-text" to="/contact">
              <button className={getButtonClassName("/contact", activePath)}>
                <div>Contact</div>
              </button>
            </Link>
            <Link className="navbar-button-text" to="/portfolio">
              <button className={getButtonClassName("/portfolio", activePath)}>Portfolio</button>
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
