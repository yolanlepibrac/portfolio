import { Grid } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./useStyles";

interface ContactIconProps {
  children?: React.ReactNode;
  setHover: () => void;
  setLeave: () => void;
  imageUrl?: string;
}
export const ContactIcon: React.FunctionComponent<ContactIconProps> = ({
  setHover,
  setLeave,
  imageUrl,
}) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={2}
      container
      justify="center"
      className={classes.iconButton}
      onMouseEnter={() => setHover()}
      onMouseLeave={() => setLeave()}
    >
      <img src={imageUrl} alt="logo" width="30" />
    </Grid>
  );
};
