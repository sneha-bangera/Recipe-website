import { useEffect, useState } from "react";
import Item from "./Item";

function Data() {

  const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      fetch('https://dummyjson.com/recipes')
        .then((response) => response.json())
        .then((data) => setRecipes(data.recipes))
        .catch((err) => console.error('Error fetching recipes:', err));
    }, []);

    return (
      <>
        <div>
      <h1>Recipes</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.ingredients.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </>
    )
  }
  
  export default Data