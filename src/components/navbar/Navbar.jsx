import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="link">
            Intro
          </a>
          <a href="#about" className="link">
            About
          </a>
          <a href="#contact" className="link">
            Contact
          </a>
        </div>
        <div className="center"></div>
        <div className="right">
          <h1>Der</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
