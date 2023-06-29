function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }
  
  // Mapping of digits to letters
  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  
  const combinations = [];
  backtrack('', digits);
  return combinations;
  
  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) {
      combinations.push(combination);
      return;
    }
    
   // const currentDigit = nextDigits[0];
   // const letters = digitToLetters[currentDigit];
    
