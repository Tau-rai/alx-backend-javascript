// tests using Sinon stubs
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
      calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
      consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
      calculateNumberStub.restore();
      consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);
  });

  it('should log the correct message', () => {
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');
  });
});

