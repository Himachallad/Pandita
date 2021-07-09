import React, { useEffect } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Blog from "../blog";
import { Button } from "@material-ui/core";
import { useContext, useState } from "react";
import SearchContext from "../../../search";

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

const getCardView = (blogsList: any[]) => {
  const classes = useStyles();
  let blogItems: JSX.Element[] = [];
  blogsList?.forEach(
    (
      blog: { title: string; source: string; desc: React.ReactNode },
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
const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export default function BlogGridItem({ blogList, tagMap }) {
  const classes = useStyles();
  const { searchKey } = useContext(SearchContext);
  const [filteredBlogs, setFilteredBlogs] = useState(blogList);
  useEffect(() => {
    // Tag check is not needed if we show all tags or not show all.
    const isTagCheckNeeded = Object.values(tagMap).filter(unique).length > 1;
    const filterBySearchKeyBlogs = blogList?.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(searchKey.toLowerCase().trim()) &&
        (!isTagCheckNeeded || (isTagCheckNeeded && tagMap[blog.tag])) &&
        blog
      );
    });

    setFilteredBlogs(filterBySearchKeyBlogs);
  }, [searchKey, tagMap]);
  return (
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.gridContainer}>
        {getCardView(filteredBlogs)}
      </Grid>
      <div className={classes.morePostButton}>
        <Button variant="outlined" size="medium" color="secondary">
          More Posts
        </Button>
      </div>
    </div>
  );
}
