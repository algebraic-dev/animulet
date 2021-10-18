import { User } from '@user/models/user'
import prisma from 'database'

const save = async (user: User): Promise<User> => {
  return await prisma.user.create({ data: user })
}

const findById = async (id: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({ where: { id } })

  return user
}

const findByUsername = async (username: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({ where: { username } })

  return user
}

const findByEmail = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({ where: { email } })

  return user
}

export default { save, findById, findByUsername, findByEmail }
