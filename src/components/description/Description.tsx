import React from "react";
import {Image} from "react-bootstrap";
import { useParams } from "react-router-dom";
import experiences from "../portfolio/Experience.json";
import "./Description.css";

interface DescriptionParams {
  experience: string;
}

const generateDescriptionImageCarousel = (images: string[]): JSX.Element | null => {
  if(images.length > 0){
    return (
      <div className="description-image-container">
        Where images might go
      </div>
    );
  } else {
    return null;
  }
};

export default function Desctiption(){
  let params = useParams<DescriptionParams>();
  console.log(params)
  let experience = experiences.filter((experience) => {
    return experience.id === params.experience;
  })[0];
  console.log(experience);
  console.log(experience.image);
  return(
    <div className="description-container">
      <div className="description-header">
        <div className="description-header-image">
        <img
          className="experience-image"
          src={experience.image}
          alt={experience.id}
        />
        </div>
        <div className="description-header-text">
          <div>{experience.id}</div>
          <div>{experience.timeRange}</div>
          <div>{experience.title}</div>
        </div>
      </div>
      <div className="description-body">
        <div className="description-content">
          <div className="description-title">his is my trying out a very long title that I might right to give background</div>
          <div className="description-item">
            Tthis is he paragraph underneath the title
            Tthis is he paragraph underneath the title
            Tthis is he paragraph underneath the title
            Tthis is he paragraph underneath the title
            Tthis is he paragraph underneath the title
          </div>
          <div className="description-title">Another P Title</div>
          <div className="description-item">Tthis is he paragraph underneath the title</div>
          <div className="description-title">Another P Title</div>
          <div className="description-item">Cynicism Cynicism Cynicism Cynicism Cynicism Cynicism</div>
        </div>
        {generateDescriptionImageCarousel(experience.imageContent)}
      </div>
    </div>
  );
}

// <div className="description-container">
//   <div className="description-header">
//     <div>{params.experience}</div>
//     <Image className="description-logo" src={experience[0].image} />
//     <div>{experience[0].timeRange}</div>
//   </div>
//   <div className="description-content">
//     Description content
//     {generateDescriptionContent(experience[0])}
//   </div>
// </div>
