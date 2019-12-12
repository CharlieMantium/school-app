import { strings } from 'tests/fixtures/strings';

import { divideByFilteredString } from './divideByFilteredString';

describe('divideByFilteredString', () => {
  it('should return the correct values', () => {
    strings.forEach(testCase => {
      const { inputString, searchedString, expectedResult } = testCase;
      const output = divideByFilteredString(inputString, searchedString);
      expect(output).toEqual(expectedResult);
    });
  });

  it('should return the correct values without searched text passed', () => {
    const inputString = '1: Mathematics is the language of nature.';
    const output = divideByFilteredString(inputString);
    expect(output).toEqual([]);
  });

  it('should return the correct values without any arguments passed', () => {
    const output = divideByFilteredString();
    expect(output).toEqual([]);
  });
});
