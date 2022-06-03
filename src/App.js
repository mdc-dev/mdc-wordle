import './App.css';
import WordleContainer from './components/wordle-structure/wordle'
import Nav from './components/nav/nav';
import Keyboard from './components/keyboard/keyboard';
import Modal from './components/end-modal/end-modal';

function App() {

  const word = 'HELLO';

  const state = {
    gamesPlayed: 0,
    winPercentage: 100,
    longestWinStreak: 0,
    currentWinStreak: 0,
    gameScore: 0,
    scoreHistory: {
      'a': 7,
      'b': 0,
      'c': 0,
      'd': 0,
      'e': 0,
      'f': 0
  }
  }


  return (
    <div className="App">
      <Nav />
      <WordleContainer />
      <Keyboard word={word}/>
      <Modal props={state}/>
    </div>
  );
}

export default App;
