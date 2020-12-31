import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  quit: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 11,
  },
  button: {
    cursor: "pointer",
    color: theme.palette.primary.main,
    fontSize: 26,
  },
}));
