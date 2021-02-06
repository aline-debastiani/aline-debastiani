//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceDeMenor(numeros) {
    let indiceMenor = 0;
    for( let indice in numeros) {
        if (numeros[indiceMenor] > numeros[indice]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}
console.log(indiceDeMenor([2, 4, 6, 7, 10, 0, -3]));