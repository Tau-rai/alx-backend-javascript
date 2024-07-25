// basic integration tests

const request = require('supertest');
const assert = require('assert');
const app = require('./api');


describe('GET /', () => {
    it('checks status code of GET /', (done) => {
        request(app)
        .get('/')
        .expect(200, done);
    });

    it('checks response message of GET /', (done) => {
        request(app)
        .get('/')
        .end((err, res) => {
            if (err) return done(err);
            assert.strictEqual(res.text, 'Welcome to the payment system');
            done();
        });
    });
});
    
describe('GET /cart/7', () => {
    it('checks status code of GET /cart/7', (done) => {
        request(app)
        .get('/cart/7')
        .expect(200, done);
    });

    it('checks response message of GET /cart/7', (done) => {
        request(app)
        .get('/cart/7')
        .end((err, res) => {
            if (err) return done(err);
            assert.strictEqual(res.text, 'Payment methods for cart 7');
            done();
        });
    });

    it('checks status code of GET /cart/xyz', (done) => {
        request(app)
        .get('/cart/xyz')
        .expect(404, done);
    });
});

describe('GET /login', () => {
    it('checks status code of GET /login', (done) => {
        request(app)
        .get('/login')
        .expect(200, done);
    });

    it('checks response message of GET /login', (done) => {
        request(app)
        .get('/login')
        .end((err, res) => {
            if (err) return done(err);
            assert.strictEqual(res.text, 'Login page');
            done();
        });
    });
});

describe('GET /available_payments', () => {
    it('checks status code of GET /available_payments', (done) => {
        request(app)
        .get('/available_payments')
        .expect(200, done);
    });

    it('checks response message of GET /available_payments', (done) => {
        request(app)
        .get('/available_payments')
        .end((err, res) => {
            if (err) return done(err);
            assert.strictEqual(res.text, 'Available payment methods');
            done();
        });
    });
});
