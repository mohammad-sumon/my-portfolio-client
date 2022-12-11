import React from "react";
import { useLoaderData } from "react-router-dom";
import data from "./Features-Api";
import './Project.css';
// import data from "./Features-Api"

const Project = (props) => {
  // console.log(Detail_Data);
  // console.log(props.data);
  // const data = useLoaderData();
  console.log(data[0]);
  // console.log(props[0]);

  return (
    <div className="projectDiv">
      <h2>This is single project</h2>
      <div>
        <h3>Project Name: {data[0]?.title}</h3>
        <div className="projectImg">
        <img src={data[0]?.image1} alt="" />
        <img src={data[0]?.image2} alt="" />
        <img src={data[0]?.image3} alt="" />
        </div> 
        <p>Desctiption: {data[0]?.desc}</p>
        <h3>Features & Functionality:</h3>
        <ol>
          <li>1. React Router Dom</li>
          <li>2. Firebase Authentication</li>
          <li>3. React Query</li>
          <li>4. CRUD Operation</li>
          <li>5. Used backend server in Vercel</li>
          <li>6. Generic Modal</li>
        </ol>
        <div className="myCode">
        <a href="https://github.com/mohammad-sumon/my-twelfth-assignment-client">Github Client Code</a>
        <a href="https://github.com/mohammad-sumon/my-twelfth-assignment-server">Github Server Code</a>
        <a href="https://used-products-resale-cli-8eb57.web.app/">Live Website</a>
        </div>
        
      </div>
      
    </div>
  );
};

export default Project;
