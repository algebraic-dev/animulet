import request from 'supertest'
import app from 'server'
import prisma from 'database'

import { hash } from 'argon2'

const server = app()

beforeAll(async () => {
  prisma.user.create({
    data: {
      email: 'tests@hotmail.com',
      password: await hash('12345678'),
      username: 'tests'
    }
  })
})

describe('GET /login', () => {
  it('Responds with 202', (done) => {
    request(server)
      .post('/auth/login')
      .send({
        login: 'tests@hotmail.com',
        password: '12345678'
      })
      .expect(202, done)
  })
})

afterAll(async () => {
  await prisma.user.deleteMany()
  await prisma.$disconnect()
})
