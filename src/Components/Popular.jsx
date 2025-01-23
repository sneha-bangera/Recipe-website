import React from "react"
import { useState, useEffect } from "react";
import './Popular.css'
import Item from "./Item"; 

function Popular() {

    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      fetch('https://dummyjson.com/recipes')
        .then((response) => response.json())
        .then((data) => setRecipes(data.recipes))
        .catch((err) => console.error('Error fetching recipes:', err));
    }, []);
     
  return (
    <div className="popular-search">
        <h2>POPULAR SEARCHES</h2>
      <hr/>
      <div className="popular-recipe">
        {recipes.map((item, i) => {
          if(i<30 && parseInt(item.reviewCount)>82){
            return <Item key={i} id={item.id} name={item.name} image={item.image} rating={item.rating}/>
          } 
        })}
      </div>
    </div>
  )
}
export default Popular;