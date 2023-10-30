import CasinoIcon from "@mui/icons-material/Casino";
import Navbar from "./components/Navbar.js";
import Button from "@mui/material/Button";
import TurnoLogo from "./logo.png";
import "./App.css";
import pdf from "./pdfs/Team2A1Slides.pdf";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Button variant="contained">Hello world</Button> */}
      <header id="home" className="App-header">
        <div className="is-flex">
          <img src={TurnoLogo} alt="Turno logo" />
          <p>here is our home page explaining the app </p>
          <a href={pdf}>Assignment 1 PDF test</a>
        </div>
      </header>

      <body class="is-preload">
        {/* about */}
        <article id="about" class="wrapper style1">
          <div class="container">
            <div class="row">
              <div class="col-4 col-5-large col-12-medium">
                <span class="image fit">
                  <img src="images/pic00.jpg" alt="" />
                </span>
              </div>
              <div class="col-8 col-7-large col-12-medium">
                <header>
                  <h1>
                    Hi. I'm <strong>Jane Doe</strong>.
                  </h1>
                </header>
                <p>
                  And this is <strong>Miniport</strong>, a free, fully
                  responsive HTML5 site template designed by{" "}
                  <a href="http://twitter.com/ajlkn">AJ</a> for{" "}
                  <a href="http://html5up.net">HTML5 UP</a> &amp; released under
                  the <a href="http://html5up.net/license">CCA license</a>.
                </p>
                <a href="#work" class="button large scrolly">
                  Learn about what I do
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Process */}
        <article id="process" class="wrapper style2">
          <div class="container">
            <header>
              <h2>Here's all the stuff I do.</h2>
              <p>Odio turpis amet sed consequat eget posuere consequat.</p>
            </header>
            <div class="row aln-center">
              <div class="col-4 col-6-medium col-12-small">
                <section class="box style1">
                  <span class="icon featured fa-comments"></span>
                  <h3>Consequat lorem</h3>
                  <p>
                    Ornare nulla proin odio consequat sapien vestibulum ipsum
                    primis sed amet consequat lorem dolore.
                  </p>
                </section>
              </div>
              <div class="col-4 col-6-medium col-12-small">
                <section class="box style1">
                  <span class="icon solid featured fa-camera-retro"></span>
                  <h3>Lorem dolor tempus</h3>
                  <p>
                    Ornare nulla proin odio consequat sapien vestibulum ipsum
                    primis sed amet consequat lorem dolore.
                  </p>
                </section>
              </div>
              <div class="col-4 col-6-medium col-12-small">
                <section class="box style1">
                  <span class="icon featured fa-thumbs-up"></span>
                  <h3>Feugiat posuere</h3>
                  <p>
                    Ornare nulla proin odio consequat sapien vestibulum ipsum
                    primis sed amet consequat lorem dolore.
                  </p>
                </section>
              </div>
            </div>
            <footer>
              <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
              <a href="#portfolio" class="button large scrolly">
                See some of my recent work
              </a>
            </footer>
          </div>
        </article>

        {/* Prototype */}
        <article id="prototype" class="wrapper style3">
          <div class="container">
            <header>
              <h2>Here’s some stuff I made recently.</h2>
              <p>
                Proin odio consequat sapien vestibulum consequat lorem dolore
                feugiat.
              </p>
            </header>
            <div class="row">
              <div class="col-4 col-6-medium col-12-small">
                <article class="box style2">
                  <a href="#" class="image featured">
                    <img src="images/pic01.jpg" alt="" />
                  </a>
                  <h3>
                    <a href="#">Magna feugiat</a>
                  </h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
              <div class="col-4 col-6-medium col-12-small">
                <article class="box style2">
                  <a href="#" class="image featured">
                    <img src="images/pic02.jpg" alt="" />
                  </a>
                  <h3>
                    <a href="#">Veroeros primis</a>
                  </h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
              <div class="col-4 col-6-medium col-12-small">
                <article class="box style2">
                  <a href="#" class="image featured">
                    <img src="images/pic03.jpg" alt="" />
                  </a>
                  <h3>
                    <a href="#">Lorem ipsum</a>
                  </h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
              <div class="col-4 col-6-medium col-12-small">
                <article class="box style2">
                  <a href="#" class="image featured">
                    <img src="images/pic04.jpg" alt="" />
                  </a>
                  <h3>
                    <a href="#">Tempus dolore</a>
                  </h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
              <div class="col-4 col-6-medium col-12-small">
                <article class="box style2">
                  <a href="#" class="image featured">
                    <img src="images/pic05.jpg" alt="" />
                  </a>
                  <h3>
                    <a href="#">Feugiat aliquam</a>
                  </h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
              <div class="col-4 col-6-medium col-12-small">
                <article class="box style2">
                  <a href="#" class="image featured">
                    <img src="images/pic06.jpg" alt="" />
                  </a>
                  <h3>
                    <a href="#">Sed amet ornare</a>
                  </h3>
                  <p>Ornare nulla proin odio consequat.</p>
                </article>
              </div>
            </div>
            <footer>
              <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
              <a href="#contact" class="button large scrolly">
                Get in touch with me
              </a>
            </footer>
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
