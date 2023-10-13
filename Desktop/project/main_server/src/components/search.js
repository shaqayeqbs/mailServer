import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
// import { useDispatch } from "react-redux";
// import { setSearchQuery } from "../store/mailSlice";

function Search() {
  const [input, setInput] = useState("");
  //   const dispatch = useDispatch();

  const handleSearch = () => {
    // Dispatch an action to perform the search, passing the search query
    console.log(input);
  };

  return (
    <div className="relative">
      <HiSearch
        className="absolute inset-y-0 left-2 top-2 h-6 w-6 text-gray-400 cursor-pointer"
        onClick={handleSearch}
      />
      <input
        type="text"
        placeholder="Search mail..."
        className="rounded-xl p-2 pl-10 w-full min-w-[250px] md:min-w-[500px]"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          console.log(e.target.value);
          //   dispatch(setSearchQuery(e.target.value));
        }}
      />
    </div>
  );
}

export default Search;
