// tests using Sinon spies
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
      const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
      calculateNumberSpy.restore();
  });
  
  it('should call the console.log with the correct message', () => {
      const consoleLogSpy = sinon.spy(console, 'log');
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
      consoleLogSpy.restore();
  });
});
