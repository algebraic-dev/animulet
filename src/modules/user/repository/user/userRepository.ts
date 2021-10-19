import { User } from '@user/models/user'
import prisma from 'database'

const save = async (user: User): Promise<User> =>
  prisma.user.create({ data: user })

const findById = async (id: string): Promise<User | null> =>
  prisma.user.findUnique({ where: { id } })

const findByUsername = async (username: string): Promise<User | null> =>
  prisma.user.findUnique({ where: { username } })

const findByEmail = async (email: string): Promise<User | null> =>
  prisma.user.findUnique({ where: { email } })

export default { save, findById, findByUsername, findByEmail }
