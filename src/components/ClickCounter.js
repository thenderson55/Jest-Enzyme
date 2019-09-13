import React from 'react'

function ClickCounter() {
  return (
    <div data-test="component-click">
      <h1 data-test="counter-display">The counter is currently</h1>
      <button data-test="increment-button"> </button>
    </div>
  )
}

export default ClickCounter
