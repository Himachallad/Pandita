import { TextField, OutlinedTextFieldProps, makeStyles, Theme, createStyles } from '@material-ui/core';
import * as React from "react";


interface OutlinedTextProps {
    placeholder?: string,
    fullWidth?: boolean
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'white',
      margin: theme.spacing(1),
      "border-radius": "4px"
    }
  }),
);

/**
 * 
 * @param props 
 * 
 */
export const OutlinedTextField = ({placeholder="", fullWidth=true}: OutlinedTextProps) => {
    const props: OutlinedTextFieldProps = {fullWidth, variant:"outlined", size: "small", placeholder};
    const classes = useStyles();
    return <TextField className={classes.root} {...props} />;
}
