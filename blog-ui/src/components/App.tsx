import React, { useEffect, useState } from "react";
import BlogGridItem from "./custom/blogsView";
import blogs from "../config/trendingBlogs.json";
import { makeStyles, Typography } from "@material-ui/core";
import styles from "./App.module.scss";
import Tags from "./custom/tags";

const blogStyles = makeStyles({
  tags: {
    display: "flex",
    justifyContent: "center",
  },
});

export const App = (): JSX.Element => {
  const tags = ["tech", "react", "memes", "stories", "trending"];

  const [tagMap, setTagMap] = useState({
    tech: 0,
    react: 0,
    memes: 0,
    stories: 0,
    trending: 0,
  });

  const classes = blogStyles();
  return (
    <>
      <Typography color="textSecondary" variant="h4" className={styles.title}>
        Pandita
      </Typography>
      <div className={classes.tags}>
        <Tags
          updateTagList={(item) => {
            const newTagMap = tagMap;
            newTagMap[item] = !tagMap[item];
            setTagMap({ ...newTagMap });
          }}
          tags={tagMap}
        />
      </div>
      <BlogGridItem blogList={blogs} />
    </>
  );
};
