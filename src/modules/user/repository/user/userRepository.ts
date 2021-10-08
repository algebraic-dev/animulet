import { User } from '@user/models/user'
import { Either } from 'fp-ts/Either'

export const save = (user: User): Either<User, String> => {
  throw new Error('unimplemented')
}

export const findById = (id: string): Either<User, String> => {
  throw new Error('unimplemented')
}

export const findByUsername = (id: string): Either<User, String> => {
  throw new Error('unimplemented')
}

export const findByEmail = (id: string): Either<User, String> => {
  throw new Error('unimplemented')
}
