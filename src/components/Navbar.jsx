import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Praveen MC</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#journey">Journey</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;