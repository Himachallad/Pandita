import { Button, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import styles from "./index.module.scss";

const useStyles = makeStyles({
  root: {},
});

const Tags = ({ tags, updateTagList }) => {
  const updatetags = (item) => {
    updateTagList(item);
  };
  const theme = useTheme();
  console.log(theme.palette);
  const classes = useStyles(theme.palette);

  const ret = tags?.map((item, idx) => {
    return (
      <div className={styles.tagButton} key={`div_${item}+${idx}`}>
        <Button
          onClick={updatetags.bind(null, item)}
          variant="contained"
          color="secondary"
          key={`${item}+${idx}`}
        >
          {item}
        </Button>
      </div>
    );
  });

  return <>{ret}</>;
};

export default Tags;
