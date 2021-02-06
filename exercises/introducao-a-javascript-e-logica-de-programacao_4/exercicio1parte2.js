//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindrome(palavra) {
    let arrayLetras = palavra.split("");
    let isPalindrome = true;
    for (let index in arrayLetras) {
        if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}

console.log(palindrome('arara'));
console.log(palindrome('desenvolvimento'));