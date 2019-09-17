import React from "react";
import PropTypes from "prop-types";

import languageContext from '../contexts/languageContext'
import stringsModule from '../helpers/strings'


function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState();
  const language = React.useContext(languageContext)

  return (
    <div data-test="component-input">
      <form>
        <input
          type="text"
          data-test="input-box"
          placeholder={stringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
          value={currentGuess}
          onChange={e => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          onClick={(e) => {
            e.preventDefault();
            // TODO: update guessedWords
            // TODO: check against secretWord and update success if needed
            setCurrentGuess("");
          }}
        >
          {stringsModule.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;
