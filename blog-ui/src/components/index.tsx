import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { green, blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: ["Open Sans", "Helvetica"].join(","),
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("output")
);
