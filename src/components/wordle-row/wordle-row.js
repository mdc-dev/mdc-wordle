import React from 'react'
import './wordle-row.css'
import './wordle-row.scss'

const WordleRow = ({id}) => {
  return (
    <div className="row" id={id}>
        <div className="letter-entry" data-count="1"></div>
        <div className="letter-entry" data-count="2"></div>
        <div className="letter-entry" data-count="3"></div>
        <div className="letter-entry" data-count="4"></div>
        <div className="letter-entry" data-count="5"></div>
    </div>
  )
}

export default WordleRow