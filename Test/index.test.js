const request = require('supertest');

const app = require('../Src/app');

test('status 200 Ok"/"', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) done(err);
      return done();
    });
});

test('status 404 NOT FOUND', (done) => {
  request(app)
    .get('/error')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) done(err);
      return done();
    });
});
