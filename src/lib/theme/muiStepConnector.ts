import { themeWithPalette } from "./palette";
import { grey } from "@material-ui/core/colors";
import { Overrides } from "@material-ui/core/styles/overrides";

export const MuiStepConnector: Overrides["MuiStepConnector"] = {
  alternativeLabel: {
    top: 18,
    height: 5,
    border: 0,
    backgroundColor: grey[100],
    borderRadius: 1,
  },
  active: {
    "& $line": {
      borderColor: themeWithPalette.palette.primary.main,
    },
    backgroundColor: themeWithPalette.palette.primary.light,
  },
  completed: {
    "& $line": {
      borderColor: themeWithPalette.palette.primary.main,
    },
    backgroundColor: themeWithPalette.palette.primary.light,
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
};
