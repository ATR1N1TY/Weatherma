import React, { useContext } from "react";
import Search from "../Components/Search";
import { dataContext } from "../States/DataContext";

const SearchPage = () => {
  return (
    <div className="SearchPage h-screen flex justify-center align-middle flex-col">
      <Search />
      <button>click me</button>
    </div>
  );
};

export default SearchPage;
