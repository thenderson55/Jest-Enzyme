import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from './testUtils'

import Input from './Input'

const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord}/>)
}

it('should render component without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-input')
  expect(component.length).toBe(1)
})

it('should receive the correct props', () => {
  const expectedProps = { secretWord: 'party'}
  checkProps(Input, expectedProps)
})