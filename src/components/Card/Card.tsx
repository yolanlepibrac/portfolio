import classes from "*.module.css";
import { Typography } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./useStyles";

interface CardProps {
  project: number;
}

export const Card: React.FunctionComponent<CardProps> = ({ project }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardContent}>
        <div className={classes.headContainer}>
          <div className={classes.headContent}>
            <Typography variant="h6">ProjectName</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Place, Date
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              className={classes.description}
            >
              <span className={classes.flyingText}>
                Minim aute non ipsum aute id officia tempor elit minim quis
                cupidatat. Proident reprehenderit esse nisi cillum laboris
                commodo proident magna irure non proident nulla velit. Magna
                cupidatat dolor ex incididunt enim.
              </span>
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
