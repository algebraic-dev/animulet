import { validateRegisterDTO } from '@user/cases/register/registerDTO'
import { Response, Request } from 'express'
import { isLeft } from 'fp-ts/lib/Either'
import { register as registerCase } from '@user/cases/register/registerCase'

export const login = (request: Request, response: Response) => {
  throw new Error('Unimplemented')
}

export const register = async (request: Request, response: Response) => {
  const dto = await validateRegisterDTO(request.body)

  if (isLeft(dto)) {
    return response.status(400).json(dto.left)
  }

  const user = await registerCase(dto.right)

  if (isLeft(user)) {
    return response.status(400).json(user.left)
  }

  response.status(201).json({})
}
