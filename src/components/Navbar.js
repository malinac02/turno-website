import './Navbar.css';
import CasinoIcon from '@mui/icons-material/Casino';
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <CasinoIcon className="die-icon" fontSize="medium"/>
        <Link className="navbar-logo" to="home" spy={true} smooth={true} offset={0} duration={500}>turno</Link>
      </div>
      <ul className="navbar-right">
        <li className="navbar-li">
          <Link className="navbar-link" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
        </li>
        <li className="navbar-li">
          <Link className="navbar-link" to="features" spy={true} smooth={true} offset={0} duration={500}>Features</Link>
        </li>
        <li className="navbar-li">
          <Link className="navbar-link" to="design-process" spy={true} smooth={true} offset={0} duration={500}>Design Process</Link>
        </li>
        <li className="navbar-li">
          <Link className="navbar-link" to="team" spy={true} smooth={true} offset={0} duration={500}>Team</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
