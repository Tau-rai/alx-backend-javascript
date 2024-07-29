const request = require('supertest');
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const app = require('./api');

describe('Index Page', () => {
    it('should return status 200', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
});

describe('Cart Page', () => {
    it('should return status 200 when :id is a number', (done) => {
        request(app)
            .get('/cart/7')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Payment methods for cart 7');
                done();
            });
    });

    it('should return status 404 when :id is not a number', (done) => {
        request(app)
            .get('/cart/xyz')
            .expect(404)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Cart ID must be a number');
                done();
            });
    });
});

describe('Payment Methods', () => {
    it('GET /available_payments returns correct payment methods', (done) => {
        request(app)
            .get('/available_payments')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                assert.deepStrictEqual(res.body, {
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                });
                done();
            });
    });
});

describe('Login', () => {
    it('POST /login returns the correct message', (done) => {
        request(app)
            .post('/login')
            .send({ userName: 'Betty' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                assert.strictEqual(res.text, 'Welcome Betty');
                done();
            });
    });
});
