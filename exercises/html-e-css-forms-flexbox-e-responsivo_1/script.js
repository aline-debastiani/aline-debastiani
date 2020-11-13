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
function validaData(data) {    

    if (!/^(\d{2}\/){2}\d{4}$/.test(data)) return false;
    let day = parseInt(data.slice(0, 2))
    let month = parseInt(data.slice(3, 5));
    let year = parseInt(data.slice(6, 11));
    if (day <= 0 || day > 31 ||
    month <= 0 || month > 12 ||
    year <= 0) return false;
    return true;
    }
    let startDate = document.getElementById('datainicio');
    startDate.addEventListener('change', function (event) {
    let date = event.target.value;
    if (!validaData(date)) {
    alert('A data inserida é inválida.');
    event.target.value = '';
  }
});

