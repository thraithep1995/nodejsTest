const request = require('supertest');
const app = require('../index')

describe('GET /status' , () => {
    it('response with status' , (done) => {
        request(app.get('/status').expect({
            message: 'Status OK'
        },done))
    })
})