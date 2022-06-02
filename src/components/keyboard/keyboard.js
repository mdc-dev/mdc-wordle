import React from 'react'
import './keyboard.scss'

const Keyboard = (word) => {
    const userAnswer = word;
    let rowIterator = 1;
    let letterIterator = 0;

    const keyClick = (e) => {
            let currentRow = document.getElementById(rowIterator);
            let letterArr = currentRow.children;
            if(letterIterator < 6) {
                letterArr[letterIterator].innerHTML = e.target.innerHTML;
                letterIterator ++;
            }
    }

    const enterClick = () => {
        if(letterIterator === 5) {
            let answerLetters = [...document.getElementById(rowIterator).children];
            let answer = [];
            answerLetters.forEach(letter => {
                answer.push(letter.innerHTML)
            })

            const wordArr = userAnswer.word.split('');

            answer.forEach((letter, i) => {
                if (letter === wordArr[i]) {
                    answerLetters[i].classList.add('green')
                } else if (letter !== wordArr[i] && wordArr.includes(letter)) {
                    answerLetters[i].classList.add('yellow')
                }
            })
            
            rowIterator ++;
            letterIterator = 0;

        } else {
            console.log('not at full length')
        }
    }

  return (
    <div className="keyboard-container">
        <div className="keyboard-keys">
            <div className="key-row">
                <button type='button' className="key" onClick={(e) => keyClick(e)}>Q</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>W</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>E</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>R</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>T</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>Y</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>U</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>I</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>O</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>P</button>
            </div>
            <div className="key-row">
                <button type='button' className="key" onClick={(e) => keyClick(e)}>A</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>S</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>D</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>F</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>G</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>H</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>J</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>K</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>L</button>
            </div>
            <div className="key-row">
                <button type='button' className="key button-large" onClick={enterClick}>Enter</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>Z</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>X</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>C</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>V</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>B</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>N</button>
                <button type='button' className="key" onClick={(e) => keyClick(e)}>M</button>
                <button type='button' className="key button-large"><i className="fa-solid fa-delete-left"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Keyboard