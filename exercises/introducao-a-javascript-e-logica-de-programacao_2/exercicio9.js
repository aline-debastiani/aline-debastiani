//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [];

for (let index = 1; index <= 25; index++) {
    numbers.push(index);
}
console.log(numbers);

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index] / 2);
}