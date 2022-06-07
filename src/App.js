import './App.css';
import React, {useState} from 'react'
import WordleContainer from './components/wordle-structure/wordle'
import HelpModal from './components/help-modal/help-modal'
import Nav from './components/nav/nav';
import Keyboard from './components/keyboard/keyboard';

const App = () => {

  const [toggleModal, setToggleModal] = useState(false);
  const [helpModal, setHelpModal] = useState(true);

  const modalFunction = () => {
    toggleModal ? setToggleModal(false) : setToggleModal(true);
    console.log('clicked')
  }

  const helpModalFunction = () => {
    helpModal ? setHelpModal(false) : setHelpModal(true);
  }

  console.log(toggleModal)
    return (
      <div className="App">
        <Nav functionToggle={modalFunction} functionHelpToggle={helpModalFunction}/>
        { helpModal ? <HelpModal helpModalFunction={helpModalFunction} /> : null }
        <WordleContainer />
        <Keyboard functionToggle={modalFunction} toggleModal={toggleModal} />
      </div>
    )
  }


export default App;
