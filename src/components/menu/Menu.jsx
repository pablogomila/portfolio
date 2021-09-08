import React from 'react'
import "./menu.scss"

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <a href="#intro" className="link" onClick={()=>setMenuOpen(false)}>
        Intro
      </a>
      <a href="#about" className="link" onClick={()=>setMenuOpen(false)}>
        About
      </a>
      <a href="#projects" className="link" onClick={()=>setMenuOpen(false)}>
        Projects
      </a>
      <a href="#contact" className="link" onClick={()=>setMenuOpen(false)}>
        Contact
      </a>
    </div>
  )
}

export default Menu
