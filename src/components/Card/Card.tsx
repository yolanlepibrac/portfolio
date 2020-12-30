import { Grid, Typography } from "@material-ui/core";
import * as React from "react";
import { Project } from "../../constants/projects";
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
            <Grid container justify="space-between" alignItems="center">
              <Typography variant="h6" className={classes.title}>
                {project.title}
              </Typography>
              <Typography variant="body2">{project.date}</Typography>
            </Grid>
            <Grid className={classes.subTitleContainer}>
              <Typography variant="subtitle1" className={classes.subTitle}>
                {project.subtitle}
              </Typography>
              <Typography variant="caption" className={classes.techno}>
                {project.techno?.join(" - ")}
              </Typography>
            </Grid>

            <Typography
              variant="body1"
              align="justify"
              className={classes.description}
            >
              <span className={classes.flyingText}>{project.description}</span>
            </Typography>
          </div>
        </div>
        {project.logo && (
          <div className={classes.bottomContainer}>
            <div className={classes.coloredLogo}>
              <img
                style={{ height: "auto", width: "100%" }}
                src={project.logo}
              />
            </div>
            {project.logoWhite && (
              <div className={classes.whiteLogo}>
                <img
                  style={{ height: "auto", width: "100%" }}
                  src={project.logoWhite}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
