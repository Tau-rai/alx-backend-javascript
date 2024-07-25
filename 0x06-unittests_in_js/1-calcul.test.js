const assert = require('assert');

const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return rounded sum with type SUM', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return rounded subtraction with type SUBTRACT', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

    it('should return rounded division with type DIVIDE', () => {
        assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('should return Error when b = 0', () => {
        assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
});