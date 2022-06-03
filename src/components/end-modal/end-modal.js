import React from 'react'
import './end-modal.scss'

const Modal = () => {
  
  const closeModal = () => {
    document.getElementById('modal-layer').classList.add('hide')
  }
  return (
    <div className="modal-background-layer hide" id="modal-layer">
      <div className="modal">
        <div className="content">
            <div className="exit-modal"><i className="fa-solid fa-x" onClick={() => closeModal()}></i></div>
              <div className="modal-inner">
                <h1>Nice You did great</h1>
                <button className="play-next">Next</button>
              </div>
        </div>
      </div>
    </div>  
  )
}

export default Modal