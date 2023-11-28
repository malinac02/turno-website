import "./DesignProcess.css";
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
    <div className="process-container">
      <h2 className="process-title">Our Process</h2>
      <p className="process-description">
        Over ten weeks, we searched for problems, created prototypes and tested
        them, to finally come up with our solution! Below is some of the
        documentation of our work.
      </p>
      <div className="row">
        <div className="col-4 col-6-medium col-12-small">
          <article className="box style2">
            <h3>Needfinding</h3>
            <p>
              <a href={A1pdf}>PDF</a>
              <br />
              <a href={A1ppt}>PPT</a>
            </p>
          </article>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <article className="box style2">
            <h3>POV, HMW, Experience Prototypes </h3>
            <p>
              <a href={A2pdf}>PDF</a>
              <br />
              <a href={A2ppt}>PPT</a>
            </p>
          </article>
        </div>
        <div className="col-4 col-6-medium col-12-small">
          <article className="box style2">
            <h3>Concept Video</h3>
            <p>
              <a href={A4pdf}>PDF</a>
              <br />
              <a href={A4ppt}>PPT</a>
            </p>
          </article>
          <article className="box style2">
            <h3>Lo-Fidelity Prototype</h3>
            <p>
              <a href={A5pdf}>PDF</a>
              <br />
              <a href={A5ppt}>PPT</a>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default DesignProcess;
