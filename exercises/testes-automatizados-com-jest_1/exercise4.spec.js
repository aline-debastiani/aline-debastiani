const myFizzBuzz = require('./exercise4');

describe('Exercicio 4', () => {
    test('retorna se um numero é divisivel por 3 e por 5 e retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    test('verifica se um número é divisivel por 3 e retorna o valor esperado', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });

    test('verifica se um número é divisivel por 5 e retorna o valor esperado', () => {
        expect(myFizzBuzz(25)).toBe('buzz');
    });

    test('verifica se quando umm número não é divisivel por 3 e 5 retorna o valor esperado', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });

    test('Se o parametro não for um numero deve retornar false', () => {
        expect(myFizzBuzz('7')).toBeFalsy();
    });
});
