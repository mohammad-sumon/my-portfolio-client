import React from "react";
import Contact from "../component/Contact/Contact";
import Features from "../component/Features/Features";
import Footer from "../component/Footer";
import Header from "../component/Head/Header";
import Home from "../component/Hero/Home";
import Resume from "../component/Resume/Resume";

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      {/* <Portfolio /> */}
      <Resume />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
