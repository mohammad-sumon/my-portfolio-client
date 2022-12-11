import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import Project from "./Project";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card_container">
      <div className="box btn_shadow">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button className="explore_btn">
          <Link props={props} to={`/project/${props.id}`}>
            Explore More
          </Link>{" "}
        </button>
        
      </div>
    </div>
  );
};

export default Card;
