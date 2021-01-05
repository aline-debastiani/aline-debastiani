const myRemoveWithoutCopy = require('./exercise3');

describe('Exercicio 3', () => {
    test('A função retorna um novo array sem o item especificado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    
    test('A função deve retornar o array correto', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('Muda o array passado', () => {
        const arr = [1, 2, 3, 4];
        myRemoveWithoutCopy(arr, 1);
        expect(arr).toEqual([2, 3, 4]);
    });

    test('A função retorna um novo array sem o item especificado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});
