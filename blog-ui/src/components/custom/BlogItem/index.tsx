import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
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
      padding: '20px 0',
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
      gridTemplateRows: '4fr 1fr',
      'max-height': '300px',
    },
    blogImg: {
      "max-height": "200px",
    },
    blogTitle: {
      'line-height': '1.2em',
      maxHeight: '3.6em'
    }
  })
);

const getCardView = (blogsList: any) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme.breakpoints.down("xs"));
  let blogItems: JSX.Element[] = [];
  blogsList?.blogList?.forEach(
    (
      blog: { title: {}; source: string; desc: React.ReactNode },
      index: string | number
    ) => {
      blogItems.push(
        <Grid item key={index}>
          <Card className={classes.card} variant="outlined" square>
            <CardActionArea className={classes.cardAction}>
              <CardMedia
                className={classes.blogImg}
                component="img"
                alt=""
                src={blog.source}
                title=""
              />
              <CardContent>
                <Typography
                  className={classes.blogTitle}
                  gutterBottom
                  variant="subtitle1"
                >
                  {blog.desc}
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  {blog.desc}
                </Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
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
      <Grid container spacing={3} className={classes.gridContainer}>
        {getCardView(blogs)}
      </Grid>
    </div>
  );
}
