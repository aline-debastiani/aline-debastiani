const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));