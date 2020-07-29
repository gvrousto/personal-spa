import React from "react";
import {Image} from "react-bootstrap";
import { useParams } from "react-router-dom";
import experiences from "../portfolio/Experience.json";
import "./Description.css";

interface DescriptionParams {
  experience: string;
}

const generateDescriptionContent = (experience: any): JSX.Element => {
  let descriptionContent = experience.contentGroups.map((contentGroup: any) => {
    return (
      <div className="content-group">
        <div className="content-text">{contentGroup.text[0]}</div>
        <div className="content-image"><img className="content-image"src={contentGroup.images[0]} /></div>
      </div>
    );
  });
  return descriptionContent;
};

export default function Desctiption(){
  let params = useParams<DescriptionParams>();
  console.log(params)
  let experience = experiences.filter((experience) => {
    return experience.id === params.experience;
  });
  console.log(experience);
  console.log(experience[0].image);
  return(
    <div className="description-container">
      <div className="description-header">
        <div>{params.experience}</div>
        <Image className="description-logo" src={experience[0].image} />
        <div>{experience[0].timeRange}</div>
      </div>
      <div className="description-content">
        Description content
        {generateDescriptionContent(experience[0])}
      </div>
    </div>
  );
}
