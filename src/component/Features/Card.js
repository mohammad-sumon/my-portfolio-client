import React from "react";
// import { Link } from "react-router-dom";
import "./Card.css";
// import Project from "./Project";

const Card = (props) => {
  console.log(props);
  console.log(props.project);
  return (
    <div className="card_container">
      <div className="boxs btn_shadow">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button className="explore_btn">
          <a href={props.project}>
            Explore More
          </a>{" "}
        </button>
        
      </div>
    </div>
  );
};

export default Card;
