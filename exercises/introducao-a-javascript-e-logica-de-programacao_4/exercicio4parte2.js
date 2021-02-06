//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function nomeMaior(palavras) {
    let nomeMaior = palavras[0];
    for (let indice in palavras) {
        if (nomeMaior.length < palavras[indice].length) {
            nomeMaior = palavras[indice];
        }
    }
    return nomeMaior;
}
console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));