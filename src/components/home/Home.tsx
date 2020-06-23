import React from 'react';
import headshot from "./headshot.jpg";
import Image from 'react-bootstrap/Image'
import './Home.css';

export default function Home(){
  return(
    <div className="home">
      <div className="image-container">
        <div className="home-header">Gus Vroustouris</div>
        <Image src={headshot} fluid />
        <div className="home-footer">Address, Phone Number, Email</div>
      </div>
    </div>
  );
}
