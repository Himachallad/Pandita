import { createMuiTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React from "react";

export const ThemeContext = React.createContext({
  themeValue: "light",
  changeTheme: (themeValue) => {},
});

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e9486",
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: ["Open Sans", "Helvetica"].join(","),
  },
});



export default theme;