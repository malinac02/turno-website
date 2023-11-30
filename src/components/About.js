import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <p className="about-description">
        <i>Turno</i> is a mobile app developed by a group of passionate Stanford students. <i>Turno</i> allows 
        users to input the activities they want to achieve, such as new things they want to try, habits they want
        to build, and tasks to accomplish. Users roll a dice every day to determine which of those tasks they 
        should tackle that day, allowing them to <b>overcome decision paralysis</b> and <b>establish long term habits.</b>
      </p>
      <h5 className="about-subtitle">Our Concept Video</h5>
      <iframe
        width="600"
        height="350"
        src="https://www.youtube.com/embed/v4gpvESwjq4?si=Y6twkmt2yCCPUcJz"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default About;
