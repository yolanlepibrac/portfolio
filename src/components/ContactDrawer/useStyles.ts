import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    cursor: "pointer",
  },
  contact: {
    background:
      "linear-gradient(81.84deg, #0099ff -9.4%, #a033ff 51.57%, #ff5280 84.07%, #ff7061 90.59%)",
    "-webkit-background-clip": "text",
    color: "transparent",
    padding: theme.spacing(1),
    textAlign: "center",
    width: "100%",
    fontSize: 28,
    fontFamily: "Calibre",
    textTransform: "uppercase",
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
}));
