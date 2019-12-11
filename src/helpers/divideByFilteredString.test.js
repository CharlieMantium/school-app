import { strings } from 'tests/fixtures/strings';

import { divideByFilteredString } from './divideByFilteredString';

describe('divideByFilteredString', () => {
  it('should return the correct values', () => {
    strings.forEach(testCase => {
      const { inputString } = testCase;
      const { searchedString } = testCase;
      const { expectedResult } = testCase;
      const output = divideByFilteredString(inputString, searchedString);
      expect(output).toEqual(expectedResult);
    });
  });
});
