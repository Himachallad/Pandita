import * as React from "react";
import BlogGridItem from './custom/BlogItem';
import ButtonAppBar from './custom/AppNav';
import * as blogs from './config/trendingBlogs.json'
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      paddingLeft: theme.spacing(2),
    },
  }),
);

export const App = () => {
    const classes = useStyles();
    return (
    <h1>
      <ButtonAppBar />
      <Typography variant="h3" className={classes.title}>
        Popular posts!
      </Typography>
      {/* <OutlinedTextField label="Search"/> */}
      <BlogGridItem blogList={blogs}/>
    </h1>
    );
  };
