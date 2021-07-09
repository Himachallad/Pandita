import React from "react";

const SearchContext = React.createContext({
  searchKey: "",
  changeSearchKey: (key) => {},
});
export default SearchContext;
