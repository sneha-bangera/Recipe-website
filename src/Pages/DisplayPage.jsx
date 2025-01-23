import React from "react"
import './DisplayPage.css'
import { Link } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

function DisplayPage(props) {
 
  return (
    <div className="DisplayPage">
        <div className="img-details">
            <img src={props.image} alt="" />
            <div className="main-details">
                <i><h1> {props.name}</h1></i>
                {/* <span style={{color: "#8c8c8c"}}>⟫</span> */}
                <div className="star-rating">{
                    (parseFloat(props.rating)>4 && parseFloat(props.rating)<5) ?
                    <p style={{fontSize:20, margin:0}}>{Array(4).fill().map((_, index) => (
                        <IoIosStar key={index} style={{ color: "gold", }} />
                      ))}<IoIosStarOutline style={{color: "#8c8c8c"}}/><span style={{marginLeft:10, fontSize:15, marginTop:0}}>({props.rating})</span></p>
                    : <p>{Array(5).fill().map((_, index) => (
                        <IoIosStar key={index} style={{ color: "gold" }} />
                      ))}</p>
                }</div>
                {/* <p style={{marginTop:50}}>Rating: {props.rating} ({props.reviewCount})</p> */}
                <p className="cusine"><span style={{color: "#8c8c8c"}}>Cuisine:</span>  {props.cuisine}</p>
                <p><span style={{color: "#8c8c8c"}}>Difficulty Level:</span> {props.difficulty}</p>
                <p><span style={{color: "#8c8c8c"}}>Meal Type:</span> {props.mealType}</p>
                {/* <p>Preparation Time: {props.prepTimeMinutes} minutes</p> */}
                {/* <p>Cooking Time: {props.cookTimeMinutes} minutes</p> */}
                <div className="time-div">
                    <div className="box-sec">
                        <p style={{fontWeight:600}}>{props.prepTimeMinutes} min</p>
                        <p  className="box-name">Preparation Time</p>
                    </div>
                    <div className="box-sec">
                        <p style={{fontWeight:600}}>{props.cookTimeMinutes} min</p>
                        <p className="box-name">Cooking Time</p>
                    </div>
                    <div className="box-sec">
                        <p style={{fontWeight:600}}>{props.servings}</p>
                        <p className="box-name">Servings    </p>
                    </div>
                    <div className="box-sec">
                        <p style={{fontWeight:600}}>{props.caloriesPerServing}</p>
                        <p className="box-name">PerServing   </p>
                    </div>
                </div>
                {/* <p>Servings: {props.servings}</p> */}
                {/* <p>Calories PerServing: {props.caloriesPerServing}</p> */}
                
            </div>   
        </div>

        <div className="prep-details">
            <div className="ingredients">
                <p style={{marginBottom:60}}>Ingredients</p>
                {props.ingredients.map((item,i) => {
                return  <ul>
                        <li>{item}</li>
                        </ul>
                })}
            </div>
            <div className="prepare">
                <p style={{marginBottom:60}}>Instructions for Cooking</p>
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
