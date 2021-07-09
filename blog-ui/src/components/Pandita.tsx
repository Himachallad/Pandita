import React, { useState } from "react";
import BlogGridItem from "./custom/blogsView";
import blogs from "../config/trendingBlogs.json";
import { makeStyles, Typography, useTheme } from "@material-ui/core";
import styles from "./Pandita.module.scss";
import Tags from "./custom/tags";
import { useContext } from "react";
import SearchContext from "../search";

const blogStyles = makeStyles((theme) => ({
  tags: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
}));

export const Pandita = (): JSX.Element => {
  const tags = ["tech", "react", "memes", "stories", "trending"];

  const [tagMap, setTagMap] = useState({
    tech: false,
    react: false,
    memes: false,
    stories: false,
    trending: false,
  });
  const theme = useTheme();
  const classes = blogStyles(theme);
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
      <BlogGridItem blogList={blogs} tagMap={tagMap} />
    </>
  );
};
