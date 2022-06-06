import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
    <div className="nav">
      <div className="left-side-navs">
        <ul className="nav-items">
          <li className="item"><i class="fa-solid fa-bars"></i></li>
          <li className="item"><i class="fa-solid fa-circle-question"></i></li>
        </ul>
        
      </div>
      <h3 className="wordle-title-nav">Wordle</h3>
      <div className="right-side-navs">
        <ul className="nav-items">
          <li className="item"><i class="fa-solid fa-chart-simple"></i></li>
          <li className="item"><i class="fa-solid fa-gear"></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav