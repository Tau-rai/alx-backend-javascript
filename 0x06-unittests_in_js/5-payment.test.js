// tests using hooks
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.restore();
    });

    it('should log the correct message for 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(consoleLogSpy);
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
    });

    it('should log the correct message for 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledOnce(consoleLogSpy);
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
    });
});
