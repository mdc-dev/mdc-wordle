import React from 'react'
import WordleRow from '../wordle-row/wordle-row';
import './wordle.scss'

const WordleContainer = (props) => {
  console.log(props.isDark)
  return (
    <div className="wordle-container">
        <div className="six-stack">
            <WordleRow isDark={props.isDark} rowId={1}/>
            <WordleRow isDark={props.isDark} rowId={2}/>
            <WordleRow isDark={props.isDark} rowId={3}/>
            <WordleRow isDark={props.isDark} rowId={4}/>
            <WordleRow isDark={props.isDark} rowId={5}/>
            <WordleRow isDark={props.isDark} rowId={6}/>
        </div>
    </div>
  )
}

export default WordleContainer