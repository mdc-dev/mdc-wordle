import React from 'react'
import WordleRow from '../wordle-row/wordle-row';
import './wordle.scss'

const WordleContainer = (props) => {
  let guessOne = localStorage.getItem('Guess_0') || ["", "", "", "", ""];
  let guessTwo = localStorage.getItem('Guess_1') || ["", "", "", "", ""];
  let guessThree = localStorage.getItem('Guess_2') || ["", "", "", "", ""];
  let guessFour = localStorage.getItem('Guess_3') || ["", "", "", "", ""];
  let guessFive = localStorage.getItem('Guess_4') || ["", "", "", "", ""];
  let guessSix = ["", "", "", "", ""];

  return (
    <div className="wordle-container">
        <div className="six-stack">
            <WordleRow isDark={props.isDark} guess={guessOne} rowId={1}/>
            <WordleRow isDark={props.isDark} guess={guessTwo} rowId={2}/>
            <WordleRow isDark={props.isDark} guess={guessThree} rowId={3}/>
            <WordleRow isDark={props.isDark} guess={guessFour} rowId={4}/>
            <WordleRow isDark={props.isDark} guess={guessFive} rowId={5}/>
            <WordleRow isDark={props.isDark} guess={guessSix} rowId={6}/>
        </div>
    </div>
  )
}

export default WordleContainer