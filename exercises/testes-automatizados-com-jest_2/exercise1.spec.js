const uppercase = require('./exercise1');

it(`uppercase 'test' to equal 'TEST'`, (done) => {
    uppercase('test', (str) => {
        expect(str).toBe('TEST');
        done();
    });
});
