import './App.css';
import React from 'react'
import WordleContainer from './components/wordle-structure/wordle'
import Nav from './components/nav/nav';
import Keyboard from './components/keyboard/keyboard';

const App = () => {
    return (
      <div className="App">
        <Nav />
        <WordleContainer />
        <Keyboard />
      </div>
    )
  }


export default App;
