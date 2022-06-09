import React from 'react'
import './help-modal.scss'

const HelpModal = (props) => {
  return (
    <div className="help-modal-layer">
        <div className={props.isDark ? "help-modal" : "help-modal light"}>
            <span className="closeModal"><i class="fa-solid fa-x" onClick={() => props.helpModalFunction()}></i></span>
            <h1>How To Play</h1>
            <div className="instructions">
                <p>Guess the <span className='bold'>WORDLE</span> in six tries.</p>
                <p>Each guess must be a valid five-letter-word. Hit the enter button to submit.</p>
                <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            </div>
            <span className="split"></span>
            <div className="examples">
                <p><span className="bold">Examples</span></p>
                <div className="example-item-container">
                    <ul className="example">
                        <li className="ex-letter-green ex-letter">W</li>
                        <li className="ex-letter">E</li>
                        <li className="ex-letter">A</li>
                        <li className="ex-letter">R</li>
                        <li className="ex-letter">Y</li>
                    </ul>
                    <p>The letter <span className="bold">W</span> is in the word and the correct spot</p>
                </div>
                <div className="example-item-container">
                    <ul className="example">
                        <li className="ex-letter">P</li>
                        <li className="ex-letter-yellow ex-letter">I</li>
                        <li className="ex-letter">L</li>
                        <li className="ex-letter">L</li>
                        <li className="ex-letter">S</li>
                    </ul>
                    <p>The letter <span className="bold">I</span> is in the word but in the wrong spot</p>
                </div>
                <div className="example-item-container">
                    <ul className="example">
                        <li className="ex-letter">V</li>
                        <li className="ex-letter">A</li>
                        <li className="ex-letter">G</li>
                        <li className="ex-letter-gray ex-letter">U</li>
                        <li className="ex-letter">E</li>
                    </ul>
                    <p>The letter <span className="bold">U</span> is not in the word in any spot</p>
                </div>
            </div>
            <span className="split"></span>
            <div className="message">
                <p>Unlike NYT's <span className="bold">WORDLE</span> you dont have to wait 24 hours to play again. Just click next and you can play until your heart is content.</p>
            </div>
        </div>
    </div>
  )
}

export default HelpModal