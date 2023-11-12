import './DesignProcess.css';
import A1pdf from "../pdfs/TurnoA1Slides.pdf";
import A1ppt from "../pdfs/TurnoA1Slides.pptx";
import A2pdf from "../pdfs/TurnoA2Slides.pdf";
import A2ppt from "../pdfs/TurnoA1Slides.pptx";
import A4pdf from "../pdfs/TurnoA4Slides.pdf";
import A4ppt from "../pdfs/TurnoA4Slides.pptx";
import A5pdf from "../pdfs/TurnoA5Slides.pdf";
import A5ppt from "../pdfs/TurnoA5Slides.pptx";

function DesignProcess() {
  return (
    <div>
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
    </div>
  );
}

export default DesignProcess;
