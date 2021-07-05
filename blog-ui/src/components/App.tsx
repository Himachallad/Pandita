import React, { useEffect } from "react";
import BlogGridItem from "./custom/blogsView";
import blogs from "../config/trendingBlogs.json";
import { Typography } from "@material-ui/core";
import styles from "./App.module.scss";
import Footer from "./custom/footer";

export const App = (): JSX.Element => {
  return (
    <>
      <Typography color="textSecondary" variant="h4" className={styles.title}>
        Pandita
      </Typography>
      <BlogGridItem blogList={blogs} />
      <Footer />
    </>
  );
};
