import "./DesignProcess.css";
import A1pdf from "../pdfs/TurnoA1Slides.pdf";
import A1ppt from "../pdfs/TurnoA1Slides.pptx";
import A2pdf from "../pdfs/TurnoA2Slides.pdf";
import A2ppt from "../pdfs/TurnoA1Slides.pptx";
import A4pdf from "../pdfs/TurnoA4Slides.pdf";
import A4ppt from "../pdfs/TurnoA4Slides.pptx";
import A5pdf from "../pdfs/TurnoA5Slides.pdf";
import A5ppt from "../pdfs/TurnoA5Slides.pptx";
import A6pdf from "../pdfs/TurnoA6Slides.pdf";
import A6ppt from "../pdfs/TurnoA6Slides.pptx";


function DesignProcess() {
  const items = [
    { title: "Needfinding", pdf: A1pdf, ppt: A1ppt },
    { title: "POV, HMW, Experience Prototypes", pdf: A2pdf, ppt: A2ppt },
    { title: "Concept Video", pdf: A4pdf, ppt: A4ppt },
    { title: "Lo-Fidelity Prototype", pdf: A5pdf, ppt: A5ppt },
    { title: "Medium-Fidelity Prototype", pdf: A6pdf, ppt: A6ppt },
  ];

  return (
    <div className="process-container">
      <h2 className="process-title">Our Process</h2>
      <p className="process-description">
        Over ten weeks, we searched for problems, created prototypes and tested
        them, to finally come up with our solution! Below is some of the
        documentation of our work.
      </p>
      <div className="process-row">
        {items.map((item, index) => (
          <div key={index} className="process-col-md-4">
            <article className="process-box style2">
              <h3>{item.title}</h3>
              <p>
                <a href={item.pdf}>PDF</a>
                <br />
                <a href={item.ppt}>PPT</a>
                <br />
                {item.readme &&
                  <a href={item.readme}>PPT</a>
                }
              </p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignProcess;
