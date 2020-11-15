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

let botaoEnviar = document.querySelector('#submit');

function validacaoData() {
    let inputData = document.querySelector('#input-data-ini');
    let data = inputData.value;
    let dataArray = data.split('/');
    let dia = parseInt(dataArray[0]);
    let mes = parseInt(dataArray[1]);
    let ano = parseInt(dataArray[2]);
    if (!(dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 0)) {
        inputData.classList = 'error';
        return 'Erro na formatação da data';
    }
    return '';
}

botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault();
    let erro;
    let erros = '';
    erro = validacaoData();
    if (erro != '') {
        erros += `${erro}\n`
    }
    let inputsText = document.querySelectorAll("input[type=text],textarea");
    for (let index = 0; index < inputsText.length; index++) {
        let input = inputsText[index];
        if (input.required) {
        if (input.value === '') {
            input.classList.add('error');
        erros +=`O campo ${input.name} é obrigatório\n`;
        }    
        if (input.minlength && input.value.length < input.minlength) {
            input.classList.add('error');
        erros +=`O campo ${input.name} deve possuir no minímo ${input.minlength} caracteres\n`;
        }
    }
}
if (erros !== '') { 
    alert(erros);   
} else {
    let form = document.querySelector('form');
    form.reset();
    for (let index = 0; index < inputsText.length; index++) {
        inputsText[index].classList.remove('error');
    }
}
});

