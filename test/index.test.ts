import { correctSpeechMarks } from '../index'

describe('testing speech mark corrector', () => {
  test('when the opening speech mark at the beginning of the line', () => {
    expect(correctSpeechMarks("'This is to test opening and closing dialogue,' he said.")).toBe("‘This is to test opening and closing dialogue,’ he said.");
  });
  test('when the opening speech mark in the middle of the line', () => {
    expect(correctSpeechMarks("She nodded. 'You're right! We should use the right opening and closing!'")).toBe("She nodded. ‘You're right! We should use the right opening and closing!’");
  });
  test('when there is also an apostrophe', () => {
    expect(correctSpeechMarks("'The Jones' dog doesn't like our garden?'")).toBe("‘The Jones' dog doesn't like our garden?’");
  });
});