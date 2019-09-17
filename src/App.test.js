import React from 'react';
import { mount } from 'enzyme'
import { findByTestAttr } from './testUtils'
import App from './App';

import hookActions from './actions/hookActions'

const mockGetSecretWord = jest.fn()

const setup = (secretWord = 'party') => {
  mockGetSecretWord.mockClear()
  hookActions.getSecretWord = mockGetSecretWord

  // mock the useReducer
  const mockUseReducer = jest.fn()
    .mockReturnValue([
      { secretWord },
      jest.fn()
    ])
  // replace the actual one with our mock
  React.useReducer = mockUseReducer
  
  
  // use mount because useEffect is not called on shadow (enzyme issue 2086)
  return mount(<App/>)
}

it('app renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-app')
  expect(component.length).toBe(1)
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup()

    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled()
  })

  test('does not update on app update', () => {
    const wrapper = setup()
    // need to clear after setup so starting fresh
    mockGetSecretWord.mockClear()
    // still cannot use update() because won't trigger useEffect (issue 2091)
    wrapper.setProps()

    expect(mockGetSecretWord).not.toHaveBeenCalled()
  })
})

describe("secretWord is not null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup()
  })

  test('should render app when secretWord is not null', () => {
    const component = findByTestAttr(wrapper, 'component-app')
    expect(component.exists()).toBe(true)
  })

  test('should not render spinner when secretWord is not null', () => {
    const spinner = findByTestAttr(wrapper, 'spinner')
    expect(spinner.exists()).toBe(false)
  }) 
})

describe("secretWord is null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null)
  })

  test('should not render app when secretWord is null', () => {
    const component = findByTestAttr(wrapper, 'component-app')
    expect(component.exists()).toBe(false)
  })

  test('should render spinner when secretWord is null', () => {
    const spinner = findByTestAttr(wrapper, 'spinner')
    expect(spinner.exists()).toBe(true)
  }) 
})

