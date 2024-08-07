// basic integration tests
const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index Page', () => {
    const url = 'http://localhost:7865';

    it('should return status 200', (done) => {
        request(url, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message', (done) => {
        request(url, (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
