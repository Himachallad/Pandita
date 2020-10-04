import { TextField, OutlinedTextFieldProps } from '@material-ui/core';
import * as React from "react";


interface OutlinedTextProps {
    label?: string,
    fullWidth?: boolean
}

/**
 * 
 * @param props 
 * 
 */
export const OutlinedTextField = ({label="", fullWidth=true}: OutlinedTextProps) => {
    const props: OutlinedTextFieldProps = {label, fullWidth, variant:"outlined"};
    return <TextField {...props} />;
}
