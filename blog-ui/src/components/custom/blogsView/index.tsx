import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Blog from "../blog";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "1fr",
      padding: "0 10%",
    },
    gridContainer: {
      padding: "20px 0",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr",
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "1fr",
      },
    },
    card: {
      width: "100%",
    },
    cardAction: {
      display: "grid",
      gridTemplateRows: "4fr 1fr",
      "max-height": "300px",
    },
    blogImg: {
      "max-height": "100%",
    },
    blogTitle: {
      "line-height": "1.2em",
      maxHeight: "3.6em",
    },
    imageBlock: {
      height: "200px",
    },
    blogGrid: {
      display: "flex",
      justifyContent: "center",
    },
    morePostButton: {
      display: "flex",
      "justify-content": "center",
      padding: "30px 0",
    },
  })
);

const getCardView = (blogsList: any) => {
  const classes = useStyles();
  const theme = useTheme();
  let blogItems: JSX.Element[] = [];
  blogsList?.blogList?.forEach(
    (
      blog: { title: {}; source: string; desc: React.ReactNode },
      index: string | number
    ) => {
      blogItems.push(
        <Grid className={classes.blogGrid} item key={index}>
          <Blog blog={blog}></Blog>
        </Grid>
      );
    }
  );
  return blogItems;
};

export default function BlogGridItem(blogs: any) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.gridContainer}>
        {getCardView(blogs)}
      </Grid>
      <div className={classes.morePostButton}>
        <Button variant="outlined" size="small">
          More Posts
        </Button>
      </div>
    </div>
  );
}
