import { IconButton, makeStyles, Typography, useTheme } from "@material-ui/core";
import React from "react";
import FacebookIcon from "../../../icons/socialIcons/fb";
import InstaIcon from "../../../icons/socialIcons/insta";
import LinkedInIcon from "../../../icons/socialIcons/linkedin";
import TwitterIcon from "../../../icons/socialIcons/twitter";
import styles from './index.module.scss';

const useStyles = makeStyles({
  footer: {
    background: (props: any) => props.themeType === "dark" ? "#474747" : "#f5eded"
  },
});

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles({themeType: theme?.palette?.type});
  return (
    <>
      <div className={`${classes.footer} ${styles.footer}`}>
        <Typography variant="body1">
          © 2021 Himachallad – Created by: Nikhil Pathania
        </Typography>
        <div>
          <IconButton size="medium">
            <FacebookIcon />
          </IconButton>
          <IconButton size="medium">
            <InstaIcon />
          </IconButton>
          <IconButton size="medium">
            <LinkedInIcon />
          </IconButton>
          <IconButton size="medium">
            <TwitterIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Footer;
