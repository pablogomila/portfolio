import './navbar.scss'
import { Mail, PhoneAndroid } from '@material-ui/icons'

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <h2>Pablo Gomila - FullStack Developer</h2>
        </div>
        <div className="center">
          <Mail className="icon" />
          <span>pablogomila@protonmail.com</span>
          <PhoneAndroid className="icon" />
          <span>+54-3472-593825</span>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
