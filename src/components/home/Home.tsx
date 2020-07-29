import React from 'react';
import headshot from "./headshot.jpg";
import Image from 'react-bootstrap/Image';
import {BarChart} from "react-d3-components";
import './Home.css';

var data = [{
    label: 'somethingA',
    values: [{x: 'React', y: 10}, {x: 'Angular', y: 7}, {x: 'Java', y: 9}]
}];


export default function Home(){
  return(
    <div className="about-container">
      <div className="about-header">
        <div className="header-name">Gus Vroustouris</div>
        <Image className="header-image" src={headshot} fluid />
        <div className="header-info">Address, Phone Number, Email</div>
      </div>
      <div className="about-content">
        <div className="about-blurb">
          I am a student at Purdue University majoring in Computer Science and
          minoring in Sociology. I have worked in AGILE based development teams
          for the past two summers programming front end and back end applications.
          I have a strong backbone in JAVA, Python, and C programming. My ability
          to synthesize and communicate information to someone who knows little to
          nothing about a subject gives me a great advantage working in cross functional teams.
        </div>
        <div className="about-skills">
          <div>This is how i will show my skills</div>
          <div>I do java, python, react, angular, node. all that shit bro</div>
          <div> Here is a fun graphic that we can potentially use to showcase that skill </div>
          <BarChart
            data={data}
            width={300}
            height={300}
            margin={{top: 10, bottom: 50, left: 50, right: 10}}
          />
        </div>
      </div>
    </div>
  );
}
