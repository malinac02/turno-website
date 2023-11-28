import "./Team.css";
import MalinaHeadshot from "../images/MalinaHeadshot.png";

function Team() {
  const teammates = [
    {
      name: "Cecilia Conde",
      role: "Designer & Developer",
      image: MalinaHeadshot,
    },
    {
      name: "Malina Calarco",
      role: "Designer & Developer",
      image: MalinaHeadshot,
    },
    {
      name: "Nazanin Soltan",
      role: "Designer & Developer",
      image: MalinaHeadshot,
    },
    {
      name: "Pedro Civita",
      role: "Designer & Developer",
      image: MalinaHeadshot,
    },
  ];

  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="team-row">
        {teammates.map((teammate, index) => (
          <div className="teammate-container" key={index}>
            <div className="profile-image-container">
              <img
                src={teammate.image}
                alt={"Image of " + teammate.name}
                className="profile-image"
              />
            </div>
            <h2>{teammate.name}</h2>
            <h4>{teammate.role}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
