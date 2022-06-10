import React from 'react'
import './wordle-row.css'
import './wordle-row.scss'

const WordleRow = (props) => {
  console.log(props)
  return (
    <div className='row' id={props.rowId}>
        <div className={props.isDark ? 'letter-entry' : 'letter-entry dark-text'} data-count="1"></div>
        <div className={props.isDark ? 'letter-entry' : 'letter-entry dark-text'} data-count="2"></div>
        <div className={props.isDark ? 'letter-entry' : 'letter-entry dark-text'} data-count="3"></div>
        <div className={props.isDark ? 'letter-entry' : 'letter-entry dark-text'} data-count="4"></div>
        <div className={props.isDark ? 'letter-entry' : 'letter-entry dark-text'} data-count="5"></div>
    </div>
  )
}

export default WordleRow