import { useState } from "react";
// import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((recipes) => {
          return (
            value &&
            recipes &&
            recipes.name &&
            recipes.name.toLowerCase().includes(value)
          );
        });
        console.log(results)
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      {/* <FaSearch id="search-icon" /> */}
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};