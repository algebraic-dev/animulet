import request from 'supertest'
import app from '../../src/server'

const server = app()

describe('GET /login', () => {
  it('Responds with 500', (done) => {
    request(server).post('/login').expect(500, done)
  })
})
