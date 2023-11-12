import './Home.css';
import CasinoIcon from '@mui/icons-material/Casino';
import TurnoLogo from "../logo.png";
import TurnoHomeScreen from "../TurnoHomeScreen.png"


function Home() {
  return (
    <div>
      <div className="is-flex">
        <img src={TurnoHomeScreen} alt="Turno Home Screen" class="home-screen"/>
        <div>
          <CasinoIcon className="die-icon large" fontSize="medium"/>
          <h1>Turno</h1>
          <h4>Make every chore feel like a turn, not a toil.</h4>
          <p>brief description of turno</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
