import React from "react";
import "./Home.css";
import hero from "../pic/sumon.jpg";
// import skill1 from "../pic/skill1.png"
// import skill2 from "../pic/skill2.png"
// import skill3 from "../pic/skill3.png"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY PORTFOLIO</h3>
            <h1>
              Hi, I'm <span>Md. Sumon</span>
            </h1>
            <h2>
              {/* a */}
              <span>
                {/* <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /> */}
              </span>
            </h2>

            <p>
              I am a Front-End Web Developer. You can find lot of responsive
              projects with the latest technologies. Coding is my passion. You
              also can connect with me in different ways.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a href="https://www.facebook.com/sumon0204/">
                      <FaFacebook></FaFacebook>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://www.instagram.com/sumon0204/">
                      <FaInstagram></FaInstagram>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://www.linkedin.com/in/md-sumon-/">
                      <FaLinkedin></FaLinkedin>
                    </a>
                  </button>
                </div>
              </div>
              {/* <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div> */}
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
