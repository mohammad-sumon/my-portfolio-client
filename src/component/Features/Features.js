import React from "react";
import "./Features.css";
import data from "./Features-Api";
import Card from "./Card";
import { Link } from "react-router-dom";
// import Project from "./Project";

const Features = () => {
  return (
    <>
      <section className="features top" id="features">
        <div className="container">
          <div className="heading">
            <h4>Projects</h4>
            <h1>What I Have Done</h1>
          </div>

          <div className="contents grid">
            {data.map((val, index) => {
              return (
                <Link to={`${val.project}`}>
                  <Card
                    key={index}
                    image={val.image}
                    title={val.title}
                    desc={val.desc}
                    id={val.id}
                    val={val}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
