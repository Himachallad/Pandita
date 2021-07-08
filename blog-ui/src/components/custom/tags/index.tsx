import { Button, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import CheckIcon from "../../../icons/checkIcon";
import styles from "./index.module.scss";


const tagsStyle = makeStyles({
  checkedTag: (props: any) => ({ background: props.success.dark }),
});

const Tags = ({ tags, updateTagList }) => {
  const updatetags = (item) => {
    updateTagList(item);
  };

  const theme = useTheme();
  const classes = tagsStyle(theme.palette);



  const ret = Object.keys(tags)
    .sort(function (a, b) {
      return tags[b] - tags[a];
    })
    ?.map((item, idx) => {
      const x = tags[item]
        ? { className:classes.checkedTag,
          startIcon: <CheckIcon fill="white" /> }
        : {};

      return (
        <div className={styles.tagButton} key={`div_${item}+${idx}`}>
          <Button
            onClick={updatetags.bind(null, item)}
            variant="contained"
            color="secondary"
            key={`${item}+${idx}`}
            { ...x }
          >
            {item}
          </Button>
        </div>
      );
    });

  return <>{ret}</>;
};

export default Tags;
