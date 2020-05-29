import React from 'react';
import NavButton from './Navbutton';
import './Navblock.css';

interface ButtonData {
  title: string;
  link: string;
}

export default function Navblock(){
  const navblock:ButtonData[] =
  [
    {
        title: "Home",
        link:"/home"
    },
    {
        title: "Professional Experience",
        link:"/experience"
    },
    {
      title: "Side Projects",
      link:"/projects"
    }
  ];
  let result = navblock.map((button: ButtonData)=>{
    return(
      <NavButton buttonData={button}/>
    );
  });

  return(
    <div className="navblock">
      { result }
    </div>
  );
}
