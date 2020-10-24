let peçaDeXadrez = "cavalo";

switch (peçaDeXadrez.toLowerCase()) {
    case "bispo":
        console.log("Bispo-> Diagonal");
        break;
    case "rainha":
        console.log("Rainha-> Diagonal e Horizontal");
        break;
    case "rei":
        console.log("Rei-> Todas as direções");
        break;
    case "cavalo":
        console.log("Cavalo-> L pode pular sobre as peças");
        break;
    case "torre":
        console.log("Torre-> Vertical e Horizontal");
        break;
    case "peão":
        console.log("Peão-> penas uma casa para frente, no primeiro movimento podem ser duas casas");
        break;
    default:
        console.log("Erro, peça inválida!");
        break;
}