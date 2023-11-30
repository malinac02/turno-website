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
      const featuresOffset = document.getElementById("features").offsetTop - 100;
      const designProcessOffset = document.getElementById("design-process").offsetTop - 45;
      const teamOffset = document.getElementById("team").offsetTop - 45;

      if (scrollPosition < aboutOffset) {
        setCurrentSection("home");
      } else if (scrollPosition < featuresOffset) {
        setCurrentSection("about");
      } else if (scrollPosition < designProcessOffset) {
        setCurrentSection("features");
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

        {/* Features */}
        <article id="features" className="section features">
          <div className="container">
            <header>
              <h1>Features</h1>
              <p>Here we will talk about the features of our app</p>
            </header>
            <div className="row aln-center">
              <div className="col-4 col-6-medium col-12-small">
                <section className="box style1">
                  <span className="icon featured fa-comments"></span>
                  <h3>Feature 1</h3>
                  <p>Explain</p>
                </section>
              </div>
              <div className="col-4 col-6-medium col-12-small">
                <section className="box style1">
                  <span className="icon solid featured fa-camera-retro"></span>
                  <h3>Feature 2</h3>
                  <p>Explain</p>
                </section>
              </div>
              <div className="col-4 col-6-medium col-12-small">
                <section className="box style1">
                  <span className="icon featured fa-thumbs-up"></span>
                  <h3>Feature 3</h3>
                  <p>Explain</p>
                </section>
              </div>
            </div>
          </div>
        </article>

        <article id="design-process" className="section design-process">
          <DesignProcess />
        </article>

        {/* Team */}
        <article id="team" className="section team">
          <Team />
        </article>

        <footer className="wrapper style4">
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
