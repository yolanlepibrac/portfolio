import { grey } from "@material-ui/core/colors";
import { Overrides } from "@material-ui/core/styles/overrides";

export const MuiFilledInput: Overrides["MuiFilledInput"] = {
  root: {
    backgroundColor: grey[100],
  },
};
