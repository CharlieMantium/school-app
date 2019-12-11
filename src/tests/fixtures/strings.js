export const strings = [
  {
    inputString: 'Marry had a little lamb.',
    searchedString: 'y',
    expectedResult: [
      { str: 'Marr', isSearched: false },
      { str: 'y', isSearched: true },
      { str: ' had a little lamb.', isSearched: false },
    ],
  },
  {
    inputString: 'a',
    searchedString: 'a',
    expectedResult: [{ str: 'a', isSearched: true }],
  },
  {
    inputString: 'aa',
    searchedString: 'a',
    expectedResult: [{ str: 'a', isSearched: true }, { str: 'a', isSearched: true }],
  },
  {
    inputString: 'a;aa;a',
    searchedString: 'aa',
    expectedResult: [
      { str: 'a;', isSearched: false },
      { str: 'aa', isSearched: true },
      { str: ';a', isSearched: false },
    ],
  },
  {
    inputString: 'aaAAaa',
    searchedString: 'aaaaaa',
    expectedResult: [{ str: 'aaAAaa', isSearched: true }],
  },
  {
    inputString: 'abc',
    searchedString: 'ABC',
    expectedResult: [{ str: 'abc', isSearched: true }],
  },
  {
    inputString: 'aaAAaa',
    searchedString: 'aa',
    expectedResult: [
      { str: 'aa', isSearched: true },
      { str: 'AA', isSearched: true },
      { str: 'aa', isSearched: true },
    ],
  },
  {
    inputString: 'abc',
    searchedString: 'abcd',
    expectedResult: [{ str: 'abc', isSearched: false }],
  },
];
