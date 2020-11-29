import { createMuiTheme } from "@material-ui/core";
import createMixins from "@material-ui/core/styles/createMixins";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

declare module "@material-ui/core/styles/createMixins" {
  interface Mixins {
    drawerMixin: {
      width: NonNullable<CSSProperties["width"]>;
    };
    toolbarHeight: NonNullable<CSSProperties["height"]>;
    smallIconContainerWidth: NonNullable<CSSProperties["width"]>;
  }
}

const { breakpoints, spacing } = createMuiTheme();
export const mixins = createMixins(breakpoints, spacing, {
  drawerMixin: {
    width: 256,
  },
  toolbarHeight: 128,
  smallIconContainerWidth: 48,
});
