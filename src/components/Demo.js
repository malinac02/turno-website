import "./About.css";
import "./Demo.css";

function Demo() {
  return (
    <div className="demo-container">
      <div className="about-top">
        <h2 className="demo-title">Turno Demo</h2>
        <p className="demo-description">
          Check out a demo of <span className="about-description-bold">Turno</span> to see the app in action.
        </p>
      </div>
      <div className="about-video-container">
        <iframe
          width="550"
          height="300"
          src="https://www.youtube.com/embed/v4gpvESwjq4?si=Y6twkmt2yCCPUcJz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="about-video"
        />
      </div>
    </div>
  );
}

export default Demo;
