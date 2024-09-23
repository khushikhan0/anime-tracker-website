import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <Link to="/" className="logo">
      betteranimelist
    </Link>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <Link to="/login">login</Link>
      </li>
      <li>
        <Link to="/main">main</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;