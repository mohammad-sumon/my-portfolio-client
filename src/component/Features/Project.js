import React from "react";
import { useLoaderData } from "react-router-dom";
import data from "./Features-Api";
// import data from "./Features-Api"

const Project = (props) => {
  // console.log(Detail_Data);
  // console.log(props.data);
  // const data = useLoaderData();
  console.log(data[0]);
  // console.log(props[0]);

  return (
    <div>
      <h2>This is single project</h2>
      <div>
        <h3>Project Name: {data[0]?.title}</h3>
        <img src={data[0]?.image} alt="" />
        <p>Desctiption: {data[0]?.desc}</p>
      </div>
      
    </div>
  );
};

export default Project;
