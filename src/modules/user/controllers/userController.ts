import { Response, Request } from 'express'
import { isLeft } from 'fp-ts/lib/Either'
import jwt from 'jsonwebtoken'

import { register as registerCase } from '@user/cases/register/registerCase'
import { validateRegisterDTO } from '@user/cases/register/registerDTO'

import { login as loginCase } from '@user/cases/login/loginCase'
import { validateLoginDTO } from '@user/cases/login/loginDTO'

export const login = async (request: Request, response: Response) => {
  const dto = await validateLoginDTO(request.body)

  if (isLeft(dto)) {
    return response.status(400).json(dto.left)
  }

  const res = await loginCase(dto.right)

  if (isLeft(res)) {
    return response.status(400).json(res.left)
  }

  const privateKey: string = process.env.JWT_PRIVATE_KEY || ''
  const token = jwt.sign({ id: res.right.id }, privateKey)

  response.status(201).json({ token })
}

export const register = async (request: Request, response: Response) => {
  const dto = await validateRegisterDTO(request.body)

  if (isLeft(dto)) {
    return response.status(400).json(dto.left)
  }

  const res = await registerCase(dto.right)

  if (isLeft(res)) {
    return response.status(400).json(res.left)
  }

  const privateKey: string = process.env.JWT_PRIVATE_KEY || ''
  const token = jwt.sign({ id: res.right.id }, privateKey)

  response.status(201).json({ token })
}
