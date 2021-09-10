import './about.scss'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import Pablo from '../../assets/Pablo.jpg'
import Css from '../../assets/css.png'
import Html from '../../assets/html.png'
import Js from '../../assets/javascript.png'
import Node from '../../assets/node.png'
import Postgres from '../../assets/postgree.png'
import React from '../../assets/react.png'
import Redux from '../../assets/redux.png'
import Sass from '../../assets/sass.png'
import Sql from '../../assets/sql.png'
import Tail from '../../assets/tailwind.png'
import Trello from '../../assets/trello.png'
import Figma from '../../assets/figma.png'
import Git from '../../assets/github.png'
import VSC from '../../assets/vsc.png'
import Slack from '../../assets/slack.png'

const About = () => {
  return (
    <div className="about" id="about">
      <div className="left">
        <div class="glitch" data-text="ABOUT ME">
          ABOUT ME
          <PermIdentityIcon className="icon" />
        </div>
        <div class="card">
          <div class="image">
            <img src={Pablo} alt="" />
          </div>
          <div class="details">
            <div class="center">
              <p>
                After 14 years of working in the metalurgic industry, I felt it
                was time for a change.
                <br />
                <br />
                I finally wanted to follow my lifelong dream of becoming a
                developer and working in the IT industry.
                <br />
                <br />
                I dedicated all my time to learn everything I could to do so,
                it´s finally time.
                <br />
                <br />
                I´m ready to face the industry and say "Here I am, ready..."
              </p>
            </div>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/1fzhgRf1jxGAUaHL95lgBjcRqIARbuoSn/view?usp=sharing" target="_blank" rel="noreferrer" class="download">Download Resume / CV</a>
      </div>
      <div className="right">
        <div className="glitch" data-text="TECH STACK">
          TECH STACK
        </div>
        <div className="subglitch">
          <div className="stackcontainer1">
            <img className="stack" src={Js} alt=""></img>
            <p className="stacktext">Javascript</p>
            <img className="stack" src={Html} alt=""></img>
            <p className="stacktext">Html</p>
            <img className="stack" src={Css} alt=""></img>
            <p className="stacktext">CSS</p>
            <img className="stack" src={Node} alt=""></img>
            <p className="stacktext">NodeJS</p>
            <img className="stack" src={Postgres} alt=""></img>
            <p className="stacktext">PostgreSQL</p>
          </div>
          <div className="stackcontainer2">
            <img className="stack" src={React} alt=""></img>
            <p className="stacktext">ReactJS</p>
            <img className="stack" src={Redux} alt=""></img>
            <p className="stacktext">Redux</p>
            <img className="stack" src={Sass} alt=""></img>
            <p className="stacktext">Sass</p>
            <img className="stack" src={Tail} alt=""></img>
            <p className="stacktext">Tailwind</p>
            <img className="stack" src={Sql} alt=""></img>
            <p className="stacktext">SQL</p>
          </div>
          <div className="stackcontainer3">
            <img className="stack" src={Trello} alt=""></img>
            <p className="stacktext">Trello</p>
            <img className="stack" src={Figma} alt=""></img>
            <p className="stacktext">Figma</p>
            <img className="stack" src={Git} alt=""></img>
            <p className="stacktext">Github</p>
            <img className="stack" src={VSC} alt=""></img>
            <p className="stacktext">VSCode</p>
            <img className="stack" src={Slack} alt=""></img>
            <p className="stacktext">Slack</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
