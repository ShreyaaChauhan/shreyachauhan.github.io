import React from "react";
import Dummy1 from "../images/Dummy1.png";
// import Dummy2 from "../images/Dummy2.jpg";
// import Dummy3 from "../images/Dummy3.jpg";
// import Dummy4 from "../images/Dummy4.jpg";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>

        <div className="container-fostrap">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-lg-4">
                  <div className="card">
                    <img
                      className="img-card"
                      alt="behanceportfolio"
                      src={Dummy1}
                    />

                    <div className="card-content">
                      <h4 className="card-title">
                        Behance Facebook Ad Creatives
                      </h4>
                      <p>
                        Unleashing my creativity, this Behance project consists
                        of all the ad creatives and social media posts, created
                        by me.
                      </p>
                      <div className="demo-code ">
                        <div className="leftDiv">
                          <a
                            href="https://www.behance.net/gallery/102506551/Add-Creatives"
                            className="card-link"
                          >
                            Demo
                          </a>
                        </div>
                        <div className="rightDiv">
                          <a href="#home" className="card-link">
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xs-12 col-sm-6 col-lg-4">
                  <div className="card">
                    <img
                      className="img-card"
                      alt="dummyportfolio"
                      src={Dummy2}
                    />

                    <div className="card-content">
                      <h4 className="card-title">
                        Material Design Responsive Menu
                      </h4>
                      <p className="">
                        Material Design is a visual programming language made by
                        Google. Language programming...
                      </p>
                      <div className="demo-code ">
                        <div className="leftDiv">
                          <a href="#home" className="card-link">
                            Demo
                          </a>
                        </div>
                        <div className="rightDiv">
                          <a href="#home" className="card-link">
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4">
                  <div className="card">
                    <img
                      className="img-card"
                      alt="dummyportfolio"
                      src={Dummy3}
                    />

                    <div className="card-content">
                      <h4 className="card-title">
                        5 Button Hover Animation Effects
                      </h4>
                      <p className="">
                        tutorials button hover animation, although very much a
                        hover button is very beauti...
                      </p>
                      <div className="demo-code ">
                        <div className="leftDiv">
                          <a href="#home" className="card-link">
                            Demo
                          </a>
                        </div>
                        <div className="rightDiv">
                          <a href="#home" className="card-link">
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4">
                  <div className="card">
                    <img
                      className="img-card"
                      alt="dummyportfolio"
                      src={Dummy4}
                    />

                    <div className="card-content">
                      <h4 className="card-title">
                        5 Button Hover Animation Effects
                      </h4>
                      <p className="">
                        tutorials button hover animation, although very much a
                        hover button is very beauti...
                      </p>
                      <div className="demo-code ">
                        <div className="leftDiv">
                          <a href="#home" className="card-link">
                            Demo
                          </a>
                        </div>
                        <div className="rightDiv">
                          <a href="#home" className="card-link">
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4">
                  <div className="card">
                    <img
                      className="img-card"
                      alt="dummyportfolio"
                      src={Dummy4}
                    />

                    <div className="card-content">
                      <h4 className="card-title">
                        5 Button Hover Animation Effects
                      </h4>
                      <p className="">
                        tutorials button hover animation, although very much a
                        hover button is very beauti...
                      </p>
                      <div className="demo-code ">
                        <div className="leftDiv">
                          <a href="#home" className="card-link">
                            Demo
                          </a>
                        </div>
                        <div className="rightDiv">
                          <a href="#home" className="card-link">
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4">
                  <div className="card">
                    <img
                      className="img-card"
                      alt="dummyportfolio"
                      src={Dummy4}
                    />

                    <div className="card-content">
                      <h4 className="card-title">
                        5 Button Hover Animation Effects
                      </h4>
                      <p className="">
                        tutorials button hover animation, although very much a
                        hover button is very beauti...
                      </p>
                      <div className="demo-code ">
                        <div className="leftDiv">
                          <a href="#home" className="card-link">
                            Demo
                          </a>
                        </div>
                        <div className="rightDiv">
                          <a href="#home" className="card-link">
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
