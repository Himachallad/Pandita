import NavigationBar from "../../src/components/custom/AppNav";
import { Pandita } from "../../src/components/Pandita";
import SearchProvider from "../../src/search/SearchProvider";

function TrendingPage() {
  return (
    <>
      <SearchProvider>
        <NavigationBar />
        <Pandita />
      </SearchProvider>
    </>
  );
}

export default TrendingPage;
