import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="contact">
          <a href="https://github.com/MethinduMuhandiram">
            <i className="fab fa-github "></i>
          </a>
          <a href="https://www.facebook.com/">
            <i className="social-icon fab fa-facebook-f "></i>
          </a>
          <a href="https://www.instagram.com/methindu.p.m/">
            <i className="social-icon fab fa-instagram "></i>
          </a>
          <a href="https://www.youtube.com/results?search_query=methindupm">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p>© 2022 methindu p. muhandiram</p>
      </div>
    </div>
  );
}

export default Footer;
