window.onload = function () {
    let estadosArray = [
"Acre",
"Alagoas",
"Amapá",
"Amazonas",
"Bahia",
"Ceará",
"Distrito Federal",
"Espírito Santo",
"Goiás",
"Maranhão",
"Mato Grosso",
"Mato Grosso do Sul",
"Minas Gerais",
"Pará",
"Paraíba",
"Paraná",
"Pernambuco",
"Piauí",
"Rio de Janeiro",
"Rio Grande do Norte",
"Rio Grande do Sul",
"Rondônia",
"Roraima",
"Santa Catarina",
"São Paulo",
"Sergipe",
"Tocantins"
];
    let estadoSelect = document.getElementById('estados')
    for (let index = 0; index < estadosArray.length; index ++) {
        let option = document.createElement('option');
        option.innerText = estadosArray[index];
        option.value = estadosArray[index];
        estadoSelect.appendChild(option);
    }
};