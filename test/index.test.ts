import { checkForPunctuation, correctLine } from '../index'

describe('testing speech mark corrector', () => {
  test('when the opening speech mark at the beginning of the line', () => {
    expect(correctLine("'This is to test opening and closing dialogue,' he said.")).toBe("‘This is to test opening and closing dialogue,’ he said.");
  });
  test('when the opening speech mark in the middle of the line', () => {
    expect(correctLine("She nodded. 'You're right! We should use the right opening and closing!'")).toBe("She nodded. ‘You're right! We should use the right opening and closing!’");
  });
  test('when there is also an apostrophe', () => {
    expect(correctLine("'The Jones' dog doesn't like our garden?'")).toBe("‘The Jones' dog doesn't like our garden?’");
  });
});

describe('testing checkForPunctuation', () => {
  test('when the inputted string is "?", it should return true', () => {
    expect(checkForPunctuation("?")).toBe(true)
  })
  test('when the inputted string is "a", it should return false', () => {
    expect(checkForPunctuation("a")).toBe(false)
  })
})