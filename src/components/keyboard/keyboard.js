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
                let key = document.getElementById(letter);
                if (letter === wordArr[i]) {
                    answerLetters[i].classList.add('green');
                    if(!key.classList.contains('green')) {
                        key.classList.add('green')
                    }
                } else if (letter !== wordArr[i] && wordArr.includes(letter)) {
                    answerLetters[i].classList.add('yellow');
                    if (!key.classList.contains('yellow')) {
                        key.classList.add('yellow')
                    }
                } else {
                    if (!key.classList.contains('grey')) {
                        key.classList.add('grey')
                    }
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
                <button type='button' className="key" id="Q" onClick={(e) => keyClick(e)}>Q</button>
                <button type='button' className="key" id="W" onClick={(e) => keyClick(e)}>W</button>
                <button type='button' className="key" id="E" onClick={(e) => keyClick(e)}>E</button>
                <button type='button' className="key" id="R" onClick={(e) => keyClick(e)}>R</button>
                <button type='button' className="key" id="T" onClick={(e) => keyClick(e)}>T</button>
                <button type='button' className="key" id="Y" onClick={(e) => keyClick(e)}>Y</button>
                <button type='button' className="key" id="U" onClick={(e) => keyClick(e)}>U</button>
                <button type='button' className="key" id="I" onClick={(e) => keyClick(e)}>I</button>
                <button type='button' className="key" id="O" onClick={(e) => keyClick(e)}>O</button>
                <button type='button' className="key" id="P" onClick={(e) => keyClick(e)}>P</button>
            </div>
            <div className="key-row">
                <button type='button' className="key" id="A" onClick={(e) => keyClick(e)}>A</button>
                <button type='button' className="key" id="S" onClick={(e) => keyClick(e)}>S</button>
                <button type='button' className="key" id="D" onClick={(e) => keyClick(e)}>D</button>
                <button type='button' className="key" id="F" onClick={(e) => keyClick(e)}>F</button>
                <button type='button' className="key" id="G" onClick={(e) => keyClick(e)}>G</button>
                <button type='button' className="key" id="H" onClick={(e) => keyClick(e)}>H</button>
                <button type='button' className="key" id="J" onClick={(e) => keyClick(e)}>J</button>
                <button type='button' className="key" id="K" onClick={(e) => keyClick(e)}>K</button>
                <button type='button' className="key" id="L" onClick={(e) => keyClick(e)}>L</button>
            </div>
            <div className="key-row">
                <button type='button' className="key button-large" onClick={enterClick}>Enter</button>
                <button type='button' className="key" id="Z" onClick={(e) => keyClick(e)}>Z</button>
                <button type='button' className="key" id="X" onClick={(e) => keyClick(e)}>X</button>
                <button type='button' className="key" id="C" onClick={(e) => keyClick(e)}>C</button>
                <button type='button' className="key" id="V" onClick={(e) => keyClick(e)}>V</button>
                <button type='button' className="key" id="B" onClick={(e) => keyClick(e)}>B</button>
                <button type='button' className="key" id="N" onClick={(e) => keyClick(e)}>N</button>
                <button type='button' className="key" id="M" onClick={(e) => keyClick(e)}>M</button>
                <button type='button' className="key button-large"><i className="fa-solid fa-delete-left"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Keyboard