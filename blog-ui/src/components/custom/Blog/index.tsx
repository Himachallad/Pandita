import { IconButton, Paper, Typography, useTheme } from "@material-ui/core";
import React from "react";
import FacebookIcon from "../../../icons/socialIcons/fb";
import InstaIcon from "../../../icons/socialIcons/insta";
import LinkedInIcon from "../../../icons/socialIcons/linkedin";
import TwitterIcon from "../../../icons/socialIcons/twitter";
import styles from "./index.module.scss";

const Blog = ({ blog }) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.type === "dark";
  return (
    <Paper elevation={0} square>
      <div className={styles.blogContainer}>
        <div className={styles.blogImgContainer}>
          <img className={styles.blogImage} src={blog.source} />
        </div>
        <div className={styles.blogTitleContainer}>
          <div className={styles.blogTitle}>
            <div className={styles.blogTitleText}>
              <Typography
                color={isDarkTheme ? "secondary" : "primary"}
                variant="subtitle2"
              >
                {blog.tag.toUpperCase()}
              </Typography>
            </div>
            <div className={styles.socialLinks}>
              <IconButton size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton size="small">
                <InstaIcon />
              </IconButton>
              <IconButton size="small">
                <LinkedInIcon />
              </IconButton>
              <IconButton size="small">
                <TwitterIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className={styles.blogDesc}>
          <Typography variant="body1">{blog.title}</Typography>
        </div>
        <div className={styles.blogDetails}>
          <Typography
            color={isDarkTheme ? "secondary" : "primary"}
            variant="subtitle2"
          >{`${blog.author} / ${blog.date}`}</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default Blog;
