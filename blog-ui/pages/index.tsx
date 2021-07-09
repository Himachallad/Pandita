import React from "react";
import { Pandita } from "../src/components/Pandita";
import NavigationBar from "../src/components/custom/AppNav";
import Footer from "../src/components/custom/footer";
import SearchProvider from "../src/search/SearchProvider";

function HomePage() {
  return (
    <>
      <SearchProvider>
        <NavigationBar />
        <Pandita />
        <Footer />
      </SearchProvider>
    </>
  );
}

export default HomePage;
