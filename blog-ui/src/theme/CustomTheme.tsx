import React, { useEffect, useState } from "react";
import { ThemeContext } from ".";
import TBThemeProvider from "./TBThemeProvider";

export default function CustomTheme({ children }) {
  const [themeScheme, setThemeScheme] = useState("light");
  const theme = {
    themeValue: themeScheme,
    changeTheme: (themeValue) => {
      setThemeScheme(themeValue);
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      <TBThemeProvider>{children}</TBThemeProvider>
    </ThemeContext.Provider>
  );
}
