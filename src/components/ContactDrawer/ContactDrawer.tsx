import * as React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Icon } from "@iconify/react";
import facebookMessenger from "@iconify/icons-mdi/facebook-messenger";
import slackIcon from "@iconify/icons-mdi/slack";
import discordIcon from "@iconify/icons-mdi/discord";
import { Grid, Drawer } from "@material-ui/core";
import { useStyles } from "./useStyles";
import { theme } from "../../lib/theme";
import { ContactIcon } from "../ContactIcon/ContactIcon";
import { getJSDocEnumTag } from "typescript";
import { GifTwoTone } from "@material-ui/icons";

interface ContactDrawerProps {
  open: boolean;
  toggleOpen: () => void;
}

enum Item {
  Messenger = "Messenger",
  Github = "Github",
  Mail = "Mail",
  LinkedIn = "LinkedIn",
  Slack = "Slack",
  Discord = "Discord",
}

export const ContactDrawer: React.FunctionComponent<ContactDrawerProps> = ({
  open,
  toggleOpen,
}) => {
  const classes = useStyles();
  const [itemHover, setItemHover] = React.useState<Item | null>(null);
  const GithubLogo =
    itemHover === Item.Github
      ? "/images/messenger.png"
      : "/images/messenger-white.png";

  const MailLogo = itemHover === Item.Mail ? "red" : theme.palette.primary.main;

  const LinkedInLogo =
    itemHover === Item.LinkedIn ? "black" : theme.palette.primary.main;

  const MessengerLogo =
    itemHover === Item.Messenger
      ? "linear-gradient(#0088FF, #A033FF, #FF5C87)"
      : theme.palette.primary.main;

  const SlackLogo =
    itemHover === Item.Slack ? "red" : theme.palette.primary.main;

  const DiscordLogo =
    itemHover === Item.Discord ? "blue" : theme.palette.primary.main;

  return (
    <Drawer open={open} onClose={toggleOpen} anchor="right">
      <Grid
        container
        style={{ width: 400, height: "100vh", padding: 12 }}
        direction="column"
        justify="space-between"
      >
        <Grid item container className={classes.contact}>
          Contacts
          <br />
          email : yolan.pibrac@gmail.com
          <br />
          <br />
          phone : +33 6 14 74 29 26
          <br />
          <br />
          adress : 11 rue Valadon 75 007 Paris
          <br />
          <br />
        </Grid>
        <Grid item container style={{ fontSize: 30 }}>
          <ContactIcon
            setHover={() => setItemHover(Item.Github)}
            setLeave={() => setItemHover(null)}
            imageUrl={GithubLogo}
          />
          <ContactIcon
            setHover={() => setItemHover(Item.Mail)}
            setLeave={() => setItemHover(null)}
            imageUrl={DiscordLogo}
          />
          <ContactIcon
            setHover={() => setItemHover(Item.LinkedIn)}
            setLeave={() => setItemHover(null)}
            imageUrl={LinkedInLogo}
          />
          <ContactIcon
            setHover={() => setItemHover(Item.Messenger)}
            setLeave={() => setItemHover(null)}
            imageUrl={MessengerLogo}
          />
          <ContactIcon
            setHover={() => setItemHover(Item.Slack)}
            setLeave={() => setItemHover(null)}
            imageUrl={SlackLogo}
          />
          <ContactIcon
            setHover={() => setItemHover(Item.Discord)}
            setLeave={() => setItemHover(null)}
            imageUrl={DiscordLogo}
          />
        </Grid>
      </Grid>
    </Drawer>
  );
};
