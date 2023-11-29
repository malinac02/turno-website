import "./About.css";

function About() {
  return (
    <div className="content">
      <h2>About</h2>
      <h6>From the Portuguese word for shift, or round, and the idea of it being your turn. 
        <b><i>Turno</i></b> Your turn to roll the die and take agency of your life. 
      </h6>
      <h5>Our Concept Video</h5>
      <iframe
        width="600"
        height="350"
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
