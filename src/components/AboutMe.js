import React from "react";
import author from "../Myimage.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <div className="container py-5 dottedpattern">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={author} alt="author" />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">About Me</h1>
            <p>
              Hello, I am Shreya. I'm a Full-Stack web Developer. I create
              responsive websites that are displayed on all devices desktops and
              smartphones. The technologies I use are MERN(MongoDB, Express,
              ReactJS, and NodeJS). I am also interested in Machine Learning and
              Computer Vision. I am doing my Master from TU Kaiserslautern with
              a specialization in Intelligent Systems and Scientific
              Visualization.
              <br />
              Apart from this, I have a huge interest in Data Visualization and
              Data analytics. Right now I am learning data Visualization using
              d3.js. I enjoy mixing my knowledge of machine learning and
              computer vision with websites and web-based apps. Apart from this
              I also have experience with Digital Marketing, as Digital
              Marketing and Web Development go hand in hand.
              <br />
              Although I am a tech geek, I do have a creative side as well. I
              love designing websites, Facebook adds carousels, add displays,
              and youtube thumbnails. I use canva for that. I am planning to
              learn Adobe Illustrator to achieve perfection in design. I love
              learning. You'll always find me learning new stuff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
