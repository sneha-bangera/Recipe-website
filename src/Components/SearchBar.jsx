import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((json) => {
        const results = json.recipes.filter((recipe) => {
          return (
            value &&
            recipe &&
            recipe.name &&
            recipe.name.toLowerCase().includes(value)
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
      <FaSearch id="search-icon" style={{color:"black"}}/>
      <input
        placeholder="Search for recipes..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};