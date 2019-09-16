import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./testUtils";

import Input from "./Input";

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

it("should render component without error", () => {
  const wrapper = setup();
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
    wrapper = setup();
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("when button is clicked and empty string is passed to setCurrentGuess", () => {
    const button = findByTestAttr(wrapper, "submit-button");

    button.simulate("click", {
      preventDefault() {}
    });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
