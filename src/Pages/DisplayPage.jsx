import React from "react"
import './DisplayPage.css'
import { Link } from "react-router-dom";

function DisplayPage(props) {

  return (
    <div className="DisplayPage">
        <div className="img-details">
            <img src={props.image} alt="" />
            <div className="main-details">
                <h1><span style={{color: "#8c8c8c"}}>⟫</span> {props.name}</h1>
                <p>Cuisine: {props.cuisine}</p>
                <p>Rating: {props.rating} ({props.reviewCount})</p>
                <p>Difficulty Level: {props.difficulty}</p>
                <p>Meal Type: {props.mealType}</p>
                <p>Preparation Time: {props.prepTimeMinutes} minutes</p>
                <p>Cooking Time: {props.cookTimeMinutes} minutes</p>
                <p>Servings: {props.servings}</p>
                <p>Calories PerServing: {props.caloriesPerServing}</p>
                
            </div>   
        </div>

        <div className="prep-details">
            <div className="ingredients">
                <p>Ingredients</p>
                {props.ingredients.map((item,i) => {
                return  <ul>
                        <li>{item}</li>
                        </ul>
                })}
            </div>
            <div className="prepare">
                <p>Instructions for Cooking</p>
                <ol>
                {props.instructions.map((item,i) => {
                return  <li>{item}</li>  
                })}
                </ol>
            </div>
        </div>
        
        
    </div>
  )
}
export default DisplayPage;
