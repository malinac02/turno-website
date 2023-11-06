import CasinoIcon from "@mui/icons-material/Casino";
import Navbar from "./components/Navbar.js";
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
      <Navbar />
      {/* <Button variant="contained">Hello world</Button> */}
      <header id="home" className="App-header">
        <div className="is-flex">
          <img src={TurnoLogo} alt="Turno logo" />
          <p>here is the website's main page which will tentatively contain our logo & picture of the app </p>
        </div>
      </header>

      <body class="is-preload">
        {/* about */}
        <article id="about" class="wrapper style1">
          <div class="container">
            <div class="row">
              <div class="col-8 col-7-large col-12-medium">
                <header>
                  <h1>
                    About
                  </h1>
                </header>
                <p>
                  Here we will talk about our app and its features
                </p>
              </div>
            </div>
          </div>
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

        {/* Design Process */}
        <article id="design-process" class="wrapper style3">
          <div class="container">
            <header>
              <h1>Design Process</h1>
            </header>
            <div class="row">
              <div class="col-4 col-6-medium col-12-small">
                <article class="box style2">
                  <h3>Needfinding</h3>
                  <p>
                    <a href={A1pdf}>PDF</a>
                    <br/>
                    <a href={A1ppt}>PPT</a></p>
                </article>
              </div>
              <div class="col-4 col-6-medium col-12-small">
                <article class="box style2">
                  <h3>POV, HMW, Experience Prototypes </h3>
                  <p>
                    <a href={A2pdf}>PDF</a>
                    <br/>
                    <a href={A2ppt}>PPT</a>
                  </p>
                </article>
              </div>
              <div class="col-4 col-6-medium col-12-small">
                <article class="box style2">
                  <h3>Concept Video</h3>
                  <p>
                    <a href={A4pdf}>PDF</a>
                    <br/>
                    <a href={A4ppt}>PPT</a>
                  </p>
                </article>
                <article class="box style2">
                  <h3>Lo-Fidelity Prototype</h3>
                  <p>
                    <a href={A5pdf}>PDF</a>
                    <br/>
                    <a href={A5ppt}>PPT</a>
                  </p>
                </article>
              </div>
            </div>
          </div>
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
      </body>
    </div>
  );
}

export default App;
