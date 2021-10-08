import request from 'supertest'
import app from '../../src/server'

describe('GET /login', () => {
  it('Responds with 200', (done) => {
    request(app).post('/login').expect(200, done)
  })
})
