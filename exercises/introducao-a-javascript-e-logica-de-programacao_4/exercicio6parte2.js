//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaTodosNumeros(numeros) {
    let total = 0;
    for (let index = 1; index <= numeros; index ++) {
        total = total + index;
    }
    return total;
}
console.log(somaTodosNumeros(5));