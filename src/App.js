import './App.css';
import WordleContainer from './components/wordle-structure/wordle'
import Nav from './components/nav/nav';
import Keyboard from './components/keyboard/keyboard';

function App() {

  const word = 'HELLO';

  return (
    <div className="App">
      <Nav />
      <WordleContainer />
      <Keyboard word={word}/>
    </div>
  );
}

export default App;
