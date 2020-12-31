import { Drawer, Grid, IconButton } from "@material-ui/core";
import * as React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./useStyles";
import { Tabs } from "../Box/Box";

interface MenuDrawerProps {
  open: boolean;
  toggleOpen: () => void;
  setCurrentTab: (tab: Tabs) => void;
}

export const MenuDrawer: React.FunctionComponent<MenuDrawerProps> = ({
  open,
  toggleOpen,
  setCurrentTab,
}) => {
  const classes = useStyles();
  const setTabAndClose = (tab: Tabs) => {
    setCurrentTab(tab);
    toggleOpen();
  };
  return (
    <Drawer open={open} onClose={toggleOpen} anchor="right">
      <Grid container justify="flex-end" className={classes.quit}>
        <IconButton onClick={toggleOpen}>
          <CloseIcon color="primary" />
        </IconButton>
      </Grid>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid
            item
            onClick={() => setTabAndClose(Tabs.Home)}
            className={classes.button}
          >
            HOME
          </Grid>
          <Grid
            item
            onClick={() => setTabAndClose(Tabs.Projects)}
            className={classes.button}
          >
            PROJECTS
          </Grid>
          <Grid
            item
            onClick={() => setTabAndClose(Tabs.Dev)}
            className={classes.button}
          >
            DEV
          </Grid>
          <Grid
            item
            onClick={() => setTabAndClose(Tabs.Contact)}
            className={classes.button}
          >
            CONTACT
          </Grid>
          <Grid
            item
            onClick={() => setTabAndClose(Tabs.Cv)}
            className={classes.button}
          >
            CV
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};
