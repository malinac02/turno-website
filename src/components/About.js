import "./About.css";

function About() {
  return (
    <div className="content">
      <h2>About</h2>
      <h5>Our Concept Video</h5>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/v4gpvESwjq4?si=Y6twkmt2yCCPUcJz"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="actions stacked">
        <a href="TurnoPromoFinal.mp4" download>
          Download Video
        </a>
      </div>
    </div>
  );
}

export default About;
