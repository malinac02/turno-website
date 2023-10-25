import './Navbar.css';
import CasinoIcon from '@mui/icons-material/Casino';
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <CasinoIcon className="die-icon" fontSize="medium"/>
        <Link className="navbar-text" to="home" spy={true} smooth={true} offset={0} duration={500}>Turno</Link>
      </div>
      <ul className="navbar-right">
        <li className="navbar-li">
          <Link className="navbar-text" to="about" spy={true} smooth={true} offset={-48} duration={500}>About</Link>
        </li>
        <li className="navbar-li">
          <Link className="navbar-text" to="process" spy={true} smooth={true} offset={-48} duration={500}>Process</Link>
        </li>
        <li className="navbar-li">
          <Link className="navbar-text" to="prototype" spy={true} smooth={true} offset={-48} duration={500}>Prototype</Link>
        </li>
        <li className="navbar-li">
          <Link className="navbar-text" to="team" spy={true} smooth={true} offset={-48} duration={500}>Team</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
