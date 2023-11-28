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
import A6readme from "../pdfs/TurnoA6ReadMe.pdf";


function DesignProcess() {
  const items = [
    { title: "Needfinding", pdf: A1pdf, ppt: A1ppt },
    { title: "POV, HMW, Experience Prototypes", pdf: A2pdf, ppt: A2ppt },
    { 
      title: "Concept Video", 
      pdf: A4pdf,
      ppt: A4ppt,
      youtube: "https://youtu.be/UodGwjzAHGI?si=aYD30W_8lNBmDW0v"
    },
    { title: "Lo-Fidelity Prototype", pdf: A5pdf, ppt: A5ppt },
    { 
      title: "Medium-Fidelity Prototype", 
      pdf: A6pdf, 
      ppt: A6ppt, 
      figma: "https://www.figma.com/file/RDkSKAbDRIfpmg8ZrJzkEM/A6-Turno-Med-Fi-Prototype?type=design&node-id=1-451&mode=design&t=aLDPeAQr758KHLLV-0",
      readme: A6readme,
    },
    {
      title: "High-Fidelity Prototype", 
      pdf: null,
      ppt: null,
      link: null,
      readme: null,
    },
    {
      title: "Heuristic Evalutation Synthesis", 
      pdf: null,
    },
    {
      title: "Poster, Pitch, & Demo Video", 
      pdf: null,
      ppt: null,
      script: null,
      poster: null,
      video: null,
    },
    {
      title: "Final Report", 
      pdf: null,
      ppt: null,
    }
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
          <div key={index} className="process-column">
            <article className="process-box">
              <h3>{item.title}</h3>
              <p className="process-links">
                {Object.keys(item).slice(1).map((link, index2) => (
                  <a key={index2} href={item[link]}>
                    {link}
                  </a>
                ))}
              </p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignProcess;
