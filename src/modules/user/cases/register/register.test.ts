import request from 'supertest'
import app from 'server'
import prisma from 'database'

const server = app()

describe('POST /register', () => {
  it('Responds with JSON', (done) => {
    request(server)
      .post('/auth/register')
      .set('Accept', 'application/json')
      .send({
        username: 'jrtoruhn',
        password: 'johndue123',
        email: 'johnrdtrruoe@domain.com'
      })
      .type('json')
      .expect(201, done)
  })
})

afterAll(async () => {
  await prisma.user.deleteMany()
  await prisma.$disconnect()
})
