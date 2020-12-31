/* eslint-disable sonarjs/no-duplicate-string */
import * as React from "react";
import { Grid, Drawer, useMediaQuery, IconButton } from "@material-ui/core";
import { useStyles } from "./useStyles";
import { ContactIcon } from "../ContactIcon/ContactIcon";
import { theme } from "../../lib/theme";
import CloseIcon from "@material-ui/icons/Close";

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
      : "/images/github-blue.png";
  const MailLogo =
    itemHover === Item.Mail ? "/images/gmail.png" : "/images/gmail-blue.png";
  const LinkedInLogo =
    itemHover === Item.LinkedIn
      ? "/images/linkedIn.png"
      : "/images/linkedIn-blue.png";
  const MessengerLogo =
    itemHover === Item.Messenger
      ? "/images/messenger.png"
      : "/images/messenger-blue.png";
  const SlackLogo =
    itemHover === Item.Slack ? "/images/slack.png" : "/images/slack-blue.png";
  const DiscordLogo =
    itemHover === Item.Discord
      ? "/images/discord.png"
      : "/images/discord-blue.png";

  const GithubBorder =
    itemHover === Item.Github ? "black" : theme.palette.primary.main;
  const MailBorder =
    itemHover === Item.Mail ? "#D54137" : theme.palette.primary.main;
  const LinkedInBorder =
    itemHover === Item.LinkedIn ? "#2174B3" : theme.palette.primary.main;
  const MessengerBorder =
    itemHover === Item.Messenger
      ? "linear-gradient(20deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)"
      : theme.palette.primary.main;
  const SlackBorder =
    itemHover === Item.Slack
      ? "linear-gradient(90deg, #41C5F0 10%, #3FB67D 30%, #ECB22D 60%, #E01E5A 100%)"
      : theme.palette.primary.main;
  const DiscordBorder =
    itemHover === Item.Discord ? "#8A9CFE" : theme.palette.primary.main;

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Drawer open={open} onClose={toggleOpen} anchor="right">
      <Grid
        container
        style={{ width: isSmallScreen ? "100vw" : 500, height: "100vh" }}
        direction="column"
        justify="space-between"
      >
        {isSmallScreen && (
          <Grid container justify="flex-end" className={classes.quit}>
            <IconButton onClick={toggleOpen}>
              <CloseIcon style={{ color: "white", fontSize: 30 }} />
            </IconButton>
          </Grid>
        )}
        <Grid className={classes.content}>
          <Grid item className={classes.imageContainer}>
            <img
              src="/images/map-france-black.png"
              alt="map"
              style={{ width: "100%" }}
            />
            <Grid
              container
              className={classes.profileContainer}
              justify="center"
            >
              <Grid item className={classes.profil}>
                <img
                  alt="profile"
                  src="/images/profile-picture.jpeg"
                  width="200"
                  style={{
                    borderRadius: "50%",
                    border: "4px solid white",
                    boxShadow: "rgb(0,0,0,0.5) 0px 0px 10px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.contactInfos}>
            <Grid container className={classes.titleContainer}>
              <div className={classes.title}>Fullstack </div>
              <div className={classes.title}> Web </div>
              <div className={classes.title}> Developer</div>
            </Grid>
            <Grid
              container
              justify="space-between"
              direction="column"
              className={classes.infoContainer}
            >
              <div className={classes.info}>yolan.pibrac@gmail.com</div>
              <div className={classes.info}>+33 6 14 74 29 26</div>
              <div className={classes.info}>11 rue Valadon 75 007 Paris</div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container className={classes.bottom}>
          <Grid container spacing={1}>
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
