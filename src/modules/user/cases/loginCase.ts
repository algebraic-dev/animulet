import { Either } from 'fp-ts/Either'
import { User } from '@user/models/user'
import { LoginError } from './loginError'

export const login = (user: String, pass: String): Either<User, LoginError> => {
  throw new Error('Unimplemented')
}
