const encode = (word) => {
  const splitWord = word.split('');
  
  const encodeWord = splitWord.map((vogal, index) => {
      if (vogal === 'a') return splitWord[index] = 1;
      if (vogal === 'e') return splitWord[index] = 2;
      if (vogal === 'i') return splitWord[index] = 3;
      if (vogal === 'o') return splitWord[index] = 4;
      if (vogal === 'u') return splitWord[index] = 5;
      else return vogal;
  });
    return encodeWord.join('');
};

const decode = (word) => {
    const splitWord = word.split('');

    const decodeWord = splitWord.map((number, index) => {
        if (number === '1') return splitWord[index] = 'a';
        if (number === '2') return splitWord[index] = 'e';
        if (number === '3') return splitWord[index] = 'i';
        if (number === '4') return splitWord[index] = 'o';
        if (number === '5') return splitWord[index] = 'u';
        else return number;
    });
    return decodeWord.join('');
};

const functions = { encode, decode };
module.exports = functions;
