// tests using Sinon spies

const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should log to the console the right string', () => {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    consoleSpy.restore();
  });
});
