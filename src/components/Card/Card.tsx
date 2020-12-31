import { Grid, Typography } from "@material-ui/core";
import * as React from "react";
import { Project } from "../../constants/projects";
import { useStyles } from "./useStyles";
import classnames from "classnames";
import { Popup } from "../Popup/Popup";

interface CardProps {
  project: Project;
}

export const Card: React.FunctionComponent<CardProps> = ({ project }) => {
  const classes = useStyles();
  const [animationRunning, setAnimationRunning] = React.useState(false);
  const [popupOpen, setPopupOpen] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      if (animationRunning) {
        setAnimationRunning(false);
      }
    }, 1300);
    setTimeout(() => {
      if (animationRunning) {
        setPopupOpen(true);
      }
    }, 1000);
  }, [animationRunning]);

  const handleOpenCardAnimation = () => {
    if (!animationRunning) {
      setAnimationRunning((value) => !value);
    }
  };

  return (
    <>
      {popupOpen && <Popup close={() => setPopupOpen(false)} />}
      <div
        className={
          animationRunning
            ? classes.zoomContainerAnimate
            : classes.zoomContainer
        }
      >
        <div
          className={
            animationRunning
              ? classes.opacityContainerAnimate
              : classes.opacityContainer
          }
        >
          <div
            className={
              animationRunning
                ? classes.spinContainerAnimate
                : classes.spinContainer
            }
          >
            <div className={classes.container}>
              <div
                className={classes.cardContainer}
                onClick={handleOpenCardAnimation}
              >
                <div className={classes.cardContent}>
                  <div
                    className={
                      animationRunning
                        ? classes.headContainerRotate
                        : classes.headContainer
                    }
                  >
                    <div className={classes.headContent}>
                      <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                      >
                        <Typography variant="h6" className={classes.title}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2">{project.date}</Typography>
                      </Grid>
                      <Grid className={classes.subTitleContainer}>
                        <Typography
                          variant="subtitle1"
                          className={classes.subTitle}
                        >
                          {project.subtitle}
                        </Typography>
                        <Typography
                          variant="caption"
                          className={classes.techno}
                        >
                          {project.techno?.join(" - ")}
                        </Typography>
                      </Grid>

                      <Typography
                        variant="body1"
                        align="justify"
                        className={classes.description}
                      >
                        <span className={classes.flyingText}>
                          {project.description}
                        </span>
                      </Typography>
                    </div>
                  </div>
                  {project.logo && (
                    <div
                      className={
                        animationRunning
                          ? classes.bottomContainerRotate
                          : classes.bottomContainer
                      }
                    >
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
