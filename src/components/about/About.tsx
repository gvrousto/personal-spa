import React from "react";
import experiences from "../portfolio/Experience.json";
import "./About.css"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-container">
          <img className="about-headshot" src={"/static/images/headshot.jpg"} />
        </div>
        <div className="about-paragraph">
          This is a meaningful paragraph. Meant to show case how thoughtful i can be when writing. F This is a meaningful paragraph. Meant to show case how thoughtful i can be when writing.
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
            2019-2020
          </div>
          <div className="job-title">
            Software Engineer
          </div>
        </div>
        <div className="experience-content">
          <div className="experience-bubble">
            <div className="bubble-text">
              Oqullo
            </div>
          </div>
          <div className="time-range">
            2019-2020
          </div>
          <div className="job-title">
            Software Engineer
          </div>
        </div>
        <div className="experience-content">
          <div className="experience-bubble">
            <div className="bubble-text">
              Neighborhoods
            </div>
          </div>
          <div className="time-range">
            2019-2020
          </div>
          <div className="job-title">
            Software Engineer
          </div>
        </div>
        <div className="experience-content">
          <div className="experience-bubble">
            <div className="bubble-text">
              DoIT
            </div>
          </div>
          <div className="time-range">
            2019-2020
          </div>
          <div className="job-title">
            Software Engineer
          </div>
        </div>
      </div>
      <div className="about-skills">
        <div className="skills-title">Skills</div>
          <div className="skill-list">
            <div className="skill-item">React</div>
            <div className="skill-item">Java Spring</div>
            <div className="skill-item">Node</div>
            <div className="skill-item">C</div>
            <div className="skill-item">Making Friends</div>
          </div>
      </div>
    </div>
  );
};

export default About;
