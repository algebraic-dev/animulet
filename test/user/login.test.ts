import request from 'supertest'
import app from '../../src/server'
import prisma from '../../src/database'

const server = app()

describe('GET /login', () => {
  it('Responds with 500', (done) => {
    request(server).post('/auth/login').expect(500, done)
  })
})

afterAll(async () => {
  await prisma.user.deleteMany()
  await prisma.$disconnect()
})
