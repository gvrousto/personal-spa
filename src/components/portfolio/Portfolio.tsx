import React from "react";
import "./Portfolio.css";
import experiences from "./Experience.json";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom";

export interface IExperience {
  id: string;
  image: string;
}

const Portfolio = () => {
  let experienceCards = experiences.map((experience): JSX.Element => {
      let experiencePath = `/description/${experience.id}`;
      return(
        <Link className="experience-link" to={experiencePath}>
          <div key={experience.id} className="experience-card">
            <div className="experience-image-container">
              <img
                className="experience-image"
                src={experience.image}
              />
            </div>
              <div className="experience-text">
                {experience.id}
              </div>
          </div>
        </Link>
      );
  });
  return (
    <div className="portfolio-container">
      <div className="portfolio-text">I am a Full Stack Software Engineer</div>
      <div className="experience-container">{experienceCards}</div>
    </div>
  )
};

export default Portfolio;
