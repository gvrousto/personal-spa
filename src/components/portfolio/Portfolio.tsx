import React from "react";
import "./Portfolio.css";
import experiences from "./Experience.json";
import { Link } from "react-router-dom";

export interface IExperience {
  id: string;
  image: string;
}

const Portfolio = () => {
  let experienceCards = experiences.map((experience): JSX.Element => {
      let experiencePath = `/description/${experience.id}`;
      return(
        <Link className="experience-container" to={experiencePath}>
          <div className="experience-image-container">
            <img
              className="experience-image"
              src={experience.image}
              alt={experience.id}
            />
          </div>
            <div className="experience-text">
              {experience.id}
            </div>
        </Link>
      );
  });
  return (
    <div className="portfolio-container">
      {experienceCards}
    </div>
  )
};
export default Portfolio;
