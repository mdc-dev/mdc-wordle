import Modal from '../end-modal/end-modal'
import React, { useState } from 'react'
import './keyboard.scss'

const Keyboard = () => {

    const words = ['HELLO', 'FOCUS', 'SMART'];

    let gc = window.localStorage.getItem('GAME_COUNT') || 0;
    let gw = window.localStorage.getItem('GAMES_WON') || 0;
    let cws = window.localStorage.getItem('CURRENT_WIN_STREAK') || 0;
    let mws = window.localStorage.getItem('MAX_WIN_STREAK') || 0;

    let aScore = window.localStorage.getItem('A_SCORE') || 0;
    let bScore = window.localStorage.getItem('B_SCORE') || 0;
    let cScore = window.localStorage.getItem('C_SCORE') || 0;
    let dScore = window.localStorage.getItem('D_SCORE') || 0;
    let eScore = window.localStorage.getItem('E_SCORE') || 0;
    let fScore = window.localStorage.getItem('F_SCORE') || 0;

    const [gameScore, setGameScore] = useState(0);
    const [currentWinStreak, setCurrentWinStreak] = useState(parseInt(cws));
    const [maxWinStreak, setMaxWinStreak] = useState(parseInt(mws));
    const [gamesWon, setGamesWon] = useState(parseInt(gw))
    const [gameCount, setGameCount] = useState(parseInt(gc));
    const [rowIterator, setRowIterator] = useState(1);
    const [letterIterator, setLetterIterator] = useState(0);
    const [scores, setScores] = useState({a: aScore, b: bScore, c: cScore, d: dScore, e: eScore, f: fScore})



    let word = words[gameCount];

    const keyClick = (e) => {
        let currentRow = document.getElementById(rowIterator);
        let letterArr = currentRow.children;
        if(letterIterator < 6) {
            letterArr[letterIterator].innerHTML = e.target.innerHTML;
            setLetterIterator((prev) => prev + + 1);
        }
    }

    const enterClick = () => {
        let answerLetters = [...document.getElementById(rowIterator).children];
        let answer = [];
        answerLetters.forEach(letter => {
            answer.push(letter.innerHTML);
        })
        const wordArr = word.split('');

        if (letterIterator === 5 && answer.join('') === wordArr.join('')) {
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
            setLetterIterator(0);

            setGameScore(rowIterator - 1)
            setGameCount((prev) => prev + 1);
            setGamesWon((prev) => prev + 1);
            setCurrentWinStreak((prev) => prev + 1);
            setRowIterator(1);
            window.localStorage.setItem('GAME_COUNT', JSON.stringify(gameCount + 1));
            window.localStorage.setItem('GAMES_WON', JSON.stringify(gamesWon + 1));
            window.localStorage.setItem('CURRENT_WIN_STREAK', JSON.stringify(currentWinStreak + 1));

            document.getElementById('modal-layer').classList.remove('hide');

            const key = Object.keys(scores)[rowIterator - 1]
            const value = scores[key];

            setScores({...scores, [key]: value + 1});
            console.log(scores)

            

            if (currentWinStreak + 1 >= maxWinStreak) {
                setMaxWinStreak(currentWinStreak + 1)
            }

            window.localStorage.setItem('MAX_WIN_STREAK', JSON.stringify(maxWinStreak + 1));

        } else if (letterIterator === 5 && answer.join('') !== wordArr.join('') && rowIterator < 6) {
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

            setRowIterator((prev) => prev + 1);
            setLetterIterator(0);
            // setGameCount((prev) => prev + 1);
            // window.localStorage.setItem('GAME_COUNT', JSON.stringify(gameCount + 1))
            // window.localStorage.setItem('CURRENT_WIN_STREAK', JSON.stringify(0))
        }else {
            console.log("WRONG")
            console.log(letterIterator, rowIterator)
            setGameCount((prev) => prev + 1);
            setCurrentWinStreak(0)
            window.localStorage.setItem('GAME_COUNT', JSON.stringify(gameCount + 1))
            window.localStorage.setItem('CURRENT_WIN_STREAK', JSON.stringify(0));
            document.getElementById('modal-layer').classList.remove('hide');
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
                <button type='button' className="key button-large" onClick={(e) => enterClick(e)} id='enter'>Enter</button>
                <button type='button' className="key" id="Z" onClick={(e) => keyClick(e)}>Z</button>
                <button type='button' className="key" id="X" onClick={(e) => keyClick(e)}>X</button>
                <button type='button' className="key" id="C" onClick={(e) => keyClick(e)}>C</button>
                <button type='button' className="key" id="V" onClick={(e) => keyClick(e)}>V</button>
                <button type='button' className="key" id="B" onClick={(e) => keyClick(e)}>B</button>
                <button type='button' className="key" id="N" onClick={(e) => keyClick(e)}>N</button>
                <button type='button' className="key" id="M" onClick={(e) => keyClick(e)}>M</button>
                <button type='button' className="key button-large" id='delete'><i className="fa-solid fa-delete-left"></i></button>
            </div>
        </div>

        <Modal scores={scores} gameCount={gameCount} gamesWon={gamesWon} currentWinStreak={currentWinStreak} maxWinStreak={maxWinStreak} />
    </div>
  )
}

export default Keyboard