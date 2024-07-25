// basic integration test

const request = require('supertest');
const app = require('./api');


let server;

before((done) => {
    // Start the server if not already started
    server = app.listen(done);
});

after((done) => {
    // Close the server after all tests
    if (server) {
        server.close(done);
    } else {
        done();
    }
});

describe('GET /', () => {
    it('checks status code of GET /', (done) => {
        request(app)
        .get('/')
        .expect(200)
        .end((err) => {
            if (err) throw err;
            done();
        });
    });

    it('checks response message of GET /', (done) => {
        request(app)
        .get('/')
        .expect('Welcome to the payment system')
        .end((err) => {
            if (err) throw err;
            done();
        });
    });
});
