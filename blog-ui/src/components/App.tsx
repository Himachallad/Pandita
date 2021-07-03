import React, { useEffect } from "react";
import BlogGridItem from "./custom/BlogItem";
import blogs from "../config/trendingBlogs.json";
import {
  createMuiTheme,
  Typography,
} from "@material-ui/core";
import styles from "./App.module.scss";

export const App = (): JSX.Element => {
  return (
    <>
        <Typography variant="h4" className={styles.title}>
          Pandita
        </Typography>
        <BlogGridItem blogList={blogs} />
    </>
  );
};
