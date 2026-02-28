import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Yuvashri Ravindran</h2>
      <div className="links">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;