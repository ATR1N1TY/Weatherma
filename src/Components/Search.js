import React, { useContext } from "react";
import { dataContext } from "../States/DataContext";

const Search = () => {
  const { callBack } = useContext(dataContext);

  return (
    <div className="Search w-11/12 rounded-full bg-gray-900 h-16 flex justify-center align-middle p-5 m-4 glass">
      <form
        className=" outline-none bg-none bg-transparent w-full h-full"
        onSubmit={(e) => {
          e.preventDefault();
          callBack(e.target[0].value);
        }}
        name="input"
      >
        <input
          name="input"
          className=" outline-none bg-none bg-transparent w-full h-full focus:text-gray-50 text-center"
          type="text"
          placeholder="Search City on ⚡Weatherma"
        />
      </form>
    </div>
  );
};

export default Search;
