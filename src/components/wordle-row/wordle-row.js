import React from 'react'
import './wordle-row.css'
import './wordle-row.scss'

const WordleRow = (props) => {
  let prevAnswer = props.guess;
  console.log(props.isDark)
  return (
    <div className='row' id={props.rowId}>
        <div className={props.isDark ? 'letter-entry' : 'letter-entry dark-text'} data-count="1">{prevAnswer[0]}</div>
        <div className={props.isDark ? 'letter-entry' : 'letter-entry dark-text'} data-count="2">{prevAnswer[2]}</div>
        <div className={props.isDark ? 'letter-entry' : 'letter-entry dark-text'} data-count="3">{prevAnswer[4]}</div>
        <div className={props.isDark ? 'letter-entry' : 'letter-entry dark-text'} data-count="4">{prevAnswer[6]}</div>
        <div className={props.isDark ? 'letter-entry' : 'letter-entry dark-text'} data-count="5">{prevAnswer[8]}</div>
    </div>
  )
}

export default WordleRow