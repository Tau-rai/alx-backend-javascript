// regex integration test
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
    
describe('GET Cart Page', () => {
    const url = 'http://localhost:7865/cart/';
    it('checks status code 200 when :id is a number', (done) => {
        request(`${url}7`, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 7');
            done();
        });
    });

    it('should return status 404 when :id is not a number', (done) => {
        request(`${url}xyz`, (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            expect(body).to.equal('Cart ID must be a number');
            done();
        });
    });
});