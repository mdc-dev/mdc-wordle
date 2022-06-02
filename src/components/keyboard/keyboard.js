import React from 'react'
import './keyboard.scss'

const Keyboard = () => {
  return (
    <div className="keyboard-container">
        <div className="keyboard-keys">
            <div className="key-row">
                <button type='button' className="key">Q</button>
                <button type='button' className="key">W</button>
                <button type='button' className="key">E</button>
                <button type='button' className="key">R</button>
                <button type='button' className="key">T</button>
                <button type='button' className="key">Y</button>
                <button type='button' className="key">U</button>
                <button type='button' className="key">I</button>
                <button type='button' className="key">O</button>
                <button type='button' className="key">P</button>
            </div>
            <div className="key-row">
                <button type='button' className="key">A</button>
                <button type='button' className="key">S</button>
                <button type='button' className="key">D</button>
                <button type='button' className="key">F</button>
                <button type='button' className="key">G</button>
                <button type='button' className="key">H</button>
                <button type='button' className="key">J</button>
                <button type='button' className="key">K</button>
                <button type='button' className="key">L</button>
            </div>
            <div className="key-row">
                <button type='button' className="key button-large">Enter</button>
                <button type='button' className="key">Z</button>
                <button type='button' className="key">X</button>
                <button type='button' className="key">C</button>
                <button type='button' className="key">V</button>
                <button type='button' className="key">B</button>
                <button type='button' className="key">N</button>
                <button type='button' className="key">M</button>
                <button type='button' className="key button-large"><i class="fa-solid fa-delete-left"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Keyboard