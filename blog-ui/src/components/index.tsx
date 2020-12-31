import * as React from "react";
import * as ReactDOM from "react-dom";
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
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("output")
);