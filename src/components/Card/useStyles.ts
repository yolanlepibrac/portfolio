/* eslint-disable sonarjs/no-duplicate-string */
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  zoomContainer: {
    display: "inline-block",
    position: "relative",
  },
  zoomContainerAnimate: {
    display: "inline-block",
    position: "relative",
    zIndex: 10,
    animation: "zoom 1000ms ease-in 300ms forwards",
  },
  opacityContainer: {},
  opacityContainerAnimate: {
    animation: "opacity 300ms ease-in 1000ms forwards",
  },
  spinContainer: {
    transform: "rotate(90deg)",
    animation: "unSpin 300ms linear forwards",
  },
  spinContainerAnimate: {
    animation: "spin 300ms linear forwards",
  },
  container: {
    borderRadius: "1em",
    backgroundColor: "white",
    boxShadow:
      "rgba(50, 50, 50, 0.11) 0px 4px 6px, rgba(0, 0, 0, 0.08) 0px 1px 3px",
    border: "1px solid white",
    margin: theme.spacing(2),
    overflow: "hidden",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      cursor: "pointer",
      "& $whiteLogo": {
        opacity: 1,
      },
      "& $techno": {
        color: theme.palette.primary.main,
      },
    },
  },
  cardContainer: {
    width: 320,
    height: 500,
    transition: "all 500ms ease 0s;",
    overflow: "hidden",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  headContainer: {
    transition: "all 500ms ease 0s",
    height: 250,
  },
  headContainerRotate: {
    transition: "all 500ms ease 0s",
    height: 250,
    opacity: 0,
  },
  headContent: { margin: theme.spacing(5), textAlign: "left" },
  bottomContainer: {
    margin: "0rem -2rem -1rem",
    position: "relative",
    transform: "rotate(-90deg)",
    animation: "unSpin 300ms linear forwards",
  },
  bottomContainerRotate: {
    margin: "0rem -2rem -1rem",
    position: "relative",
    animation: "spinInverse 300ms linear forwards",
  },
  title: {
    fontSize: 22,
  },
  subTitle: {
    color: "rgba(120,120,120,1)",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    marginTop: theme.spacing(4),
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
  coloredLogo: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  whiteLogo: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    opacity: 0,
    zIndex: 2,
    transition: "all 500ms ease 0s",
  },
  techno: {
    position: "absolute",
    bottom: -theme.spacing(2),
    left: 0,
    color: "white",
    transition: "all 500ms ease 0s;",
  },
  subTitleContainer: {
    position: "relative",
  },
}));
