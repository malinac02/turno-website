import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import DesignProcess from "./components/DesignProcess.js";
import Team from "./components/Team.js";
import "./App.css";
import './fonts.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main class="is-preload">

        <article id="home" className="section home">
          <Home/>
        </article>

        <article id="about" class="section about">
          <About/>
        </article>

        {/* Features */}
        <article id="features" class="section features">
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

        <article id="design-process" class="wrapper style3">
          <DesignProcess/>
        </article>

        {/* Team */}
        <article id="team" class="wrapper style2">
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
