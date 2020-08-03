import React from "react";
import { useParams } from "react-router-dom";
import experiences from "../portfolio/Experience.json";
import "./Description.css";
import ImageGallery from 'react-image-gallery';

interface DescriptionParams {
  experience: string;
}

const generateDescriptionImageCarousel = (images: string[]): JSX.Element | null => {
  if(images.length > 0){
    return (
        <ImageGallery additionalClass="image-carousel" items={[
          {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
          },
          {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
          },
          {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
          },
        ]}/>
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
          <div className="description-item">Cartooons Cartooons Cartooons Cartooons Cartooons</div>
        </div>
        <div>
          {generateDescriptionImageCarousel(experience.imageContent)}
        </div>
      </div>
    </div>
  );
}
