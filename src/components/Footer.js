import React from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Meisenweg 10, 67663 Kaiserslautern Germany </p>
            </div>
            <div className="d-flex">
              <a className="text-footer" href="tel:+4915212053496">
                (+49)15212053496
              </a>
            </div>
            <div className="d-flex">
              <a href="mailto:shreyachauhan1113@gmail.com">
                shreyachauhan1113@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="#home" className="footer-nav">
                  Home
                </a>
                <br />
                <a href="#about" className="footer-nav">
                  About Me
                </a>
                <br />
                <a href="#services" className="footer-nav">
                  Services
                </a>
              </div>
              <div className="col">
                <a href="#experience" className="footer-nav">
                  Experience
                </a>
                <br />
                {/* <a href="portfolio" className="footer-nav">
                  Portfolio
                </a>
                <br /> */}
                <a href="#contacts" className="footer-nav">
                  Contacts
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-item-center pt-3">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.instagram.com/___shreyachauhan___/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <RedditShareButton
                url={"https://www.instagram.com/___shreyachauhan___/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.instagram.com/___shreyachauhan___/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={"https://www.instagram.com/___shreyachauhan___/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; Social Fiber | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
