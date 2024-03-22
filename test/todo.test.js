const request = require('supertest');
const app = require('../app');

describe('POST /api/todo', function () {
    it('insert todo data', function (done) {
        request(app)
            .post('/api/todo')
            .send({
                title: 'Data Testing'
            })
            .end(function (err, res) {
                if (err) return done(err);

                expect(res.body.title).toEqual('Data Testing')
                return done();
            });
    });
});