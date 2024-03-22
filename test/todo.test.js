const request = require('supertest');
const app = require('../app');


describe('Todo Testing API', () => {
    describe('/api/todo', () => {
        it('should return new todo data', (done) => {
            const data = {
                "id": 11,
                "title": "Data Testing",
                "createdAt": "2024-03-21T14:40:59.997Z",
                "updatedAt": "2024-03-21T14:40:59.997Z"
            }

            request(app)
                .post('/api/todo')
                .send(data)
                .end((err, res) => {
                    if (err) {
                        done(err)
                        return
                    }
                    console.log(res.body.title, "<<<<<<<<");
                    expect(res.body.title).toEqual('Data Testing')
                    expect(res.status).toEqual(201)

                    done()
                })

        })
    })
})