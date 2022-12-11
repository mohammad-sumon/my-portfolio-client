import React from "react";
import "./Portfolio.css";
import myPic2 from "../../component/pic/sumon2.jpg";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {
  return (
    <>
      <section className="Portfolio top" id="aboutme">
        <div className="container">
          <div className="heading text-center ">
            {/* <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4> */}
            <h1>About Me</h1>
          </div>
          <div className="myAbout">
            <div className="myPic">
              <img src={myPic2} alt="mypic2" />
            </div>
            <div className="myPara">
              <p>
                Hello, This is Md. Sumon. I belong from Dhaka, Bangladesh. From
                my childhood i have a huge interest on tehcnologies. From the
                beginning of the learning coding, I realize that this will be my
                passion. Patience is my main motto.
              </p>
              <p>
                As a passionate developer, I always like to invent new
                technologies which are relevant to web development. I consider
                myself a quick learner, self-motivated, responsible,
                disciplined-oriented person who can work under pressure.
                Although I am a student of Economics at Jagannath University, I
                came to the development section because of my passion for
                coding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
