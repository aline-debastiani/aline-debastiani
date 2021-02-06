const { encode, decode} = require('./parte2exercise1');

describe('Parte 2 exercício 1', () => {
    test('verifica de encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    test('verifica de decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });
    test('testa se as vogais são convertidas para os respectivos números', () => {
        expect(encode('aeiou')).toEqual('12345');
    });
    test('testa se os respectivos números são convertidos para as respectivas vogais', () => {
        expect(decode('12345')).toEqual('aeiou');
    });
    test('testa se as demais letras/números não sofrem alterações na função encode', () => {
        expect(encode('hi there')).toEqual('h3 th2r2');
    });
    test('testa se as demais letras/números não sofrem alterações na função decode', () => {
        expect(decode('hi 6789')).toEqual('hi 6789');
    });
    test('checa se o retorno tem o mesmo numero de caracteres do parâmetro', () => {
        expect(encode('trybe').length).toEqual(5);
    });
    test('checa se o retorno tem o mesmo numero de caracteres do parâmetro', () => {
        expect(decode('trybe').length).toEqual(5);
    });
});
