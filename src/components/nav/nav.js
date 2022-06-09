import React from 'react'
import './nav.scss'

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="n">
        <div className="left-side-navs">
          <ul className="nav-items">
            <li className="item"><i class="fa-solid fa-bars"></i></li>
            <li className="item"><i class="fa-solid fa-circle-question" onClick={() => props.functionHelpToggle()}></i></li>
          </ul>
          
        </div>
        <h3 className="wordle-title-nav">Wordle</h3>
        <div className="right-side-navs">
          <ul className="nav-items">
            <li className="item"><i class="fa-solid fa-chart-simple" onClick={() => props.functionToggle()}></i></li>
            <li className="item"><i class="fa-solid fa-gear" onClick={() => props.settingsModalFunction()}></i></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav