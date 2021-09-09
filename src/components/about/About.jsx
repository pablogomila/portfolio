import './about.scss'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
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
            <img className="stack" src={Tail} alt=""></img>
            <p className="stacktext">Tailwind</p>
            <img className="stack" src={Sql} alt=""></img>
            <p className="stacktext">SQL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
