import React, { useState } from "react";
// import contact1 from "./contact2.jpg";
import contact1 from "../pic/contact-us.gif";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const form = useRef();

  const formSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_kfp8fqd",
        "template_q9ukzza",
        form.current,
        "kcg6GYtARzLDBv0hF"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log('test message ok');
          // setData();
        },
        (error) => {
          console.log(error.text);
        }
      );
      
      toast.success('Successfully Submit');
      event.target.reset();
  
  };

  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" style={{ width: "400px" }} />
                </div>
                <div className="details">
                  <h1>Md. Sumon</h1>
                  <p>Front-End Web Developer</p>
                  <p>
                    Please feel free to contact with me. Connect with me via and
                    call in to my account.
                  </p>{" "}
                  <br />
                  <p>Whatsapp: +880 16111 56780</p>
                  <p>Email: sumon3011@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
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
              </div>
            </div>

            <div className="right box_shodow">
              <form ref={form} onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      required
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      required
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>SUBJECT </span>
                  <input
                    required
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    required
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button type="submit" className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
