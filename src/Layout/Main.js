import React from "react";
import Contact from "../component/Contact/Contact";
import Features from "../component/Features/Features";
import Footer from "../component/Footer";
import Header from "../component/Head/Header";
import Home from "../component/Hero/Home";
import Portfolio from "../component/Portfolio/Portfolio";
import Resume from "../component/Resume/Resume";

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Resume />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Contact />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Main;
