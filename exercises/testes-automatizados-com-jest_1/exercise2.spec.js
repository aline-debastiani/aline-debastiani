const myRemove = require('./exercise2');

describe('Exercicio 2', () => {
    test('A função retorna um novo array sem o item especificado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('A função deve retornar o array correto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('Verifica se o array passado por parâmetro não mudou', () => {
        const arr = [1, 2, 3, 4];
        myRemove(arr, 1);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    test('A função retorna um novo array sem o item espcificado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});
