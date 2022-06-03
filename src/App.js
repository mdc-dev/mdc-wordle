import './App.css';
import WordleContainer from './components/wordle-structure/wordle'
import Nav from './components/nav/nav';
import Keyboard from './components/keyboard/keyboard';
import Modal from './components/end-modal/end-modal';

function App() {

  const word = 'HELLO';

  return (
    <div className="App">
      <Nav />
      <WordleContainer />
      <Keyboard word={word}/>
      <Modal />
    </div>
  );
}

export default App;
