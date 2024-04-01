import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logoContainer">
        <Link to={"/"}>
          <img
            src="/images/Spire-Logo-Landscape-nobg.png"
            alt="Spire Treasury Logo"
          />
        </Link>
      </div>
      <div className="navOptions">
        <div className="option">
          <Link to={"/"}>
            <h2>About Us</h2>
          </Link>
        </div>
        <div className="option">
          <Link to={"/"}>
            <h2>Help</h2>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
