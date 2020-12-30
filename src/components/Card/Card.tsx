import classes from "*.module.css";
import { Typography } from "@material-ui/core";
import * as React from "react";
import { Project } from "../../constantes/projects";
import { useStyles } from "./useStyles";

interface CardProps {
  project: Project;
}

export const Card: React.FunctionComponent<CardProps> = ({ project }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardContent}>
        <div className={classes.headContainer}>
          <div className={classes.headContent}>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              {project.date}
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              className={classes.description}
            >
              <span className={classes.flyingText}>{project.description}</span>
            </Typography>
          </div>
        </div>
        <div className={classes.bottomContainer}>
          <img
            style={{ height: "auto", width: "100%" }}
            src="/images/sejongs-cup.png"
          />
        </div>
      </div>
    </div>
  );
};
