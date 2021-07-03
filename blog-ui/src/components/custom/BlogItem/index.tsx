import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "1fr",
    },
    gridContainer: {
      padding: theme.spacing(2),
      width: '100%'
    },
    paper: {
      color: theme.palette.text.secondary,
      display: "flex",
    },
    card: {
      width: "100%",
    },
    cardAction: {
      display: "flex",
      width: "100%",
    },
    blogImg: {
      width: "140px",
      height: "140px",
    },
  })
);

const getCardView = (blogsList: any) => {
  const classes = useStyles();
  let blogItems: JSX.Element[] = [];
  blogsList?.blogList?.forEach(
    (
      blog: { title: {}; source: string; desc: React.ReactNode },
      index: string | number
    ) => {
      blogItems.push(
        <Grid item xs={12} key={index}>
          <Paper className={classes.paper}>
            <Card className={classes.card}>
              <CardActionArea className={classes.cardAction}>
                <CardMedia
                  className={classes.blogImg}
                  component="img"
                  alt=""
                  src={blog.source}
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {blog.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
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
      <Grid container spacing={2} className={classes.gridContainer}>
        {getCardView(blogs)}
      </Grid>
    </div>
  );
}
