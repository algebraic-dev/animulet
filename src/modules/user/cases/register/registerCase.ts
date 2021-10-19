import { Either, left, right } from 'fp-ts/lib/Either'
import argon2 from 'argon2'

import { User } from '@user/models/user'
import { RegisterError } from './registerError'
import userRepository from '@user/repository/user/userRepository'
import { RegisterDTO } from './registerDTO'

export const register = async ({
  username,
  email,
  password
}: RegisterDTO): Promise<Either<RegisterError, User>> => {
  const verifyEmail = await userRepository.findByEmail(email)
  if (verifyEmail) return left({ kind: 'EmailAlreadyUsed' })

  const verifyUsername = await userRepository.findByUsername(username)
  if (verifyUsername) return left({ kind: 'UsernameAlreadyUsed' })

  const hashedPassword = await argon2.hash(password)

  const user = await userRepository.save({
    username,
    email,
    password: hashedPassword
  })

  return right(user)
}
