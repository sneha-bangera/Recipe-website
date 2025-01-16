import { SearchResult } from "./SearchResult";
import './SearchResultList.css'

export const SearchResultsList = ({ results}) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult 
                    result={result.name} 
                    id={result.id} 
                    key={id}
                    />;
      })}
    </div>
  );
};