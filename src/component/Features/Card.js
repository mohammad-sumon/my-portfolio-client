import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  console.log();
  return (
    <div className="card_container">
      <div className="box btn_shadow">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button className="explore_btn">
          <Link to={`/project/${props.id}`}>Explore More</Link> </button>
      </div>
    </div>
  );
};

export default Card;
