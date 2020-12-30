import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "inline-block",
    width: 320,
    height: 500,
    borderRadius: "1em",
    backgroundColor: "white",
    boxShadow:
      "rgba(50, 50, 50, 0.11) 0px 4px 6px, rgba(0, 0, 0, 0.08) 0px 1px 3px",
    border: "1px solid white",
    margin: theme.spacing(2),
    transition: "all 500ms ease 0s",
    overflow: "hidden",
    "&:hover": {
      border: "1px solid rgb(56, 132, 255)",
      color: "rgb(56, 132, 255)",
      cursor: "pointer",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  headContainer: {
    height: 250,
  },
  headContent: { margin: theme.spacing(5), textAlign: "left" },
  bottomContainer: {
    margin: "0rem -2rem -1rem",
  },
  title: {},
  subTitle: {
    color: "rgba(120,120,120,1)",
  },
  description: {
    fontSize: 14,
    marginTop: theme.spacing(2),
    color: "black",
    position: "relative",
  },
  flyingText: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    background: "linear-gradient(white 0%, white 50%, rgba(255,255,255,0))",
  },
}));
