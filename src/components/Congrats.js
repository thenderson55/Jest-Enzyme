import React from "react";
import propTypes from 'prop-types'

function Congrats(props) {
  return (
    <>
      {props.success ? (
        <div data-test="component-congrats">
          <span data-test="congrats-message">Congratulations</span>
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
  success: propTypes.bool.isRequired
}

export default Congrats;
