import React from 'react'
import './settings-modal.scss'

const HelpModal = (props) => {

  return (
    <div className={"help-modal-layer " + (props.isDark ? null : 'light')}>
        <div className={"settings-modal "  + (props.isDark ? null : 'light')}>
            <span className="closeSettingsModal"><i class="fa-solid fa-x" onClick={() => props.settingsModalFunction()}></i></span>
            <h2>Settings</h2>
            <span className="split"></span>
            <div className="dark-theme-cont">
                <h2 className="dark">Dark Theme</h2>
                <div className="switch-container">
                    <label class="switch">
                    <input id="dark" type="checkbox" checked={props.isDark} onChange={(e) => props.toggleLightDark(e)}/>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <span className="split"></span>
            <div className="contrast-theme-cont">
                <h2 className="contrast">High Contrast Mode</h2>
                <div className="switch-container">
                    <label class="switch">
                    <input id="contrast" type="checkbox" checked={props.hiContrast} onChange={(e) => props.toggleHiContrast(e)}/>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <span className="split"></span>
            <div className="contact-theme-cont">
                <h2 className="feedback">
                    Feedback
                </h2>
                <a href="mailto: mcourtdev@gmail.com" className="link">Email</a>
            </div>
        </div>
    </div>
  )
}

export default HelpModal