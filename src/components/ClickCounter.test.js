import React from 'react';
import { shallow } from 'enzyme'
import ClickCounter from './ClickCounter';

const setup = (props={}) => {
  return shallow(<ClickCounter {...props}/>)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders without error', () => {
  // const wrapper = shallow(<ClickCounter/>)
  const wrapper = setup()
  const clickComponent = findByTestAttr(wrapper,'component-click')

  expect(clickComponent.length).toBe(1)
})

test('renders increment button', () => {
  // const wrapper = shallow(<ClickCounter/>)
  const wrapper = setup()
  // const button = wrapper.find("[data-test='increment-button']")
  const button = findByTestAttr(wrapper,'increment-button')

  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = shallow(<ClickCounter/>)
  const counterDisplay = wrapper.find("[data-test='counter-display']")

  expect(counterDisplay.length).toBe(1)
})

test('counter starts at 0', () => {
  // Check hooks
})

test('clicking button increments counter display', () => {
  // Check hooks
  // const counter = 7
  const wrapper = setup()
  const button = findByTestAttr(wrapper,'increment-button')

  button.simulate('click')
  const counterDisplay = wrapper.find("[data-test='counter-display']")
  // expect(counterDisplay.text()).toContain(counter + 1)
})

