import "./DesignProcess.css";
import { FaFilePdf, FaFilePowerpoint, FaFileWord, FaYoutube, FaFigma, FaFile, FaMobile, FaFileImage, FaFileArrowDown } from 'react-icons/fa6';
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
import ConceptVideo from "../videos/TurnoConceptVideo.mp4";

function DesignProcess() {
  const items = [
    { 
      title: "Needfinding", 
      subtitle1: "Slides:",
      pdf: A1pdf, 
      pptx: A1ppt,
    },
    { 
      title: "POV, HMW, Experience Prototypes", 
      subtitle1: "Slides:",
      pdf: A2pdf, 
      pptx: A2ppt,
    },
    { 
      title: "Concept Video", 
      subtitle1: "Slides:",
      pdf: A4pdf,
      pptx: A4ppt,
      subtitle2: "Video:",
      youtube: "https://youtu.be/UodGwjzAHGI?si=aYD30W_8lNBmDW0v",
      save: ConceptVideo,
    },
    { 
      title: "Lo-Fidelity Prototype", 
      subtitle1: "Slides:",
      pdf: A5pdf, 
      pptx: A5ppt,
    },
    { 
      title: "Medium-Fidelity Prototype", 
      subtitle1: "Slides:",
      pdf: A6pdf, 
      pptx: A6ppt, 
      subtitle2: "Med-Fi:",
      figma: "https://www.figma.com/file/RDkSKAbDRIfpmg8ZrJzkEM/A6-Turno-Med-Fi-Prototype?type=design&node-id=1-451&mode=design&t=aLDPeAQr758KHLLV-0",
      readme: A6readme,
    },
    {
      title: "High-Fidelity Prototype", 
      subtitle1: "Slides:",
      pdf: null,
      pptx: null,
      subtitle2: "Hi-Fi:",
      readme: null,
      expo: null,
    },
    {
      title: "Heuristic Evalutation Synthesis", 
      subtitle1: "Report:",
      pdf: null,
      docx: null,
    },
    {
      title: "Poster, Pitch, & Demo Video", 
      subtitle1: "Pitch Slide:",
      pdf: null,
      pptx: null,
      subtitle2: "Poster:",
      script: null,
      poster: null,
      subtitle3: "Demo Video:",
      demo: null,
    },
    {
      title: "Final Report", 
      subtitle1: "Report:",
      pdf: null,
      docx: null,
    }
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'pdf':
        return <FaFilePdf className="process-icon-pdf"/>;
      case 'pptx':
        return <FaFilePowerpoint className="process-icon"/>;
      case 'youtube':
      case 'demo':
        return <FaYoutube className="process-icon"/>;
      case 'figma':
        return <FaFigma className="process-icon"/>;
      case 'expo':
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
        return <FaFileImage className="process-icon"/>;
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
              <div className="process-box-title">
                <h3>{item.title}</h3>
              </div>
              <div className="process-links-container">
                  <p className="process-links">
                    <div className="process-text">{item.subtitle1}</div>
                    {Object.keys(item).slice(2, 4).map((link, index2) => (
                      (link === "pptx" || link === "docx") ? (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={item[link]} 
                          alt={link}
                        >
                          {getIcon(link)}
                          <p>{link}</p>
                        </a>
                      ) : (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={item[link]} 
                          alt={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getIcon(link)}
                          <p>{link}</p>
                        </a>
                      )
                    ))}
                  </p>
                  <p className="process-links">
                    <div className="process-text">{item.subtitle2}</div>
                    {Object.keys(item).slice(5, 7).map((link, index2) => (
                      (link === "save") ? (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={ConceptVideo} 
                          alt={link} 
                          download
                        >
                          {getIcon(link)}
                          <p className="process-icon-text">{link}</p>
                        </a>
                      ) : (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={item[link]} 
                          alt={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getIcon(link)}
                          <p>{link}</p>
                        </a>
                      )
                    ))}
                  </p>
                  <p className="process-links">
                    <div className="process-text">{item.subtitle3}</div>
                    {Object.keys(item).slice(8).map((link, index2) => (
                      (link === "save") ? (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={ConceptVideo} 
                          alt={link} 
                          download
                        >
                          {getIcon(link)}
                          <p className="process-icon-text">{link}</p>
                        </a>
                      ) : (
                        <a key={index2} 
                          className="process-icon-link" 
                          href={item[link]} 
                          alt={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
