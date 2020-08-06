import React from "react";
import "./About.css"

const About = () => {
  let paragraph = "I am a Software Engineer currently working for Discover Financial Services. Primarily a backend developer, I have created multiple full stack applications over the past year; some of which are featured in my portfolio. I always seek to challenge myself and grow by finding solutions to problems with the most cutting edge tools available. I have a drive to understand more about machine learning.";

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-container">
          <img className="about-headshot" src={"/static/images/headshot.jpg"} alt="headshot"/>
        </div>
        <div className="about-paragraph">
          {paragraph}
        </div>
      </div>
      <div className="about-experience">
        <div className="experience-title">
          Experience
        </div>
        <div className="experience-content">
          <div className="experience-bubble">
            <div className="bubble-text">
              Discover
            </div>
          </div>
          <div className="time-range">
            June 2019 - Present
          </div>
          <div className="job-title">
            Software Engineer
          </div>
          <div className="time-range">
            May 2018 - Aug 2018
          </div>
          <div className="job-title">
            Software Engineer Intern
          </div>
        </div>
        <div className="experience-content">
          <div className="experience-bubble">
            <div className="bubble-text">
              Oqullo
            </div>
          </div>
          <div className="time-range">
            Feb 2020 - May 2020
          </div>
          <div className="job-title">
            Software Engineer Contractor
          </div>
        </div>
        <div className="experience-content">
          <div className="experience-bubble">
            <div className="bubble-text">
              Neighborhoods
            </div>
          </div>
          <div className="time-range">
            June 2017 - Aug 2017
          </div>
          <div className="job-title">
            Software Engineer Intern
          </div>
        </div>
        <div className="experience-content">
          <div className="experience-bubble">
            <div className="bubble-text">
              DoIT
            </div>
          </div>
          <div className="time-range">
            July 2014 - Sept 2014
          </div>
          <div className="job-title">
            Technology Intern
          </div>
        </div>
      </div>
      <div className="about-skills">
        <div className="skills-title">Skills</div>
          <div className="skill-list">
            <div className="skill-item">Java Spring Boot</div>
            <div className="skill-item">Cloud Computing</div>
            <div className="skill-item">Typescript & React</div>
            <div className="skill-item">Jenkins (CI/CD automation)</div>
            <div className="skill-item">Cucumber Test Scripts</div>
            <div className="skill-item">User Story Estimation and Distribution</div>
            <div className="skill-item">Public Speaking and Presentations</div>
            <div className="skill-item">NodeJS</div>
            <div className="skill-item">Databases (MongoDB/Redis/MySQL)</div>
            <div className="skill-item">Making Friends</div>
          </div>
      </div>
    </div>
  );
};

export default About;
