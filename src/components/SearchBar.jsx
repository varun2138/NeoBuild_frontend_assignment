import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ searchName, setSearchName }) => {
  return (
    <div className="flex items-center w-3/5   bg-[#d9d9d9] text-black p-2 rounded-md">
      <input
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        type="text"
        placeholder="search here"
        className="w-full bg- bg-transparent outline-none placeholder:text-black"
      />
      <IoSearch fontSize={25} />
    </div>
  );
};

export default SearchBar;
