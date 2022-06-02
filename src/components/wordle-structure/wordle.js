import React from 'react'
import WordleRow from '../wordle-row/wordle-row';
import './wordle.scss'

const WordleContainer = () => {
  return (
    <div className="wordle-container">
        <div className="six-stack">
            <WordleRow id= {1}/>
            <WordleRow id= {2}/>
            <WordleRow id= {3}/>
            <WordleRow id= {4}/>
            <WordleRow id= {5}/>
            <WordleRow id= {6}/>
        </div>
    </div>
  )
}

export default WordleContainer