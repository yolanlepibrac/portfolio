import { Grid } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./useStyles";

interface ContactIconProps {
  children?: React.ReactNode;
  setHover: () => void;
  setLeave: () => void;
  imageUrl?: string;
  borderColor?: string;
}
export const ContactIcon: React.FunctionComponent<ContactIconProps> = ({
  setHover,
  setLeave,
  imageUrl,
  borderColor,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={2}>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
        className={classes.iconButton}
        onMouseEnter={() => setHover()}
        onMouseLeave={() => setLeave()}
        style={{ borderColor: borderColor }}
      >
        <img src={imageUrl} alt="logo" style={{ maxHeight: 26 }} />
      </Grid>
    </Grid>
  );
};
