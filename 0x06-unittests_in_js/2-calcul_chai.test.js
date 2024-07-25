// tests using chai
const { expect } = require('chai');

const calculateNumber = require('./2-calcul_chai')

describe('calculateNumber', () => {
    it('should return the sum of two intergers', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return rounded subtraction with type SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
        expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    it('should return rounded division with type DIVIDE', () => {
        expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });

    it('should return Error when b = 0', () => {
        expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });

});