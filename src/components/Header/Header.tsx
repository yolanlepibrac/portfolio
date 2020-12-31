import * as React from "react";
import { Grid, Button, Fab, Drawer, useMediaQuery } from "@material-ui/core";
import { theme } from "../../lib/theme";
import { Tabs } from "../Box/Box";
import HomeIcon from "@material-ui/icons/Home";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import CodeIcon from "@material-ui/icons/Code";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import PersonIcon from "@material-ui/icons/Person";
import { ContactDrawer } from "../ContactDrawer/ContactDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { MenuDrawer } from "../MenuDrawer/MenuDrawer";

interface HeaderProps {
  setCurrentTab: (tab: Tabs) => void;
  currentTab: Tabs;
  setHoverTab: (tab: Tabs | null) => void;
}
export const Header: React.FunctionComponent<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  setHoverTab,
}) => {
  const [contactOpen, setContactOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleContactOpen = () => {
    setContactOpen((prev) => !prev);
  };
  const toggleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      style={{
        position: "absolute",
        top: 0,
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px",
        padding: theme.spacing(1),
        zIndex: 1,
      }}
      justify="space-between"
    >
      {!isSmallScreen && (
        <>
          <Grid item container spacing={2} xs>
            <Grid item>
              <Button
                color="primary"
                variant={currentTab === Tabs.Home ? "outlined" : "contained"}
                onMouseEnter={() => setHoverTab(Tabs.Home)}
                onMouseLeave={() => setHoverTab(null)}
                startIcon={<HomeIcon />}
              >
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant={
                  currentTab === Tabs.Projects ? "outlined" : "contained"
                }
                onMouseEnter={() => setHoverTab(Tabs.Projects)}
                onMouseLeave={() => setHoverTab(null)}
                startIcon={<ImportContactsIcon />}
              >
                WORK
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant={currentTab === Tabs.Dev ? "outlined" : "contained"}
                onMouseEnter={() => setHoverTab(Tabs.Dev)}
                onMouseLeave={() => setHoverTab(null)}
                startIcon={<CodeIcon />}
              >
                DEV
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant={currentTab === Tabs.Cv ? "outlined" : "contained"}
                onClick={() => setCurrentTab(Tabs.Cv)}
                onMouseEnter={() => setHoverTab(Tabs.Cv)}
                onMouseLeave={() => setHoverTab(null)}
                startIcon={<InsertDriveFileIcon />}
              >
                C.V.
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={1} justify="flex-end">
            <Fab
              color="primary"
              aria-label="add"
              size="small"
              onClick={toggleContactOpen}
            >
              <PersonIcon />
            </Fab>
            <ContactDrawer open={contactOpen} toggleOpen={toggleContactOpen} />
          </Grid>
        </>
      )}
      {isSmallScreen && (
        <Grid item container xs={12} justify="flex-end">
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            onClick={toggleMenuOpen}
          >
            <MenuIcon />
          </Fab>
          <MenuDrawer
            open={menuOpen}
            toggleOpen={toggleMenuOpen}
            setCurrentTab={(tab: Tabs) => setCurrentTab(tab)}
          />
        </Grid>
      )}
    </Grid>
  );
};
