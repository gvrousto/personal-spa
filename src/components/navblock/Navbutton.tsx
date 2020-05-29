import React from 'react';
import { Link } from 'react-router-dom';
import './Navbutton.css';

interface ButtonData {
  title: string;
  link: string;
}

interface NavButtonProps {
  buttonData: ButtonData;
}

export default function Navbutton(props: NavButtonProps){
  return(
    <Link to={props.buttonData.link}>
    <div className="navbutton noselect">
      {props.buttonData.title}
    </div>
    </Link>
  );
}
