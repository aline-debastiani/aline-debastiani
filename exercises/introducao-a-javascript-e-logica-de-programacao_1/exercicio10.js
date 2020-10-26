let custoDeUmProduto = 10;
let valorDeVenda = 50;

if (custoDeUmProduto >= 0 && valorDeVenda >=0) {
    let valorCustoTotal = custoDeUmProduto * 1.2;
    let lucro = (valorDeVenda - valorCustoTotal) * 1000;
    console.log(lucro);
} else {
    console.log("Erro, valor menor que zero!");
};