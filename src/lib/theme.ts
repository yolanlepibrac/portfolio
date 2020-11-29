/* eslint-disable @typescript-eslint/no-empty-interface */
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { themeWithPalette } from "./theme/palette";
import { mixins } from "./theme/mixins";
import { MuiStepConnector } from "./theme/muiStepConnector";
import { MuiFilledInput } from "./theme/muiFilledInput";
import { LabComponentNameToClassKey } from "@material-ui/lab/themeAugmentation";
declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey extends LabComponentNameToClassKey {}
}

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: themeWithPalette.palette,
    mixins,
    overrides: {
      MuiStepConnector,
      MuiFilledInput,
    },
  })
);
