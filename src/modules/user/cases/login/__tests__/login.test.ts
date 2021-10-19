import request from 'supertest'
import app from 'server'
import prisma from 'database'

import { hash } from 'argon2'

const server = app()

beforeAll(async () =>
  prisma.user.create({
    data: {
      email: 'tests@hotmail.com',
      password: await hash('123456789'),
      username: 'tests'
    }
  })
)

describe('GET /login', () => {
  it('Responds with login ok', (done) => {
    request(server)
      .post('/auth/login')
      .send({
        login: 'tests@hotmail.com',
        password: '123456789'
      })
      .expect(202, done)
  })

  it('Responds with wrong password', (done) => {
    request(server)
      .post('/auth/login')
      .send({
        login: 'tests@hotmail.com',
        password: '123456781'
      })
      .expect(403, done)
  })
})

afterAll(async () => {
  await prisma.user.deleteMany()
  await prisma.$disconnect()
})
