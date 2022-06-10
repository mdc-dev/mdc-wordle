import './App.css';
import React, {useState} from 'react'
import WordleContainer from './components/wordle-structure/wordle'
import HelpModal from './components/help-modal/help-modal'
import SettingsModal from './components/settings-modal/settings-modal';
import Nav from './components/nav/nav';
import Keyboard from './components/keyboard/keyboard';

const App = () => {

  const [toggleModal, setToggleModal] = useState(false);
  const [helpModal, setHelpModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [hiContrast, setHiContrast] = useState(true);

  const settingModalFunction = () => {
    setSettingsModal(!settingsModal)
  }

  const modalFunction = () => {
    setToggleModal(!toggleModal)
  }

  const helpModalFunction = () => {
    setHelpModal(!helpModal)
  }

  const toggleLightDark = (e) => {
    e.target.checked = !e.target.checked;
    setIsDark(!isDark);
  }

  const toggleHiContrast = (e) => {
    e.target.checked = !e.target.checked;
    setHiContrast(!hiContrast);
  }

    return (
      <div className={isDark ? "App" : "App light"}>
        <Nav functionToggle={modalFunction} isDark={isDark} functionHelpToggle={helpModalFunction} settingsModalFunction={settingModalFunction} />
        { helpModal ? <HelpModal helpModalFunction={helpModalFunction} isDark={isDark}/> : null }
        { settingsModal ? <SettingsModal toggleHiContrast={toggleHiContrast} hiContrast={hiContrast} toggleLightDark={toggleLightDark} isDark={isDark} settingsModalFunction={settingModalFunction} /> : null}
        <WordleContainer isDark={isDark}/>
        <Keyboard functionToggle={modalFunction} toggleModal={toggleModal} isDark={isDark} hiContrast={hiContrast}/>
      </div>
    )
  }


export default App;
