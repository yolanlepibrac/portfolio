import * as React from "react";
import { Grid, Button, Fab, Drawer } from "@material-ui/core";
import { theme } from "../../lib/theme";
import { Tabs } from "../Box/Box";
import HomeIcon from "@material-ui/icons/Home";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import CodeIcon from "@material-ui/icons/Code";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import PersonIcon from "@material-ui/icons/Person";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Icon, InlineIcon } from "@iconify/react";
import facebookMessenger from "@iconify/icons-mdi/facebook-messenger";
import slackIcon from "@iconify/icons-mdi/slack";
import discordIcon from "@iconify/icons-mdi/discord";

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
  const toggleContactOpen = () => {
    setContactOpen((prev) => !prev);
  };
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
            variant={currentTab === Tabs.Projects ? "outlined" : "contained"}
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
      <Grid item container xs justify="flex-end">
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          onClick={toggleContactOpen}
        >
          <PersonIcon />
        </Fab>
        <Drawer open={contactOpen} onClose={toggleContactOpen} anchor="right">
          <Grid container style={{ width: 400 }}>
            Contacts
            <Grid item container style={{ fontSize: 30 }}>
              <Grid item xs={2} container justify="center">
                <GitHubIcon color="primary" fontSize="inherit" />
              </Grid>
              <Grid item xs={2} container justify="center">
                <MailIcon color="primary" fontSize="inherit" />
              </Grid>
              <Grid item xs={2} container justify="center">
                <LinkedInIcon color="primary" fontSize="inherit" />
              </Grid>
              <Grid item xs={2} container justify="center">
                <Icon
                  icon={facebookMessenger}
                  color={theme.palette.primary.main}
                  width="30"
                  height="30"
                />
              </Grid>
              <Grid item xs={2} container justify="center">
                <Icon
                  icon={slackIcon}
                  color={theme.palette.primary.main}
                  width="30"
                  height="30"
                />
              </Grid>
              <Grid item xs={2} container justify="center">
                <Icon
                  icon={discordIcon}
                  color={theme.palette.primary.main}
                  width="30"
                  height="30"
                />
              </Grid>
            </Grid>
          </Grid>
        </Drawer>
      </Grid>
    </Grid>
  );
};
