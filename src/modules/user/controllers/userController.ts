import { Response, Request } from 'express'
import { isLeft } from 'fp-ts/lib/Either'

import { register as _register } from '@user/cases/register/registerCase'
import { User } from '@user/models/user'

export const login = (request: Request, response: Response) => {
  throw new Error('Unimplemented')
}

export const register = async (request: Request, response: Response) => {
  const { username, email, password }: User = request.body

  const user = await _register({ username, email, password })

  if (isLeft(user)) {
    console.log(user.left)
    response.status(400).json({ error: user.left.kind })
  } else {
    response.status(201).json(user.right)
  }
}
