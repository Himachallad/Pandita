import React from "react";
import { App } from "../src/components/App";
import NavigationBar from "../src/components/custom/AppNav";

function HomePage() {
  return (
    <>
      <NavigationBar />
      <App />
    </>
  );
}

export default HomePage;
