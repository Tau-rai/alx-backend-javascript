const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should handle integer inputs without rounding', () => {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it('should return 4 when a = 1.4 and b = 2.6',  () => {
        assert.strictEqual(calculateNumber(1.4, 2.6), 4);
    });

    it('should return 0 when a = 0.1 and b = -0.1',  () => {
        assert.strictEqual(calculateNumber(0.1, -0.1), 0);
    });

    it('should return 6 when a = 2.5 and b = 2.5',  () => {
        assert.strictEqual(calculateNumber(2.5, 2.5), 6);
    });

    it('should return -1 when a = -1.5 and b = -0.5',  () => {
        assert.strictEqual(calculateNumber(-1.5, -0.5), -1);
    });
});
