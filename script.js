function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitMap = {
    '0': '0',
    '1': '1',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const combinations = [''];
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    const letters = digitMap[digit];
    const tempCombinations = [];
    for (let j = 0; j < combinations.length; j++) {
      for (let k = 0; k < letters.length; k++) {
        tempCombinations.push(combinations[j] + letters[k]);
      }
    }
    combinations.splice(0, combinations.length, ...tempCombinations);
  }

  return combinations;
}
