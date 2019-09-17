import React from "react";
import "./App.css";
import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
import hookActions from "./actions/hookActions";

const guessedWords = [
  { guessedWord: "train", letterMatchCount: 3 },
  { guessedWord: "agile", letterMatchCount: 1 },
  { guessedWord: "party", letterMatchCount: 5 }
];

const initialState = {
  secretWord: null,
  language: "en"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setSecretWord = secretWord =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return (
    <div data-test="component-app">
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
