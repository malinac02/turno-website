import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import DesignProcess from "./components/DesignProcess.js";
import Team from "./components/Team.js";
import "./fonts/Poppins-Bold.woff";
import "./fonts/Poppins-Medium.woff";
import "./fonts/Poppins-Light.woff";
import "./App.css";
import "./fonts.css";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const aboutOffset = document.getElementById("about").offsetTop - 45;
      const designProcessOffset = document.getElementById("design-process").offsetTop - 45;
      const teamOffset = document.getElementById("team").offsetTop - 45;

      if (scrollPosition < aboutOffset) {
        setCurrentSection("home");
      } else if (scrollPosition < designProcessOffset) {
        setCurrentSection("about");
      } else if (scrollPosition < teamOffset) {
        setCurrentSection("design-process");
      } else {
        setCurrentSection("team");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar currentSection={currentSection} />
      </header>

      <main className="is-preload">
        <article id="home" className="section home">
          <Home />
        </article>

        <article id="about" className="section about">
          <About />
        </article>

        <article id="design-process" className="section design-process">
          <DesignProcess />
        </article>

        {/* Team */}
        <article id="team" className="section team">
          <Team />
        </article>

        <footer className="footer">
          <ul id="copyright">
            <li>&copy; Untitled. All rights reserved.</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

export default App;
