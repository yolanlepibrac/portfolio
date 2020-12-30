import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    cursor: "pointer",
  },
  contact: {
    background: `linear-gradient(81.84deg, ${theme.palette.primary.main} 0%, #008DFF 50%, ${theme.palette.primary.main} 100%)`,
    "-webkit-background-clip": "text",
    color: "transparent",
    padding: theme.spacing(1),
    width: "100%",
    fontSize: 30,
    fontFamily: "Secular One",
  },
  contactLinksContainer: {
    padding: theme.spacing(1),
  },
  imageContainer: {
    position: "relative",
  },
  profileContainer: {
    position: "absolute",
    bottom: -100,
    left: 0,
    height: 200,
  },
  profil: {
    height: 200,
    width: 200,
  },
  titleContainer: {
    marginTop: 80,
  },
  title: {
    fontSize: 80,
    textAlign: "left",
    width: "100%",
    lineHeight: "70px",
    textTransform: "uppercase",
  },
  infoContainer: {
    marginTop: 30,
  },
  info: {
    fontSize: 30,
    textAlign: "center",
  },
}));
