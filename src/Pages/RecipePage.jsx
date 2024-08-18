import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import './RecipePage.css';
import DisplayPage from "./DisplayPage";

function RecipePage(){

    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      fetch('https://dummyjson.com/recipes')
        .then((response) => response.json())
        .then((data) => setRecipes(data.recipes))
        .catch((err) => console.error('Error fetching recipes:', err));
    }, []);

    return(
        <>
        <div>
        {recipes.map((item, i) => {
          if(parseInt(item.id) == parseInt(id)){
            return <DisplayPage key={i} id={item.id} name={item.name} rating={item.rating}
                    ingredients={item.ingredients} instructions={item.instructions} cuisine={item.cuisine}
                    prepTimeMinutes={item.prepTimeMinutes} cookTimeMinutes={item.cookTimeMinutes} servings={item.servings}
                    difficulty={item.difficulty} caloriesPerServing={item.caloriesPerServing} image={item.image} 
                    reviewCount={item.reviewCount} mealType={item.mealType} tags={item.tags}/>
          } 
        })}
        </div>
        </>
    )

}
export default RecipePage;