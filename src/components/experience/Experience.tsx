import React from 'react';
import experiences from "./Experience.json";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import './Experience.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
  height: 0,
  paddingTop: '56.25%', // 16:9
  },
});

export interface IExperience {
  id: string;
  image: string;
}

export default function Experience(){
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  let experienceCards = experiences.map((experience): JSX.Element => {
      return(
        <Card key={experience.id} className="experience-card">
          <CardActionArea className="experience-action-area" onClick={()=>{console.log("FUCK");}}>
            <CardMedia
              className={classes.media}
              image={experience.image}
              title="Paella dish"
            />
            {experience.id}
          </CardActionArea>
        </Card>
      );
  });

  return(
    <div className="experience">
      <div className="experience-container">
        {experienceCards}
      </div>
    </div>
  )
}
