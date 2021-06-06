import React from "react";
import BlogGridItem from "./custom/BlogItem";
import blogs from "../config/trendingBlogs.json";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      paddingLeft: theme.spacing(2),
    },
  })
);

export const App = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.title}>
        Popular posts!
      </Typography>
      <BlogGridItem blogList={blogs} />
    </>
  );
};
