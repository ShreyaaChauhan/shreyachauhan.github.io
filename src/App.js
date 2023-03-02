import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
// import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 75,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "fc7758",
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 7,
                size_min: 0.2,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                opacity_min: 0.2,
                sync: true,
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
      <a
        href="https://wa.me/4915212053496"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  );
}

export default App;
