import React from "react";
import logo from "../ShreyaLogo.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="ShreyaLogo" className="brand" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link smooth={true} to="home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="about" className="nav-link">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="services"
                  className="nav-link"
                  offset={-70}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  smooth={true}
                  to="experience"
                  className="nav-link"
                  offset={-60}
                >
                  Experience
                </Link>
              </li>
              {/* <li className="nav-item ">
                <Link smooth={true} to="portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li> */}
              <li className="nav-item ">
                <Link
                  smooth={true}
                  to="contacts"
                  className="nav-link"
                  offset={-50}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
