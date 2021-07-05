import React from "react";
import { App } from "../src/components/App";
import NavigationBar from "../src/components/custom/AppNav";
import Footer from "../src/components/custom/footer";

function HomePage() {
  return (
    <>
      <NavigationBar />
      <App />
      <Footer />
    </>
  );
}

export default HomePage;
