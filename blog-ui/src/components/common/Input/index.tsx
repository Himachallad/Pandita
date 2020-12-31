import { TextField, OutlinedTextFieldProps, makeStyles, Theme, createStyles, InputAdornment } from '@material-ui/core';
import * as React from "react";
import SearchIcon from '../../../icons/searchIcon';


interface OutlinedTextProps {
    placeholder?: string,
    fullWidth?: boolean,
    width: number,
    background: string,
    expandOnClick: boolean
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: (props: OutlinedTextProps) => ({
      background: props.background,
      margin: theme.spacing(1),
      "border-radius": "4px",
      width: props.width
    })
  }),
);

/**
 * 
 * @param props 
 * 
 */
export const OutlinedTextField = ({placeholder="", fullWidth=true, width=0, background, expandOnClick=false}: OutlinedTextProps) => {
    const props: OutlinedTextFieldProps = {fullWidth, variant:"outlined", size: "small", placeholder};
    const styleProps: OutlinedTextProps = {placeholder, width, fullWidth, background, expandOnClick}
    const classes = useStyles(styleProps);
    return <TextField 
              className={classes.root}
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
              }}
              {...props} 
     />;
}
