import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

export default function Navbar(){
  return(
    <div className="custom-navbar">
      <Link className="navitem" to="/home">
        Home
      </Link>
      <Link className="navitem" to="/experience">
        Experience
      </Link>
      <Link className="navitem" to="/skills">
        skills
      </Link>
    </div>
  );
}
