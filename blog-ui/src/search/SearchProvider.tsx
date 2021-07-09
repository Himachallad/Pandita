import React, { useState } from "react";
import SearchContext from ".";

const SearchProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState("");
  const searchObj = {
    searchKey: searchKey,
    changeSearchKey: (key) => setSearchKey(key),
  };
  return (
    <SearchContext.Provider value={searchObj}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
