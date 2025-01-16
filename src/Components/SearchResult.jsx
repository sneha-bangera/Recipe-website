import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "./SearchResult.css";

export const SearchResult = ({ result, id }) => {

  const navigate = useNavigate();

  return (
    <div
      className="search-result"
      onClick={() => navigate(`/recipe/${id}`)}
    >
      {result}
    </div>
  );
};