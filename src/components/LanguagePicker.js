import React from 'react'
import PropTypes from 'prop-types'

function LanguagePicker({ setLanguage }) {
  const languages = [
    { code: 'en', symbol: 'FREEDOM'},
    { code: 'emoji', symbol: 'YOLO'},
    { code: 'mermish', symbol: 'BUBBLES'},
  ]

  const languageIcons = languages.map(lang => (
    <span onClick={() => setLanguage(lang.code)} key={lang.code} data-test="language-icon">
      {lang.symbol}
    </span>
  ))

  return (
    <div data-test="component-language-picker">
      {languageIcons}
    </div>
  )
}

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired
}

export default LanguagePicker
