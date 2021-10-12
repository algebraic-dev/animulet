import request from 'supertest'
import app from '../../src/server'

const server = app()

describe('POST /register', () => {
  it('Responds with JSON', (done) => {
    request(server)
      .post('/register')
      .send({
        username: 'john',
        email: 'johndoe@domain.com',
        password: 'johndoe123'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .then(done)
      .catch(done)
  })
})
