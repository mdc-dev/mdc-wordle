import React from 'react'
import './settings-modal.scss'

const HelpModal = (props) => {
    console.log(props)
  return (
    <div className="help-modal-layer">
        <div className={"help-modal "  + (props.darkMode ? null : 'light')}>
            <span className="closeSettingsModal"><i class="fa-solid fa-x" onClick={() => props.settingsModalFunction()}></i></span>
            <h1>Settings</h1>
            <span className="split"></span>
            <div className="dark-theme-cont">
                <h2 className="dark">Dark Theme</h2>
                <div className="switch-container">
                    <label class="switch">
                    <input type="checkbox" checked={props.darkMode} onClick={() => props.toggleDarkMode()}/>
                        <span class="slider round"></span>
                    </label>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HelpModal