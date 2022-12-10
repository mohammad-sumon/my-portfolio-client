import React, { useState } from "react"
import "./header.css"
import {FaBars} from "react-icons/fa"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            {/* <img src={logo} alt='' />
             */}
             <h2>DEV SUMON</h2>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>projects</a>
              </li>
              {/* <li>
                <a href='#portfolio'>portfolio</a>
              </li> */}
              <li>
                <a href='#resume'>resume</a>
              </li>
              {/* <li>
                <a href='#clients'>clients</a>
              </li>
              <li>
                <a href='#blog'>blog</a>
              </li> */}
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <button className='home-btn'>Download Resume</button>
              </li>
            </ul>

            {/* <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button> */}
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <span className="close home-btn">X</span> : <FaBars className="open"></FaBars>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
