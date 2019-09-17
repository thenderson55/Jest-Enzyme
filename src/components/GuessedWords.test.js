import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../testUtils";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "lucky",
      letterMatchCount: 0
    },
    {
      guessedWord: "yolo",
      letterMatchCount: 2
    }
  ]
};

import GuessedWords from "./GuessedWords";

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guesssed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guesssed", () => {
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders `guessed words` section", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);

  });

  test("correct number of guessed words", () => {
    const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});

describe('languagePicker', () => {
  test('should render guess instructions in english by default', () => {
    const wrapper = setup({ guessedWords: []})
    const instructions = findByTestAttr(wrapper, 'instructions')
    expect(instructions.text()).toBe('Try to guess the secret word!')
  })
  test('should render guess instructions in emoji', () => {
    const mockUseContext = jest.fn().mockReturnValue('emoji')
    React.useContext = mockUseContext
    const wrapper = setup({ guessedWords: []})
    const instructions = findByTestAttr(wrapper, 'instructions')
    expect(instructions.text()).toBe('🤔🤫🔤')

  })
  
})
