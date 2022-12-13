import React, { Component } from "react";
import "./css/style.css";
import { FaBars, FaTimes } from 'react-icons/fa';

class Navbar extends Component {
  render() {

    // Navbar Scroll
      window.addEventListener("scroll", function () {
      var navbar = document.querySelector(".navbar");
      navbar.classList.toggle("sticky", window.scrollY > 0);
    });

    // Hamburger
    function Ham(){
    const menuToggle = document.querySelector(".menu-toggle input");
    const nav = document.querySelector("nav ul");
    if(menuToggle.checked){
      nav.classList.toggle("slide");
    }else{
      nav.classList.toggle("slide")
    }
  }
    return (
      <section class="navbar" id="navbar">
        <div class="navbar-title">
          <h3>UNDEFINED</h3>
        </div>
        <nav>
          <ul class="menu">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="https://www.youtube.com/embed/knk1mipy0Ss?rel=0">
                Video
              </a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
          <div class="menu-toggle" >
            <input type="checkbox" onClick={Ham} />
            <div class="icon-bars">
              <FaBars/>
            </div>
            <div class="icon-close">
              <FaTimes/>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Navbar;
