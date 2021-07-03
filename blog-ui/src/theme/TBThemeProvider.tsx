import { createMuiTheme, Theme, ThemeProvider } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React, { useContext, useEffect, useState } from "react";
import theme, { ThemeContext } from ".";

const TBThemeProvider = ({ children }): JSX.Element => {
  //   const [currentColor, setCurrentColor] = useState<"dark" | "light">("light");
  const [customTheme, setCustomTheme] = useState<Theme>(theme);
  //   const changeTheme = () => {
  //     setCurrentColor(currentColor === "light" ? "dark" : "light");
  //   };
  const themeObject = useContext(ThemeContext);
  const currentColor = themeObject.themeValue;

  useEffect(() => {
    // currentColor = "light";
    setCustomTheme(
      createMuiTheme({
        palette: {
          primary: {
            main: currentColor === "light" ? "#1e9486" : "#146b61",
          },
          secondary: {
            main: green[500],
          },
          type: currentColor,
        },
      })
    );
  }, [currentColor]);
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default TBThemeProvider;
