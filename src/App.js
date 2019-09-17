import React from "react";
import "./App.css";
import hookActions from "./actions/hookActions";
import languageContext from "./contexts/languageContext";

import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
import Input from "./components/Input";
import LanguagePicker from "./components/LanguagePicker";

const initialState = {
  secretWord: "",
  language: "en"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    case "setLanguage":
      return { ...state, language: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setSecretWord = secretWord =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  const setLanguage = language =>
    dispatch({ type: "setLanguage", payload: language });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return <div data-test="spinner">Spinning......</div>;
  }

  return (
    <div data-test="component-app">
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage}/>
        <Input secretWord={state.secretWord} />
      </languageContext.Provider>
    </div>
  );
}

export default App;
