import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

type CustomButtonProps = {
  text: string;
};

type ColorProps = {
  color?: "red" | "blue";
};

const useStyles = makeStyles({
  root: {
    background: (props: ColorProps) =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: (props: ColorProps) =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: 8,
  },
});

export const TextButton = ({
  text,
}: CustomButtonProps & ButtonProps): JSX.Element => {
  return <Button variant="text">{text}</Button>;
};

export const DefaultButton = (
  props: CustomButtonProps & ColorProps & Omit<ButtonProps, keyof ColorProps>
): JSX.Element => {
  const { text, color = "blue", ...other } = props;
  const classes = useStyles(props);
  return (
    <Button className={classes.root} {...other}>
      {text}
    </Button>
  );
};
