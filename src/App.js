import React from 'react';
import './App.css';
import Congrats from './components/Congrats'
import GuessedWords from './components/GuessedWords'

const guessedWords = [
  { guessedWord: "train", letterMatchCount: 3 },
  { guessedWord: "agile", letterMatchCount: 1 },
  { guessedWord: "party", letterMatchCount: 5 },
];

function App() {

  return (
    <div data-test="component-app">
      <Congrats success={true}/>
      <GuessedWords guessedWords={[ { guessedWord: "train", letterMatchCount: 3 },]}/>
    </div>
  );
}

export default App;
