const assert = require('assert')

const greet = (name, msg = 'Hi') => `${msg} ${name}`;

assert.strictEqual(greet("John"), "Hi John")
assert.strictEqual(greet("John", "Good morning"), "Good morning John")
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela")