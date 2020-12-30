/* eslint-disable sonarjs/no-duplicate-string */
import * as React from "react";
import { Grid, Drawer } from "@material-ui/core";
import { useStyles } from "./useStyles";
import { ContactIcon } from "../ContactIcon/ContactIcon";

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
      ? "/images/github.png"
      : "/images/github-white.png";

  const MailLogo =
    itemHover === Item.Mail ? "/images/gmail.png" : "/images/gmail-white.png";

  const LinkedInLogo =
    itemHover === Item.LinkedIn
      ? "/images/linkedIn.png"
      : "/images/linkedIn-white.png";

  const MessengerLogo =
    itemHover === Item.Messenger
      ? "/images/messenger.png"
      : "/images/messenger-white.png";

  const SlackLogo =
    itemHover === Item.Slack ? "/images/slack.png" : "/images/slack-white.png";

  const DiscordLogo =
    itemHover === Item.Discord
      ? "/images/discord.png"
      : "/images/discord-white.png";

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
            imageUrl={MailLogo}
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
