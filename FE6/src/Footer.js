import React, { Component } from "react";
import "./css/style.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div class="container">
            <div class="footer-connect">
              <h4>Connect With Us</h4>
              <a href="https://www.instagram.com/reyhanmd._">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.instagram.com/reyhanmd._">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/reyhanmd._">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div class="footer-content">
              <div class="content-privacy">
                <p>Privacy Statement</p>
                <p>Term of Use</p>
              </div>
              <div class="content-copyright">
                <p>©Undefined. 2022</p>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
