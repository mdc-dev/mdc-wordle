import React from 'react'
import './end-modal.scss'

const Modal = (props) => {
  const objectArray = [];
  Object.keys(props.scores).forEach(key => {
    objectArray.push({[key]: props.scores[key], key: props.scores[key]})
  });

  let newArr = objectArray.sort((a,b) => a.key - b.key);
  let orderedArr =[];
  newArr.forEach(obj => {
    orderedArr.push(Object.keys(obj)[0]) 
  });
  let numberArr = [];
  newArr.forEach(obj => {
    if(!numberArr.includes(obj.key)) {
      numberArr.push(obj.key)
    }
  })

  
  return (
    <div className="modal-background-layer hide" id="modal-layer">
      <div className="modal">
        <div className="content">
            <div className="exit-modal"><i className="fa-solid fa-x"></i></div>
              <div className="modal-inner">
                <h2>Statistics</h2>
                <div className="numbers">
                  <div className="num-item played">
                    <div className="state-num play-count">{ props.gameCount }</div>
                    <div className="sub">Played</div>
                  </div>
                  <div className="num-item win-per">
                    <div className="state-num win-per-count">{ (props.gamesWon / props.gameCount) === 1 ? 100 : props.gamesWon / props.gameCount * 10 } </div>
                    <div className="sub">Win %</div>
                  </div>
                  <div className="num-item cur-streak">
                    <div className="state-num cur-streak-count">{props.currentWinStreak}</div>
                    <div className="sub">Current Streak</div>
                  </div>
                  <div className="num-item long-streak">
                    <div className="state-num long-streak-count">{props.maxWinStreak}</div>
                    <div className="sub">Max Streak</div>
                  </div>
                </div>
                <div className="scores">
                  <h2>Score Distribution</h2>
                  <ol className="score-rows">
                    <li style={{ width: (numberArr.indexOf(Object.values(props.scores)[0]) * (100 / numberArr.length) - 10) + '%' }} className="score" id="score-item-1"><span className="overall-score"></span>{props.scores.a }</li>
                    <li style={{ width: (numberArr.indexOf(Object.values(props.scores)[1]) * (100 / numberArr.length) - 10) + '%' }} className="score" id="score-item-2"><span className="overall-score"></span>{props.scores.b }</li>
                    <li style={{ width: (numberArr.indexOf(Object.values(props.scores)[2]) * (100 / numberArr.length) - 10) + '%' }} className="score" id="score-item-3"><span className="overall-score"></span>{props.scores.c }</li>
                    <li style={{ width: (numberArr.indexOf(Object.values(props.scores)[3]) * (100 / numberArr.length) - 10) + '%' }} className="score" id="score-item-4"><span className="overall-score"></span>{props.scores.d }</li>
                    <li style={{ width: (numberArr.indexOf(Object.values(props.scores)[4]) * (100 / numberArr.length) - 10) + '%' }} className="score" id="score-item-5"><span className="overall-score"></span>{props.scores.e }</li>
                    <li style={{ width: (numberArr.indexOf(Object.values(props.scores)[5]) * (100 / numberArr.length) - 10) + '%' }} className="score" id="score-item-6"><span className="overall-score"></span>{props.scores.f }</li>
                  </ol>
                </div>
                <button className="play-next">Next</button>
              </div>
        </div>
      </div>
    </div>  
  )
}

export default Modal