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

  const GithubBorder = itemHover === Item.Github ? "black" : "rgba(0,0,0,0.7)";
  const MailBorder = itemHover === Item.Mail ? "#D54137" : "rgba(0,0,0,0.7)";
  const LinkedInBorder =
    itemHover === Item.LinkedIn ? "#2174B3" : "rgba(0,0,0,0.7)";
  const MessengerBorder =
    itemHover === Item.Messenger
      ? "linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)"
      : "rgba(0,0,0,0.7)";
  const SlackBorder = itemHover === Item.Slack ? "blue" : "rgba(0,0,0,0.7)";
  const DiscordBorder =
    itemHover === Item.Discord ? "#8A9CFE" : "rgba(0,0,0,0.7)";

  return (
    <Drawer open={open} onClose={toggleOpen} anchor="right">
      <Grid
        container
        style={{ width: 600, height: "100vh", padding: 12 }}
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
        <Grid item>
          <Grid container spacing={2}>
            <ContactIcon
              setHover={() => setItemHover(Item.Github)}
              setLeave={() => setItemHover(null)}
              imageUrl={GithubLogo}
              borderColor={GithubBorder}
            />
            <ContactIcon
              setHover={() => setItemHover(Item.Mail)}
              setLeave={() => setItemHover(null)}
              imageUrl={MailLogo}
              borderColor={MailBorder}
            />
            <ContactIcon
              setHover={() => setItemHover(Item.LinkedIn)}
              setLeave={() => setItemHover(null)}
              imageUrl={LinkedInLogo}
              borderColor={LinkedInBorder}
            />
            <ContactIcon
              setHover={() => setItemHover(Item.Messenger)}
              setLeave={() => setItemHover(null)}
              imageUrl={MessengerLogo}
              borderColor={MessengerBorder}
            />
            <ContactIcon
              setHover={() => setItemHover(Item.Slack)}
              setLeave={() => setItemHover(null)}
              imageUrl={SlackLogo}
              borderColor={SlackBorder}
            />
            <ContactIcon
              setHover={() => setItemHover(Item.Discord)}
              setLeave={() => setItemHover(null)}
              imageUrl={DiscordLogo}
              borderColor={DiscordBorder}
            />
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};
