import React from "react";
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from "../testUtils";
import languageContext from '../contexts/languageContext'

import Input from "./Input";

const setup = ({ language, secretWord }) => {
  secretWord = secretWord || 'party'
  language = language || 'en'
  return mount(
    <languageContext.Provider value={language}>
      <Input secretWord={secretWord} />
    </languageContext.Provider>
  );
};

describe('language picker', () => {
  test('should render submit button in english', () => {
    const wrapper = setup({ language: 'en'})
    const button = findByTestAttr(wrapper, 'submit-button')
    expect(button.text()).toBe('Submit')
  })

  test('should render submit button in emoji', () => {
    const wrapper = setup({ language: 'emoji'})
    const button = findByTestAttr(wrapper, 'submit-button')
    expect(button.text()).toBe('🚀')
  })
  
})

it("should render component without error", () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});

it("should receive the correct props", () => {
  const expectedProps = { secretWord: "party" };
  checkProps(Input, expectedProps);
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({ });
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("when button is clicked an empty string is passed to setCurrentGuess", () => {
    const button = findByTestAttr(wrapper, "submit-button");

    button.simulate("click", {
      preventDefault() {}
    });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
