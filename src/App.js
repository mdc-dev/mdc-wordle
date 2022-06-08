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

  const settingModalFunction = () => {
    setSettingsModal(!settingsModal)
  }

  const modalFunction = () => {
    setToggleModal(!toggleModal)
  }

  const helpModalFunction = () => {
    setHelpModal(!helpModal)
  }


  console.log(toggleModal)
    return (
      <div className="App">
        <Nav functionToggle={modalFunction} functionHelpToggle={helpModalFunction} settingsModalFunction={settingModalFunction} />
        { helpModal ? <HelpModal helpModalFunction={helpModalFunction} /> : null }
        { settingsModal ? <SettingsModal settingsModalFunction={settingModalFunction} /> : null}
        <WordleContainer />
        <Keyboard functionToggle={modalFunction} toggleModal={toggleModal} />
      </div>
    )
  }


export default App;
