import React from 'react'
import './end-modal.scss'

const Modal = ({props}) => {
  
  const aLength = props.scoreHistory.a * 16;
  const closeModal = () => {
    document.getElementById('modal-layer').classList.add('hide')
  }
  return (
    <div className="modal-background-layer" id="modal-layer">
      <div className="modal">
        <div className="content">
            <div className="exit-modal"><i className="fa-solid fa-x" onClick={() => closeModal()}></i></div>
              <div className="modal-inner">
                <h2>Statistics</h2>
                <div className="numbers">
                  <div className="num-item played">
                    <div className="state-num play-count">{ props.gamesPlayed }</div>
                    <div className="sub">Played</div>
                  </div>
                  <div className="num-item win-per">
                    <div className="state-num win-per-count">{ props.winPercentage }</div>
                    <div className="sub">Win %</div>
                  </div>
                  <div className="num-item cur-streak">
                    <div className="state-num cur-streak-count">{ props.currentWinStreak }</div>
                    <div className="sub">Current Streak</div>
                  </div>
                  <div className="num-item long-streak">
                    <div className="state-num long-streak-count">{ props.longestWinStreak }</div>
                    <div className="sub">Max Streak</div>
                  </div>
                </div>
                <div className="scores">
                  <h2>Score Distribution</h2>
                  <ol className="score-rows">
                    <li className="score" style={{width: aLength}} id="score-item-1"><span className="overall-score">{ props.scoreHistory.a }</span></li>
                    <li className="score" id="score-item-2"><span className="overall-score">{ props.scoreHistory.b }</span></li>
                    <li className="score" id="score-item-3"><span className="overall-score">{ props.scoreHistory.c }</span></li>
                    <li className="score" id="score-item-4"><span className="overall-score">{ props.scoreHistory.d }</span></li>
                    <li className="score" id="score-item-5"><span className="overall-score">{ props.scoreHistory.e }</span></li>
                    <li className="score" id="score-item-6"><span className="overall-score">{ props.scoreHistory.f }</span></li>
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