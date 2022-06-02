import React from 'react'
import WordleRow from '../wordle-row/wordle-row';
import './wordle.scss'

const WordleContainer = () => {
  return (
    <div className="wordle-container">
        <div className="six-stack">
            <WordleRow />
            <WordleRow />
            <WordleRow />
            <WordleRow />
            <WordleRow />
            <WordleRow />
        </div>
    </div>
  )
}

export default WordleContainer