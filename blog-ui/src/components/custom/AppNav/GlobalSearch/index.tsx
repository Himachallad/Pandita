import React from "react";
import { makeStyles, Theme, createStyles, InputBase } from "@material-ui/core";
import SearchIcon from "../../../../icons/searchIcon";

interface SearchProps {
  placeholder?: string;
  fullWidth?: boolean;
  width: number;
  background: string;
  expandOnClick: boolean;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: (props: SearchProps) => ({
      background: props.background,
      margin: theme.spacing(1),
      "border-radius": "4px",
      width: props.width,
    }),
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.common.white,
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 0.5, 0.5, 1),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "black",
    },
    inputInput: (props: SearchProps) => ({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: props.expandOnClick ? "30ch" : "20ch",
        },
      },
      [theme.breakpoints.up("md")]: {
        width: "20ch",
        "&:focus": {
          width: props.expandOnClick ? "60ch" : "20ch",
        },
      },
    }),
  })
);

/**
 *
 * @param props
 *
 */
export const SearchField = ({
  placeholder = "",
  fullWidth = true,
  width = 0,
  background,
  expandOnClick = false,
}: SearchProps) => {
  const styleProps: SearchProps = {
    placeholder,
    width,
    fullWidth,
    background,
    expandOnClick,
  };
  const classes = useStyles(styleProps);
  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </>
  );
};
