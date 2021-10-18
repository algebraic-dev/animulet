import request from 'supertest'
import app from '../../src/server'
import prisma from '../../src/database'

const server = app()

describe('POST /register', () => {
  it('Responds with JSON', (done) => {
    request(server)
      .post('/auth/register')
      .set('Accept', 'application/json')
      .send({
        username: 'jrtoruhn',
        email: 'johnrdtrruoe@domain.com',
        password: 'jorthrundoe123'
      })
      .type('json')
      .expect(201, done)
  })
})

afterAll(async () => {
  await prisma.user.deleteMany()
  await prisma.$disconnect()
})
