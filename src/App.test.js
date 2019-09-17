import React from 'react';
import { mount } from 'enzyme'
import { findByTestAttr } from './testUtils'
import App from './App';

import hookActions from './actions/hookActions'

const mockGetSecretWord = jest.fn()

const setup = () => {
  mockGetSecretWord.mockClear()
  hookActions.getSecretWord = mockGetSecretWord

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


