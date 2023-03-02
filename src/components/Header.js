import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Web Development</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Development",
            "Web Desgin",
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#contacts" className="btn-main-offer font-link">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
