import React from "react";
import "./Card.css";
function Card({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} width="100%" height={200} />
      <h7>{title}</h7>
      <p>${price}</p>
      <button>Product Details</button>
    </div>
  );
}

export default Card;
