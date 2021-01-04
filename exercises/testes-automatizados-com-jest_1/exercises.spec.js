const sum1 = require('./exercise1');

describe('Exercício 1', () => {
    test('A função soma a e b retorna o resultado da soma', () => {
        expect(sum1(4, 5)).toBe(9);
    });

    test('A função testa se 0 + 0 resulta em 0', () => {
        expect(sum1(0, 0)).toBe(0);
    });

    test('A função testa se apresenta erro ao utilizar um string como parâmetro', () => {
        expect(() => {
            sum1(4, '5');
        }).toThrow();
    });

    test('A função testa se a mensagem se erro é parameters must be numbers', () => {
        expect(() => {
            sum1(4, '5');
        }).toThrow(/parameters must be numbers/);
    });
});
