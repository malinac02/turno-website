import './Home.css';
import CasinoIcon from '@mui/icons-material/Casino';
import TurnoLogo from "../logo.png";
import TurnoHomeScreen from "../TurnoHomeScreen.png"


function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Turno</h1>
          <h4 className="home-subtitle">Make every chore feel like a turn, not a toil.</h4>
          <p className="home-subtitle2">Brief description of Turno. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="iphone-image-container">
          <img src={TurnoHomeScreen} alt="Turno Home Screen" className="iphone-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
