import './about.scss'
import techstack from '../../assets/techstack.gif'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'

const About = () => {
  return (
    <div className="about" id="about">
      <div className="left">
        <div class="glitch" data-text="ABOUT ME">
          ABOUT ME
          <PermIdentityIcon className="icon" />
        </div>
      </div>
      <div className="right">
        <div class="glitch" data-text="TECH STACK">
          TECH STACK
          <PermIdentityIcon className="icon" />
        </div>
        <img src={techstack} alt="" />
      </div>
    </div>
  )
}

export default About
