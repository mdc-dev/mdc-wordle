import React from 'react'
import './wordle-row.scss'

const WordleRow = ({id}) => {
  return (
    <div className="row" id={id}>
        <div className="letter-entry"></div>
        <div className="letter-entry"></div>
        <div className="letter-entry"></div>
        <div className="letter-entry"></div>
        <div className="letter-entry"></div>
    </div>
  )
}

export default WordleRow