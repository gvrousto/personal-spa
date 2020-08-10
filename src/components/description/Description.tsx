import React from "react";
import { useParams } from "react-router-dom";
import experiences from "../portfolio/Experience.json";
import "./Description.css";
import ImageGallery from 'react-image-gallery';

interface DescriptionParams {
  experience: string;
}

const generateDescriptionImageCarousel = (images: any[]): JSX.Element | null => {
  if(images.length > 0){
    return (
      <ImageGallery additionalClass="image-carousel" items={images}/>
    );
  } else {
    return null;
  }
};

export default function Desctiption(){
  let params = useParams<DescriptionParams>();

  let experience = experiences.filter((experience) => {
    return experience.id === params.experience;
  })[0];
  let paragraphs = experience.paragraphs.map((paragraph)=>{
    return(
      <div>
        <div className="description-title">{paragraph.title}</div>
        <div className="description-item">{paragraph.paragraph}</div>
      </div>
    );
  });
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
          <div className="paragraphs-container">
          {paragraphs}
          </div>
          <div className="carousel-container">
            {generateDescriptionImageCarousel(experience.imageContent)}
          </div>
        </div>
      </div>
    </div>
  );
}
