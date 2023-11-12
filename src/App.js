import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import DesignProcess from "./components/DesignProcess.js";
import Button from "@mui/material/Button";
import TurnoLogo from "./logo.png";
import "./App.css";
import A1pdf from "./pdfs/TurnoA1Slides.pdf";
import A1ppt from "./pdfs/TurnoA1Slides.pptx";
import A2pdf from "./pdfs/TurnoA2Slides.pdf";
import A2ppt from "./pdfs/TurnoA1Slides.pptx";
import A4pdf from "./pdfs/TurnoA4Slides.pdf";
import A4ppt from "./pdfs/TurnoA4Slides.pptx";
import A5pdf from "./pdfs/TurnoA5Slides.pdf";
import A5ppt from "./pdfs/TurnoA5Slides.pptx";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main class="is-preload">

        <article id="home" className="App-header">
          <Home/>
        </article>

        <article id="about" class="wrapper style1">
          <About/>
        </article>

        {/* Features */}
        <article id="features" class="wrapper style2">
          <div class="container">
            <header>
              <h1>Features</h1>
              <p>Here we will talk about the features of our app</p>
            </header>
            <div class="row aln-center">
              <div class="col-4 col-6-medium col-12-small">
                <section class="box style1">
                  <span class="icon featured fa-comments"></span>
                  <h3>Feature 1</h3>
                  <p>
                    Explain
                  </p>
                </section>
              </div>
              <div class="col-4 col-6-medium col-12-small">
                <section class="box style1">
                  <span class="icon solid featured fa-camera-retro"></span>
                  <h3>Feature 2</h3>
                  <p>
                    Explain
                  </p>
                </section>
              </div>
              <div class="col-4 col-6-medium col-12-small">
                <section class="box style1">
                  <span class="icon featured fa-thumbs-up"></span>
                  <h3>Feature 3</h3>
                  <p>
                    Explain
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>

        <article class="wrapper style3">
          <DesignProcess/>
        </article>

        {/* Team */}
        <article id="team" class="wrapper style2">
          <h2>Our team</h2>
          <div className="is-flex">
            <div>Malina</div>
            <div>Cecilia</div>
            <div>Pedro</div>
            <div>Nazanin</div>
          </div>
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
