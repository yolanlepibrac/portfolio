import { grey } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";

const palette = {
  background: {
    default: grey[50],
  },
  primary: {
    main: "#5bcf8f",
    contrastText: "#fff",
  },
  secondary: {
    main: "#0f89f1",
  },
  info: {
    main: "#fbc02d",
  },
};

export const themeWithPalette = createMuiTheme({
  palette,
});
