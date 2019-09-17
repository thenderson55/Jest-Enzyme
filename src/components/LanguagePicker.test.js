import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../testUtils'
import LanguagePicker from './LanguagePicker'


const mockSetLanguage = jest.fn()
const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage}/>)
}

test('should render without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-language-picker')
  expect(component.exists()).toBe(true)
})

test('should not throw warning with expected props', () => {
  checkProps(LanguagePicker, { setLanguage: jest.fn()})
})

test('should display language icons', () => {
  const wrapper = setup()
  const languageIcons = findByTestAttr(wrapper, 'language-icon')
  expect(languageIcons.length).toBeGreaterThan(0)
})

test('should call setLanguage prop upon click', () => {
  const wrapper = setup()
  const languageIcons = findByTestAttr(wrapper, 'language-icon')

  const firstIcon = languageIcons.first()
  firstIcon.simulate('click')

  expect(mockSetLanguage).toHaveBeenCalled()
})




