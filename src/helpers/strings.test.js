import stringsModule from "./strings";
const { getStringByLanguage } = stringsModule;

const strings = {
  en: { submit: "submit" },
  emoji: { submit: "🚀" },
  mermish: {}
};

describe("language string testing", () => {
  const mockWarn = jest.fn();
  let orignalWarn;

  beforeEach(() => {
    orignalWarn = console.warn;
    console.warn = mockWarn;
  });

  afterEach(() => {
    console.warn = orignalWarn;
    // console.warn = require('console').warn
  });

  test("should return correct submit string for english", () => {
    const string = getStringByLanguage("en", "submit", strings);
    expect(string).toBe("submit");
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test("should return correct submit string for emoji", () => {
    const string = getStringByLanguage("emoji", "submit", strings);
    expect(string).toBe("🚀");
    expect(mockWarn).not.toHaveBeenCalled();
  });

  test("should return english string when langauge does not exist", () => {
    const string = getStringByLanguage("notALanguage", "submit", strings);
    expect(string).toBe("submit");
    expect(mockWarn).toHaveBeenCalledWith(
      "Could not get string[submit] for [notALanguage]"
    );
  });

  test("should return english submit string when submit does not exist for language", () => {
    const string = getStringByLanguage("mermish", "submit", strings);
    expect(string).toBe("submit");
    expect(mockWarn).toHaveBeenCalledWith(
      "Could not get string[submit] for [mermish]"
    );
  });
});
