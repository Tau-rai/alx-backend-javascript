const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return rounded sum', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
        assert.strictEqual(calculateNumber(1.4, 3.7), 5);
        assert.strictEqual(calculateNumber(0, 0), 0);
        assert.strictEqual(calculateNumber(-1, -3), -4);
        assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
        assert.strictEqual(calculateNumber(-1.5, -3.7), -6);
    });
});
