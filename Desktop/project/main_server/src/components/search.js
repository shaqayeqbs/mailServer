import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setMails } from "../store/mailSlice";
import dummyData from "../data/MailData";
function Search() {
  const [input, setInput] = useState("");
  //   const dispatch = useDispatch();

  const dispatch = useDispatch();
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
        onChange={(e) => {
          const searchedEmails = dummyData.filter((email) =>
            email.content.includes(e.target.value)
          );
          console.log(e.target.value);
          dispatch(setMails(searchedEmails));
        }}
      />
    </div>
  );
}

export default Search;
