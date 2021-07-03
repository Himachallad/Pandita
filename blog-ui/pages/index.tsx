import React from "react";
import { App } from "../src/components/App";
import NavigationBar from "../src/components/custom/AppNav";
import CustomTheme from "../src/theme/CustomTheme";

function HomePage() {
  return (
    <>
      <CustomTheme>
          <NavigationBar>
            <App />
          </NavigationBar>
      </CustomTheme>
    </>
  );
}

export default HomePage;
