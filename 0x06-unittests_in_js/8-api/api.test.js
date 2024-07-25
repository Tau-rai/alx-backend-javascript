// basic integration test

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
    
