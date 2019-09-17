import React from "react";
import PropTypes from 'prop-types'
import languageContext from '../contexts/languageContext'
import stringsModule from '../helpers/strings'

function Congrats(props) {
  const language = React.useContext(languageContext)
  return (
    <>
      {props.success ? (
        <div data-test="component-congrats">
          <span data-test="congrats-message">{stringsModule.getStringByLanguage(language, 'congrats')}</span>
        </div>
      ) : (
        <div data-test="component-congrats">
          <div data-test="congrats-message"></div>
        </div>
      )}
    </>
  );
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats;
