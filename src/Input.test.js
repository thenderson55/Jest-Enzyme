import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from './testUtils'

import Input from './Input'

const setup = () => {
  return shallow(<Input/>)
}

it('should render component without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-input')
  expect(component.length).toBe(1)
})