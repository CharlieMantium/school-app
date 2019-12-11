export const divideByFilteredString = (inputText, searchedText) => {
  let tempString = inputText;
  const searchedLength = searchedText.length;
  const dividedTextArray = [];
  while (tempString.toLowerCase().indexOf(searchedText.toLowerCase()) > -1) {
    const beforeSearched = tempString.substr(
      0,
      tempString.toLowerCase().indexOf(searchedText.toLowerCase()),
    );
    if (beforeSearched) {
      dividedTextArray.push({ str: beforeSearched, isSearched: false });
    }
    dividedTextArray.push({
      str: tempString.substr(
        tempString.toLowerCase().indexOf(searchedText.toLowerCase()),
        searchedLength,
      ),
      isSearched: true,
    });
    tempString = tempString.slice(
      tempString.toLowerCase().indexOf(searchedText.toLowerCase()) + searchedLength,
    );
  }
  if (tempString) {
    dividedTextArray.push({ str: tempString, isSearched: false });
  }
  return dividedTextArray;
};
