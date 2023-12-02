import "./DesignProcess.css";
import { FaFilePdf, FaFilePowerpoint, FaFileWord, FaYoutube, FaFileLines, FaFigma, FaFile, FaMobile, FaFileImage } from 'react-icons/fa6';
import { FaDownload, FaFileArrowDown } from 'react-icons/fa6';
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
      youtube: "https://youtu.be/UodGwjzAHGI?si=aYD30W_8lNBmDW0v",
      save: "TurnoPromoFinal.mp4",
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
      docx: null,
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
      docx: null,
    }
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'pdf':
        return <FaFilePdf className="process-icon-pdf"/>;
      case 'ppt':
        return <FaFilePowerpoint className="process-icon"/>;
      case 'youtube':
      case 'video':
        return <FaYoutube className="process-icon"/>;
      case 'figma':
        return <FaFigma className="process-icon"/>;
      case 'link':
        return <FaMobile className="process-icon"/>;
      case 'save':
        return <FaFileArrowDown className="process-icon"/>;
      case 'poster':
        return <FaFileImage className="process-icon"/>;
      case 'docx':
        return <FaFileWord className="process-icon"/>;
      case 'readme':
      case 'script':
      case 'poster':
        return <FaFileLines className="process-icon"/>;
      default:
        return <FaFile className="process-icon"/>;
    }
  };

  return (
    <div className="process-container">
      <div className="process-header">
        <h2 className="process-title">Our Process</h2>
        <p className="process-description">
          Over ten weeks, we searched for problems, brainstormed solutions, built and tested prototypes, and
          finally created the Turno app. Below is documentation of all our work.
        </p>
      </div>
      <div className="process-row">
        {items.map((item, index) => (
          <div key={index} className="process-column">
            <article className="process-box">
              <div className="process-inner-box">
                <h3>{item.title}</h3>
                <p className="process-links">
                  {Object.keys(item).slice(1).map((link, index2) => (
                    (link === "download") ? (
                      <a key={index2} className="process-icon-link" href="TurnoPromoFinal.mp4" download>
                        {getIcon(link)}
                        <p className="process-icon-text">{link}</p>
                      </a>
                    ) : (
                      <a key={index2} className="process-icon-link" href={item[link]} alt={link}>
                        {getIcon(link)}
                        <p>{link}</p>
                      </a>
                    )
                  ))}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignProcess;
