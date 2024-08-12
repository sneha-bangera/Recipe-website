import React from "react"
import './Item.css'
// import { Link } from "react-router-dom";

function Item(props) {

  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p className="item-name">{props.name}</p>
      <p className="item-rating">rating: {props.rating}</p>
    </div>
  )
}
export default Item;