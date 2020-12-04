const assert = require('assert')

const sum = (...numbers) => {
    let total = 0
    for (number of numbers) total += number
    return total
}

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)