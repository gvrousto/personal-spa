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
        <div className="experience-container">
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
        </div>
      );
  });
  return (
    <div className="portfolio-container">
      {experienceCards}
    </div>
  )
};
// <div className="experience-container">{experienceCards}</div>
//       <Link className="experience-link" to={experiencePath}>
//         <div key={experience.id} className="experience-card">
//           <div className="experience-image-container">
//             <img
//               className="experience-image"
//               src={experience.image}
//               alt={experience.id}
//             />
//           </div>
//             <div className="experience-text">
//               {experience.id}
//             </div>
//         </div>
//       </Link>
export default Portfolio;
