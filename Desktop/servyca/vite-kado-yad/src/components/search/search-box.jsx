import { useState } from "react";

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search functionality here
  };

  return (
    <form
      onSubmit={handleSearch}
      className="input-container bg-transparent border-none flex items-center w-full"
    >
      <input
        type="text"
        placeholder="جست و جو ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input bg-transparent w-full px-4 py-1"
      />
    </form>
  );
}

export default SearchBox;
