import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutMe from "./Components/AboutMe/AboutMe";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import { Element } from "react-scroll";



function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Element name="top">
          <HeroSection />
        </Element>
        <Element name="about">
          <AboutMe />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="portfolio">
          <Portfolio />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
    </div>
  );
}

export default App;
