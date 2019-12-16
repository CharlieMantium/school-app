export const strings = [
  {
    inputString: 'Mary had a little lamb.',
    searchedString: 'y',
    expectedResult: [
      { str: 'Mar', isSearched: false },
      { str: 'y', isSearched: true },
      { str: ' had a little lamb.', isSearched: false },
    ],
  },
  {
    inputString: 'Mary had a little lamb.',
    searchedString: '',
    expectedResult: [],
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
  {
    inputString: '1: Mathematics is the language of nature.',
    searchedString: null,
    expectedResult: [],
  },
  {
    inputString: '1: Mathematics is the language of nature.',
    searchedString: undefined,
    expectedResult: [],
  },
  {
    inputString: '1: Mathematics is the language of nature.',
    searchedString: 1,
    expectedResult: [
      { str: '1', isSearched: true },
      { str: ': Mathematics is the language of nature.', isSearched: false },
    ],
  },
  {
    inputString: '1: Mathematics is the language of nature.',
    searchedString: { apples: 'and bananas', isTakeOverTheWorld: true, attempts: 101 },
    expectedResult: [{ str: '1: Mathematics is the language of nature.', isSearched: false }],
  },
];
