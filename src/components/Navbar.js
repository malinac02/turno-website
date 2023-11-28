import './Navbar.css';
import CasinoIcon from '@mui/icons-material/Casino';
import { Link } from 'react-scroll'

function Navbar({ currentSection }) {
  let navbarClass = "navbar-container";
  if (currentSection === "home" || currentSection === "features" || currentSection === "team") {
    navbarClass += " white-navbar";
  } else {
    navbarClass += " pink-navbar";
  }

  return (
    <div className={navbarClass} >
      <Link className="navbar-logo navbar-left" to="home" spy={true} smooth={true} offset={0} duration={500}>
        <CasinoIcon className="die-icon" fontSize="default"/>
        turno
      </Link>
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
